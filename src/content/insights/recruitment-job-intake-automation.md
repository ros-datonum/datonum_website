---
title: "From Client Brief to CRM: Automating Job Intake in a Recruitment Agency"
metaTitle: "Automating Job Intake in a Recruitment Agency"
description: "How recruitment agencies can automate job intake from client brief to CRM: what plain rules handle, where AI reading helps, and where a consultant decides."
publishedDate: 2026-10-21
relatedService: audit
relatedCaseStudy: opportunity-scoring
---

Every job an agency works on starts the same way: a client tells you what they need, and someone turns that into a record your team can work from. It is a small step. It is also the one that decides whether the shortlist, the rate on the timesheet, and the invoice at the end are right.

## Why job intake is where the hours quietly go

UK recruitment is a high-volume business. The REC estimates that the industry contributed £40.6 billion to the UK economy in 2024, and that around 872,000 temporary or contract workers were on assignment on any given day that year ([REC, UK Recruitment Industry Status Report 2024/25](https://www.rec.uk.com/our-view/research/recruitment-and-industry-status-report/uk-recruitment-industry-status-report-202425)). Behind every placement and every temp booking is a client request that someone had to read and enter.

No single brief takes long. That is exactly why the time is easy to miss. Ten minutes to read an email and type it into the CRM, another quarter of an hour chasing the rate or the start date the client left out, and a desk handling a steady flow of new jobs spends hours a week on intake without anyone calling it a process.

The cost is not only time. A brief entered with the wrong rate or the wrong shift pattern sends the wrong candidates to the client, and the mistake usually surfaces at the timesheet or invoice stage, when it is most expensive to fix.

## What a brief looks like when it arrives

Briefs rarely arrive in the shape your CRM expects. Here is an illustrative example of the kind of email a temp desk receives:

> Hi Sam, we need 3 forklift drivers for the Thornbury site from Monday, same as last time. Nights this week, then probably days. Usual rate. They'll need their counterbalance licence. Can you confirm by tomorrow?

To create a job from that, the consultant has to pull out a set of fields and notice which ones are not really there:

| Field | In the email | What the consultant has to do |
| --- | --- | --- |
| Role and number | 3 forklift drivers | Enter it |
| Location | Thornbury site | Match it to the client's site record |
| Start date | "Monday" | Turn it into a date |
| Shift pattern | Nights, "then probably days" | Ask: from when, and which days |
| Rate | "Usual rate" | Look it up, or ask |
| Requirements | Counterbalance licence | Enter it; check other compliance needs |
| Deadline | Confirm by tomorrow | Set a reminder |

Half of the work is reading. The other half is spotting what is missing before the job goes live.

## The steps, from capture to record

Broken down, job intake is six steps. Most of them do not need AI at all:

<figure class="fig fig-strip" style="--fig-cols:3">
<span class="fig__title">Job intake: client brief → CRM</span>
<ol>
<li data-kind="rule"><span class="fig-strip__n">01</span><span class="fig-strip__t">Capture and route</span><span class="fig-kind">Rule</span></li>
<li data-kind="ai"><span class="fig-strip__n">02</span><span class="fig-strip__t">Read the brief</span><span class="fig-kind">AI reads</span></li>
<li data-kind="rule"><span class="fig-strip__n">03</span><span class="fig-strip__t">Check required fields</span><span class="fig-kind">Rule</span></li>
<li data-kind="ai"><span class="fig-strip__n">04</span><span class="fig-strip__t">Draft the follow-up</span><span class="fig-kind">AI drafts</span></li>
<li data-kind="human"><span class="fig-strip__n">05</span><span class="fig-strip__t">Consultant approves</span><span class="fig-kind">Person decides</span></li>
<li data-kind="rule"><span class="fig-strip__n">06</span><span class="fig-strip__t">Create the job</span><span class="fig-kind">Rule</span></li>
</ol>
<figcaption>Four rule steps, two AI steps, one decision. Nothing goes to the client or into the CRM before step 5.</figcaption>
</figure>

## What plain rules handle

Rules are the cheapest and most reliable part of the build, and they do more of the work than most people expect:

- **Routing.** An email from a known client domain goes to the account owner. A brief that arrives through a booking form goes straight to step 3.
- **Required fields.** Each job type has a fixed checklist. A temp booking needs a start date, shift pattern, rate, and site. A permanent role needs a salary band and interview stages. A rule compares the extracted fields against the checklist and lists the gaps.
- **Duplicates.** If the same client already has an open job for the same role and dates, the rule flags it instead of creating a second record.
- **Records and reminders.** Once approved, creating the job, linking it to the client and contact, and setting the "confirm by tomorrow" reminder are all rules.

If your clients already book through a form with fixed fields, you may not need AI anywhere in this process. Plain automation will do the whole job.

## Where AI reading helps

AI earns its place at two steps, both of which involve language a rule cannot interpret:

- **Reading the brief.** Emails, call notes, forwarded threads, and attached job specs all describe the same things in different words. An AI model reads them and fills a fixed set of fields, and it marks a field as unknown rather than guessing. "Usual rate" stays a question, not a number.
- **Drafting the follow-up.** When the check finds gaps, AI drafts a short reply to the client that asks only for what is missing, in your agency's tone. The consultant edits or sends it.

The design matters more than the model. The AI never writes straight into the CRM, and it never sends anything to a client on its own.

## Where the consultant must decide, and why that is a feature

Some parts of job intake are judgment, not data entry: whether to take the job at all, how to respond to "usual rate" when the last booking was a year ago, whether a requirement is unusual enough to call the client. Those stay with the consultant.

The approval step is quick, because the consultant sees the original email next to the drafted job and the drafted follow-up, with the gaps already listed. It also keeps accountability where clients expect it: with a person at the agency, not with a system.

## A test before automating

Before building anything, count for one week:

1. How many new briefs arrive.
2. How many arrive incomplete and need a follow-up.
3. Roughly how long each one takes to enter, and to chase.

Then multiply. Here is a worked example for one desk, so you can see how the parts add up:

<figure class="fig fig-bars">
<span class="fig__title">Worked example: one desk, one week of job intake</span>
<ul>
<li style="--v:67%"><span class="fig-bars__l">Entering 15 briefs</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">2.5 h</span></li>
<li style="--v:33%"><span class="fig-bars__l">Chasing 5 gaps</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">1.25 h</span></li>
<li style="--v:100%"><span class="fig-bars__l">Total</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">3.75 h</span></li>
</ul>
<figcaption>An example, not a benchmark: it assumes 15 briefs a week, ten minutes to enter each, and one in three needing a fifteen-minute follow-up. Put in your own numbers.</figcaption>
</figure>

If the total is small, or most briefs already arrive complete through a form, leave the process alone. If it is a few hours a week per desk, or if mistakes at intake keep showing up later on timesheets and invoices, it is worth designing properly. Our [guide to AI workflow automation](/insights/what-is-ai-workflow-automation) has a four-question test for any step, and [AI vs automation](/ai-vs-automation) explains where each belongs.

## How an audit scopes this process

Job intake is a good first process for an [AI Readiness Audit](/services/ai-readiness-audit), because it is contained and repeats every day. The audit covers up to three connected processes in one part of the business, traced from the point work arrives to the point it is finished, over two to three weeks.

For job intake, that means speaking to the consultants who do it, looking at five to ten real briefs, and using the volume figures your team reports. The result is a workflow map, a ranked view of which steps to automate, a leave-alone list for the steps that do not need AI, and a 90-day roadmap.

For a related sequence already built, see the [opportunity scoring case study](/case-studies/opportunity-scoring): inbound inquiries read by AI, fixed rules applied separately, and anything uncertain routed to a person with the reason. More examples by function are on [What we automate](/what-we-automate).
