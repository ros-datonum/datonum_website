---
title: "Human-in-the-Loop AI: Where People Belong in an Automated Process"
metaTitle: "Human-in-the-Loop AI in Practice"
description: "Human-in-the-loop AI in practice: where to put the review step, what the reviewer should see, and how review load shrinks over time without disappearing."
publishedDate: 2026-11-19
relatedService: impl
relatedCaseStudy: governed-delivery
---

If you run a service business, the usual worry about AI is that it will be wrong in front of a client: a reply with the wrong date, an invoice coded to the wrong job, a candidate turned down for a reason nobody can explain.

Human-in-the-loop AI is the design answer to that worry. A person sits at a defined point in the process and approves, corrects or rejects what the AI produced before it takes effect. Definitions of the term are easy to find. This guide is about the practical decisions: where the person sits, what they see, and how the amount of review changes over time.

## What it means in a working process

In a business process, human-in-the-loop means a concrete step where the work stops until a named person, or a named role, looks at it. It has an owner, and the process can't skip it. A general promise that someone keeps an eye on things doesn't count.

Everything else in the workflow can run on its own. Rules move data between systems. A model reads documents and drafts replies. The person comes in where a mistake would cost something.

## Three places a person can sit

There are three common positions for the review step, and most real workflows use more than one.

<figure class="fig fig-strip" style="--fig-cols:3">
<span class="fig__title">Where the review step can go</span>
<ol>
<li data-kind="human"><span class="fig-strip__n">01</span><span class="fig-strip__t">Before: a person sets the inputs the AI works from</span><span class="fig-kind">Person</span></li>
<li data-kind="human"><span class="fig-strip__n">02</span><span class="fig-strip__t">After every output: nothing takes effect until approved</span><span class="fig-kind">Person</span></li>
<li data-kind="rule"><span class="fig-strip__n">03</span><span class="fig-strip__t">On exceptions: checks pass routine items, the rest go to a person</span><span class="fig-kind">Rule + person</span></li>
</ol>
<figcaption>New workflows usually start at position 2 for anything client-facing and move specific cases to position 3 as evidence builds.</figcaption>
</figure>

**Before.** The person decides what goes in: which documents an assistant may use, which categories an inbox is sorted into, which suppliers are on the approved list. Nothing downstream can be better than these choices. This review is easy to overlook, and it deserves care.

**After every output.** The AI drafts and a person approves each item before it takes effect. This is the right default for anything that leaves the business, such as replies to clients, and for anything new, while you are still learning how the model behaves on your work.

**On exceptions only.** Checks and rules let routine items through and send the rest to a person: a document that fails a total check, an email the model couldn't place, a record with a missing field. Most mature workflows end up here, because it keeps the review queue small enough that people actually read it. Our [timesheet guide](/insights/temp-agency-timesheet-automation) shows the pattern: clean timesheets go straight through, and only the ones that don't match a booking reach a person.

## Decide by consequence

The simplest way to place the review step is to ask, for each output: if this is wrong, what happens, and who notices?

| If the output is wrong... | Example | Where the person sits |
| --- | --- | --- |
| A client sees it | A reply to a customer, a quote | After every output |
| Money or a commitment moves | An invoice posted, a delivery date promised | After every output, or exceptions with strict checks |
| It gets caught further down anyway | A draft row in a sheet someone reviews weekly | On exceptions |
| It only affects internal filing | Which folder an email goes to | Spot checks |

Treat the table as a starting point. What it shows is that review effort should follow the cost of a mistake, whatever the technology behind the output. A model sorting internal mail needs less oversight than a plain rule that posts invoices.

## Design the review so approval takes seconds

A review step people resent soon becomes a step people rush. If approving one item means opening three systems, the reviewer starts clicking through without reading, and the check turns into a delay.

A good review screen shows, in one place:

- the original: the email, the document, the photo;
- what the AI produced: the draft, the extracted fields, the label;
- why the item is here: which check failed, or which field the model was unsure about;
- the actions: approve, edit, reject, with a short reason when rejecting.

When the document and the extracted value sit side by side, checking a flagged quantity takes a few seconds. In [recruitment job intake](/insights/recruitment-job-intake-automation), the consultant approves a drafted job with the client's original email right next to it. When the reviewer has to hunt for the original in another tab, it takes a minute and gets skipped on busy days.

The tools don't need to be elaborate. For reply drafts, the review screen can simply be the drafts folder in Gmail or Outlook. For extracted data, it can be a sheet with a link to the source document and a status column.

## Sending unclear cases to a person

The exceptions-only position depends on the system knowing when it isn't sure. There are several ways to get that signal:

- **Checks that don't depend on the model.** Totals add up, an order number exists, a date falls inside the booking. These are the most reliable, because they come from rules and your own data.
- **Required fields.** If the model is told to leave a field empty when it can't find it, an empty required field is a clear reason to send the item to a person.
- **An "unclear" option.** Give the model a way to say it doesn't know, such as an "unclear" category, and treat that answer as a route rather than a failure.
- **Confidence scores.** Some tools report a confidence number for each field or decision. They help, but a model can be confidently wrong, so use them alongside checks, never in place of them.

## Review is also your improvement data

Every correction a reviewer makes records a weak spot in the workflow. Keep that record. A simple log of what was changed, and why, tells you which category is too broad, which field is often misread and which document type needs its own rules.

Look at it once a month. If reviewers keep correcting the same field, fix the instruction or add a check. If a category has been approved unchanged for weeks, it may be ready to move from "after every output" to "on exceptions". Review load shrinks this way: specific, well-understood cases leave the queue one at a time, on evidence.

## When removing the person is reasonable

Some steps can run without a person once the evidence is in. They usually share three things: a mistake is cheap or gets caught later, the error rate has been measured on real work over several weeks, and someone still spot-checks a sample. Internal sorting and filing are typical.

Other steps should keep a person for good. Anything a client sees in your name, anything that commits money or a date, and decisions about people, such as hiring or complaints, stay with a person even when the AI is usually right. Accountability for those decisions can't be handed to a model.

This is one of the [five principles](/approach) we hold to: AI drafts, sorts, summarizes and checks, and people approve. Our [governed delivery case study](/case-studies/governed-delivery) applies the same idea to software delivery, where no step approves its own work and a person makes the release decision.

## Where to start

Take one workflow you've automated, or plan to. List every output it produces and answer two questions for each: what happens if it's wrong, and who would notice? Put a person wherever the answer involves a client or money, and make the review screen show the original next to the output.

The same pattern runs through our fixed-price packages. In [Inbox Desk](/packages/inbox-desk), every reply draft waits for a person. In [Team Answers](/packages/team-answers), the assistant says when your documents don't cover a question. In Doc Intake, our on-request setup for documents, fields the model is unsure about go to a person; [how AI document processing works](/insights/ai-document-processing) explains the checks behind that. If you're still choosing what to automate, start with [what to automate first](/insights/what-to-automate-with-ai). To build a workflow with the review step designed in from the start, see [AI Workflow Implementation](/services/implementation).

## FAQ

**Doesn't reviewing everything defeat the point of automation?**
If every output needs a full manual check, it does. The aim is a fast review for the items that need one, and moving well-understood cases to exceptions-only as the evidence builds.

**What is the difference between human-in-the-loop and human-on-the-loop?**
In the loop, a person approves individual outputs before they take effect. On the loop, a person monitors the system as a whole and steps in when something looks off. Many workflows start in the loop and move parts of the work on the loop over time.

**How do I know the reviewer is actually reviewing?**
Check the log. If approvals take one second each and nothing is ever changed, either the step isn't needed or it isn't being done. Some teams occasionally put a known error into the queue to see whether it gets caught.
