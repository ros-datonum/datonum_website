---
title: "What to Automate First (and What to Skip): A Scorecard for Small Businesses"
metaTitle: "What to Automate First (and What to Skip)"
description: "A 15-minute test for small service businesses: list a week of repeated work, answer five questions per task, and sort it into three piles. Free scorecard."
publishedDate: 2026-11-19
relatedService: audit
relatedCaseStudy: supplier-qualification
relatedPackage: inbox-desk
---

If you run a small service business, you have probably been told you should automate more. The advice rarely says where to start. This guide is a short test you can run in about fifteen minutes with one spreadsheet. At the end you will have two or three tasks worth automating first, a few where software should only prepare the work for a person, and a list of things to leave alone.

It is the same test we run before suggesting any tool, and the scorecard is free to download.

## Start from the task, not the tool

Most automation projects begin with a tool. Someone sees a demo, buys a subscription, and then looks for something to use it on. That order causes most of the trouble later. You end up automating whatever the tool happens to be good at, while the work that fills your week stays where it was.

So start from the work itself: which tasks repeat, how long they take, and how much thinking each one needs. The tool comes last, once you know what it has to do.

## Step 1: list a week of repeated work

Take one normal week and write down every task that came up more than once. Three places help.

- **Your sent email folder.** Scroll through last week. Each time you wrote roughly the same message, that is a task: a payment reminder, a "please send me the documents" email, a status update.
- **Your calendar.** Look for things that happen on a fixed day, such as Monday planning or the Friday report.
- **Your team.** Ask everyone one question: "What did you type twice this week?" These tasks rarely come up in meetings because each one only takes a few minutes. Added together they often take hours.

Don't filter yet. Fifteen to thirty lines is a good list.

## Step 2: five questions per task

Give each task five quick answers. Three of them use a simple 1 to 3 scale.

| Question | How to answer |
| --- | --- |
| How often does it happen? | Runs per week. Use a fraction for rare tasks: once a month is about 0.25. |
| How long does it take? | Minutes per run, including the small bits around it. |
| Does it follow fixed rules? | 3 if the same input always leads to the same action. 1 if someone has to think about it every time. |
| Is the input structured? | 3 for a form, a spreadsheet row, or a status in your CRM. 1 for a PDF, a photo, or a free-text email. |
| What happens if it goes wrong? | 3 if a mistake is easy to notice and fix. 1 if it costs a client or money. |

The first two questions tell you how much time the task takes over a year. The last three tell you what kind of help it can have, if any.

## The scorecard, worked through

The table below is an example of a small agency. It is not a real client, and your numbers will be different. Hours per year are runs per week × minutes per run × 48 working weeks ÷ 60.

| Task | Runs/week | Minutes | Rules | Input | If wrong | Hours/year | Pile |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chase unpaid invoices | 10 | 6 | 3 | 3 | 2 | 48 | Automate first |
| Client onboarding (welcome email, folder, CRM record, first invoice) | 2 | 60 | 3 | 3 | 3 | 96 | Automate first |
| Weekly report from three tools | 1 | 90 | 3 | 3 | 2 | 72 | Automate first |
| Read supplier invoices into the books | 15 | 4 | 2 | 1 | 2 | 48 | AI reads, person approves |
| Answer 'where is my order / status' emails | 20 | 3 | 2 | 1 | 2 | 48 | AI reads, person approves |
| Price a custom quote | 3 | 45 | 1 | 1 | 1 | 108 | Leave with a person |
| Handle a complaint | 1 | 30 | 1 | 1 | 1 | 24 | Leave with a person |
| Annual insurance renewal | 0.02 | 120 | 2 | 2 | 2 | 2 | Later |

Chasing unpaid invoices is a clear first candidate. It happens ten times a week, the rule is fixed (unpaid three days after the due date means a reminder goes out), the status already sits in the accounting tool, and a mistake is annoying but easy to fix. Client onboarding follows the same steps every time and can start from one form the client fills in. The weekly report is copying numbers that three tools already hold.

Supplier invoices and order-status emails also repeat often, but their input is a PDF, a photo, or free text. They land in the middle pile. Timesheets in a temp agency are the same kind of task; [the timesheet guide](/insights/temp-agency-timesheet-automation) walks through one in detail. Pricing a quote and handling a complaint take real time, yet every case is different and a mistake can cost the client, so they stay with a person.

The last row matters too. An annual renewal takes two hours a year. By the time you had built and tested an automation for it, you could have done it by hand for the next decade.

**[Download the scorecard (.xlsx)](/downloads/what-to-automate-first-scorecard.xlsx)** — the formulas fill in hours, score and pile as you type. Only the blue columns need editing.

## Step 3: three piles

Every task ends up in one of three piles. The scorecard applies one simple rule: a 1 in "Fixed rules" or "If it goes wrong" sends the task to a person; otherwise a 1 in "Structured input" means AI reads and a person approves; otherwise 20 or more hours a year means automate first, and anything smaller waits.

<figure class="fig fig-strip" style="--fig-cols:3">
<span class="fig__title">Three piles</span>
<ol>
<li data-kind="rule"><span class="fig-strip__n">01</span><span class="fig-strip__t">Automate first: frequent, fixed rules, structured input, a mistake you can fix</span><span class="fig-kind">Rule</span></li>
<li data-kind="ai"><span class="fig-strip__n">02</span><span class="fig-strip__t">Clear steps, messy input: documents, photos, free-text email</span><span class="fig-kind">AI reads, a person approves</span></li>
<li data-kind="human"><span class="fig-strip__n">03</span><span class="fig-strip__t">Judgement, relationships, or an expensive mistake</span><span class="fig-kind">Leave with a person</span></li>
</ol>
<figcaption>The first pile usually needs no AI at all. A language model earns its place in the second pile, as a reader whose output a person checks.</figcaption>
</figure>

**Automate first.** These are plain rules: when this happens, do that. You usually don't need AI here. A scheduled check and a template are often enough, and they are easier to test and fix than anything that involves a model.

**AI reads, a person approves.** The steps are clear, but someone has to read a document or a message before anything can happen. A model can pull the fields out of an invoice ([how AI document processing works](/insights/ai-document-processing)) or draft a reply to an order question. A person looks at the result before it is posted or sent. That check is the reason the pile works at all, and it is one of the [five principles](/approach) we build to. [Human-in-the-loop AI](/insights/human-in-the-loop-ai) covers where to put it and what the reviewer should see. Our [supplier qualification case study](/case-studies/supplier-qualification) shows the same pattern with records that arrive in different formats.

**Leave with a person.** Anything that needs judgement, depends on a relationship, or costs real money when it goes wrong. Software can still help around the edges, for example by collecting the details before a quote, but the decision stays where it is.

Tasks with very few hours a year fall below all three. Leave them for later and revisit them if they grow.

## What to leave alone

A few things are worth keeping manual, at least at the start.

- **Pricing and anything that commits money or a date to a client.** A wrong value here is hard to take back once the client has seen it.
- **Complaints and difficult conversations.** People can tell when a reply was written by a system, and a complaint is the moment they are most likely to leave.
- **Tasks that happen once or twice a year.** The build and the testing will take longer than the task itself for years to come.
- **Processes your team doesn't agree on yet.** If three people do something three different ways, automating it locks one of those ways in. Agree on the steps first.

## Rough maths before you build

Before building anything, do the rough maths. Runs per week × minutes per run × 48 weeks ÷ 60 gives hours per year. Then subtract what the automation costs you:

- the time to set it up,
- the time to fix it when one of the tools changes,
- the time someone spends checking its output.

The last item is the one people forget, and for anything a model produces it is usually the largest. If checking ten AI-drafted replies takes as long as writing them, the workflow hasn't saved anything yet.

<figure class="fig fig-bars">
<span class="fig__title">Example: hours per year by task</span>
<ul>
<li style="--v:100%"><span class="fig-bars__l">Price a custom quote</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">108 h</span></li>
<li style="--v:89%"><span class="fig-bars__l">Client onboarding</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">96 h</span></li>
<li style="--v:67%"><span class="fig-bars__l">Weekly report</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">72 h</span></li>
<li style="--v:44%"><span class="fig-bars__l">Chase unpaid invoices</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">48 h</span></li>
<li style="--v:44%"><span class="fig-bars__l">Supplier invoices</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">48 h</span></li>
<li style="--v:2%"><span class="fig-bars__l">Annual renewal</span><span class="fig-bars__track"><span class="fig-bars__bar"></span></span><span class="fig-bars__v">2 h</span></li>
</ul>
<figcaption>The same sample agency, not a client. The task with the most hours stays with a person, which is why hours alone don't decide the pile.</figcaption>
</figure>

If what remains after the subtraction is a handful of hours, move on to the next task on the list.

## Where to start

Here is the whole test: list a week of repeated work, answer five questions per task, and sort the tasks into piles.

Then pick one task from the first pile. Write its steps down exactly as they happen today, mark the one step where someone has to decide something, and automate the steps around that decision. Run it next to the manual version for a week or two before you switch.

If the task you picked is a shared inbox full of order and status questions, [AI for a shared inbox](/insights/shared-inbox-ai-triage) walks through how sorting and reply drafts work, and [Inbox Desk](/packages/inbox-desk) is a fixed-price setup for exactly that pile.

If you'd like someone outside the business to run this test with you and go further, into how the work actually moves between people and tools, that is what an [AI Readiness Audit](/services/ai-readiness-audit) covers. For background on where rules end and AI begins, see [AI vs automation](/ai-vs-automation) and our [guide to AI workflow automation](/insights/what-is-ai-workflow-automation).

## FAQ

**Do I need AI to automate the first pile?**
Usually not. Tasks with fixed rules and structured input run well on plain automation: a scheduled check, a template, a connection between two tools. AI comes in when someone has to read something messy first.

**How long does the test take?**
About fifteen minutes for a first pass if you go through your sent email and calendar quickly. Asking the team "what did you type twice this week?" can add a few useful lines a day later.

**What do I do with the middle pile?**
Pick the task with the most hours and test it with a person checking every result for a couple of weeks. Count how many results needed changes. If the checking takes almost as long as doing the task, leave it with a person for now.
