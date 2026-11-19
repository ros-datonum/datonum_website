---
title: "AI for a Shared Inbox: Sorting Email and Drafting Replies a Person Sends"
metaTitle: "Shared Inbox AI: Sorting and Reply Drafts"
description: "How AI email triage works in a shared inbox like info@: categories, routing, reply drafts from your own answers, and why nothing sends itself."
publishedDate: 2026-11-19
relatedService: impl
relatedCaseStudy: opportunity-scoring
relatedPackage: inbox-desk
---

Most small businesses have one address that everybody answers: info@, bookings@, hello@ or support@. It starts as a convenience. Then volume grows, and someone spends the first hour of the day reading every message once to work out what it is, and again later to answer it.

This guide covers how AI email triage works in a shared inbox, which parts plain rules can handle, where a language model earns its place, and why the setup we recommend never sends an email by itself.

## What goes wrong in a shared inbox

The trouble with a shared inbox is that everything lands in the same list. A new inquiry sits between a supplier invoice, a booking change, a newsletter and a complaint. Everyone who opens the inbox scans the same messages, and nobody is quite sure who has picked up what.

Three things follow. Urgent messages wait behind routine ones. The same replies get typed from scratch several times a week. And information that belongs somewhere else, such as a new lead for the CRM or an invoice for the bookkeeper, stays in the inbox until someone remembers to move it.

## Three jobs: sort, route, draft

Triage in a shared inbox comes down to three jobs, done in order for every new message, and a person at the end.

<figure class="fig fig-strip" style="--fig-cols:4">
<span class="fig__title">What happens to each new email</span>
<ol>
<li data-kind="ai"><span class="fig-strip__n">01</span><span class="fig-strip__t">Sorted into one of your categories</span><span class="fig-kind">AI reads</span></li>
<li data-kind="rule"><span class="fig-strip__n">02</span><span class="fig-strip__t">Routed: label, CRM row, team chat message</span><span class="fig-kind">Rule</span></li>
<li data-kind="ai"><span class="fig-strip__n">03</span><span class="fig-strip__t">Reply drafted for the routine types</span><span class="fig-kind">AI drafts</span></li>
<li data-kind="human"><span class="fig-strip__n">04</span><span class="fig-strip__t">Read, edited if needed, sent</span><span class="fig-kind">Person</span></li>
</ol>
<figcaption>Routing needs no AI once the category is known. The model reads and drafts; a person decides what leaves the business.</figcaption>
</figure>

**Sort.** Each email gets one label from a short list you define: new inquiry, booking change, invoice, complaint, and so on.

**Route.** Once the label is known, plain rules do the rest. A new inquiry becomes a row in the CRM. An invoice goes to the folder the bookkeeper watches. A complaint posts a message to the team channel so somebody sees it within the hour.

**Draft.** For the categories where your answers repeat, a reply draft waits in the drafts folder, written from your own FAQ and past replies. Someone reads it, changes what needs changing, and sends it.

## Choosing the categories

The categories decide most of the result, so settle them before anything gets built.

- **Keep the list short.** Six to eight categories cover most shared inboxes. With twenty, your team will disagree about where things go, and so will the model.
- **Name categories by what happens next.** "Needs a quote" is more useful than "pricing", because it tells the router where to send the email.
- **Always include "unclear", and send it to a person.** An email that doesn't fit should be visible to someone, not forced into the nearest label.
- **Decide which categories get drafts.** Booking confirmations and order-status questions usually do. Complaints and anything about money usually don't.

A quick way to start is to take the last 200 emails from the inbox and label them by hand. If two people can't agree on a label for the same message, the category list needs work.

## Where rules are enough and where AI reads

Not every part of sorting needs a model. Some emails identify themselves. Messages from your accounting tool, your booking system or a known supplier domain can be labelled by sender. A subject line containing an order number can be matched exactly. Rules like these are cheap and predictable, so they run first.

AI handles the rest: the free-text email where a customer explains what they need in their own words. Working out that "can we move Thursday to the week after" is a booking change, or that a polite two-paragraph message is really a complaint, takes reading. A language model does that well, and a rule can't do it at all. Our page on [AI vs automation](/ai-vs-automation) covers the same split in more general terms.

The same pattern appears in a recruitment agency's job intake, where client briefs arrive by email in every possible format. The [job intake guide](/insights/recruitment-job-intake-automation) walks through it step by step. And our [opportunity scoring case study](/case-studies/opportunity-scoring) shows inbound inquiries handled the same way, with unclear cases sent to a person along with the reason.

## Reply drafts come from your answers

A draft is only useful if it says what your business would say, in a way that sounds like you. So drafts are written from material you already have: your FAQ, your booking terms, and a set of past replies your team is happy with. When an email asks something those sources don't cover, the draft should leave a note for the reviewer instead of filling the gap with a guess.

One rule stays fixed in the setups we build: nothing sends itself. Every draft waits for a person. Partly this is about mistakes. A model will occasionally misread an email, and a wrong reply to a client is much harder to take back than a wrong label. It is also about judgement. Someone reading the draft notices when a long-standing client deserves a warmer reply than the template gives. We explain the reasoning in [human-in-the-loop AI](/insights/human-in-the-loop-ai), and it is one of the [principles we build to](/approach).

In practice the review is quick. For a routine booking question the person reads the draft, checks the date and presses send. The time saved comes from not starting with a blank reply; the read still happens.

## Test it on past email before you switch it on

Before a triage setup touches live email, run it against a batch of old messages you have already labelled by hand. Two or three hundred is enough to see the pattern. Count how many land in the right category, and look closely at the ones that don't.

The misses usually fall into a few groups: two categories that overlap, a type of email nobody thought to include, or a sender rule that catches too much. Each one is easier to fix before launch than after your team has learned not to trust the labels.

Agree on what "good enough" means before the test, not after it: the sorting accuracy you can live with, the categories that must never be wrong (complaints are a common choice), and what happens to emails the system can't place.

## What to measure after launch

A handful of numbers, checked monthly, is enough:

- the share of emails sorted correctly, from a sample someone re-checks by hand;
- how many drafts go out unchanged, lightly edited, or rewritten;
- time to first reply for the categories that matter most;
- how many emails land in "unclear".

If most drafts get rewritten, either the source material is thin or the category is too broad. If "unclear" keeps growing, a new kind of email has started arriving and probably deserves its own category.

## When it isn't worth it

Triage adds little in a few situations:

- **Low volume.** If the inbox gets twenty emails a day and one person handles them comfortably, the setup and upkeep cost more than they save.
- **One person's inbox.** The assistants built into Gmail and Outlook already help a single person. Triage is for an address several people answer.
- **Every email needs a considered answer.** Sorting still helps, but drafts won't.

If you're not sure the inbox belongs at the top of your list, the scorecard in [what to automate first](/insights/what-to-automate-with-ai) is a quick way to compare it with everything else your team repeats.

## Where to start

Label 200 recent emails by hand into six to eight categories, including "unclear". Mark which categories you'd want drafts for and where each one should go. That exercise tells you most of what a triage setup needs, whether you build it yourselves or with help.

If you'd rather have it set up for you, [Inbox Desk](/packages/inbox-desk) is our fixed-price package for one shared inbox: your categories, routing into your tools, drafts for the types you choose, tested on your past email before launch. For work that reaches beyond one inbox, see [AI Workflow Implementation](/services/implementation).

## FAQ

**Can the AI send routine replies on its own?**
It can be built that way, but we don't build it. A wrong reply to a client costs more than the few seconds a person spends reading the draft.

**Does this need a new helpdesk tool?**
No. Triage can run on the Gmail or Outlook inbox you already use, with labels, folders and drafts your team already understands.

**How accurate does sorting need to be?**
Agree a target with your team before testing, and decide which categories must never be wrong. The "unclear" category, read by a person, is what makes anything short of perfect acceptable.
