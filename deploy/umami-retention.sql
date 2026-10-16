-- Umami data retention (Privacy Notice §7): usage analytics up to 24 months, session
-- recordings (replay and heatmap data) up to 30 days. Umami has no built-in retention.
--
-- Written against Umami v3.2.0 (PostgreSQL; prisma/schema.prisma and
-- prisma/migrations/01_init … 20_add_heatmap). The schema uses relationMode = "prisma", so the
-- database has no foreign keys: child rows are deleted explicitly, before their parents.
-- Re-check the tables below after every Umami upgrade.
--
--   usage analytics (24 months)        timestamp column
--   website_event                      created_at
--   event_data                         created_at, plus rows of deleted website_event
--   session_data                       created_at
--   revenue                            created_at
--   session                            created_at, only when no website_event, session_data
--                                      or revenue row still refers to it
--   recordings (30 days)
--   session_replay                     created_at (falls back to ended_at, which is NOT NULL)
--   heatmap_event                      created_at (NOT NULL)
--   session_replay_saved               replays saved in the UI whose recording is gone
--
-- Run through deploy/umami-retention.sh. Called directly:
--   psql "$DATABASE_URL" -v dry_run=true  -f umami-retention.sql   # counts only
--   psql "$DATABASE_URL" -v dry_run=false -f umami-retention.sql   # deletes
-- Without -v dry_run it does a dry run. Every delete is bounded by a cutoff, so running it
-- again (daily, or twice in a row) only removes what has aged out since.

\set ON_ERROR_STOP on
\set analytics_retention '24 months'
\set recording_retention '30 days'
\if :{?dry_run}
\else
  \set dry_run true
\endif

-- Never wait behind Umami's own writes for long; a skipped run is retried the next day.
SET lock_timeout = '10s';
SET statement_timeout = '15min';

BEGIN;

CREATE TEMP TABLE retention_cutoff ON COMMIT DROP AS
SELECT now() - :'analytics_retention'::interval AS analytics,
       now() - :'recording_retention'::interval AS recording;

SELECT analytics AS analytics_cutoff, recording AS recording_cutoff FROM retention_cutoff;

-- Rows past their cutoff, per table. In a dry run this is the whole output.
SELECT 'website_event' AS table_name, count(*) AS rows_past_retention
  FROM website_event, retention_cutoff c WHERE created_at < c.analytics
UNION ALL
SELECT 'event_data', count(*)
  FROM event_data d, retention_cutoff c
 WHERE d.created_at < c.analytics
    OR d.website_event_id IN (SELECT event_id FROM website_event WHERE created_at < c.analytics)
UNION ALL
SELECT 'session_data', count(*) FROM session_data, retention_cutoff c WHERE created_at < c.analytics
UNION ALL
SELECT 'revenue', count(*) FROM revenue, retention_cutoff c WHERE created_at < c.analytics
UNION ALL
SELECT 'session', count(*)
  FROM session s, retention_cutoff c
 WHERE s.created_at < c.analytics
   AND NOT EXISTS (SELECT 1 FROM website_event e
                    WHERE e.session_id = s.session_id AND coalesce(e.created_at, 'infinity') >= c.analytics)
   AND NOT EXISTS (SELECT 1 FROM session_data d
                    WHERE d.session_id = s.session_id AND coalesce(d.created_at, 'infinity') >= c.analytics)
   AND NOT EXISTS (SELECT 1 FROM revenue r
                    WHERE r.session_id = s.session_id AND coalesce(r.created_at, 'infinity') >= c.analytics)
UNION ALL
SELECT 'session_replay', count(*)
  FROM session_replay, retention_cutoff c WHERE coalesce(created_at, ended_at) < c.recording
UNION ALL
SELECT 'heatmap_event', count(*) FROM heatmap_event, retention_cutoff c WHERE created_at < c.recording;

\if :dry_run
  \echo 'Dry run: nothing deleted.'
  ROLLBACK;
\else
  DELETE FROM event_data d
   USING retention_cutoff c
   WHERE d.created_at < c.analytics
      OR d.website_event_id IN (SELECT event_id FROM website_event WHERE created_at < c.analytics);

  DELETE FROM website_event e USING retention_cutoff c WHERE e.created_at < c.analytics;
  DELETE FROM session_data d USING retention_cutoff c WHERE d.created_at < c.analytics;
  DELETE FROM revenue r USING retention_cutoff c WHERE r.created_at < c.analytics;

  -- A session row is kept while anything recent still refers to it.
  DELETE FROM session s
   USING retention_cutoff c
   WHERE s.created_at < c.analytics
     AND NOT EXISTS (SELECT 1 FROM website_event e WHERE e.session_id = s.session_id)
     AND NOT EXISTS (SELECT 1 FROM session_data d WHERE d.session_id = s.session_id)
     AND NOT EXISTS (SELECT 1 FROM revenue r WHERE r.session_id = s.session_id);

  DELETE FROM session_replay r USING retention_cutoff c WHERE coalesce(r.created_at, r.ended_at) < c.recording;
  DELETE FROM heatmap_event h USING retention_cutoff c WHERE h.created_at < c.recording;

  -- Saving a replay in the UI does not extend retention: drop saved entries with no recording left.
  DELETE FROM session_replay_saved s
   WHERE NOT EXISTS (
     SELECT 1 FROM session_replay r WHERE r.website_id = s.website_id AND r.visit_id = s.visit_id
   );

  COMMIT;
  \echo 'Retention applied.'
\endif
