---
title: "How AI Document Processing Works: Sorting, Extraction and Review"
metaTitle: "How AI Document Processing Works"
description: "How AI document processing works for a small business: sorting documents by type, pulling out the fields, and the review step that catches mistakes."
publishedDate: 2026-11-19
relatedService: impl
relatedCaseStudy: supplier-qualification
relatedPackage: doc-intake
---

A lot of work in a small business is reading a document and typing what it says into another system. A supplier's order confirmation goes into the purchase sheet. A delivery note gets checked against the order. A timesheet becomes hours in payroll. An application form becomes a record in the CRM. Nobody would call it skilled work, yet it takes hours every week, and a typo made here travels a long way.

AI document processing, also sold as intelligent document processing, takes over the reading and the typing. This guide explains how it works in three stages, what goes wrong at each one, and how a review step catches it.

## Information trapped in documents

The information you need is already there, in the wrong shape: a PDF attached to an email, a phone photo of a signed sheet, a scan with a stamp across the corner. Before anything can happen with it, someone has to read it and copy it out.

Older tools handled this only when every document looked the same. Template-based OCR reads text from fixed positions on a page, which works for one form and breaks as soon as a supplier changes its layout. Language models changed that. They can read a document they have never seen before and find "the delivery date" whether it sits top right, in a table, or in a sentence near the bottom.

## Three stages

Whatever the document, the work splits into the same three stages.

<figure class="fig fig-strip" style="--fig-cols:3">
<span class="fig__title">From document to checked data</span>
<ol>
<li data-kind="ai"><span class="fig-strip__n">01</span><span class="fig-strip__t">Classify: what kind of document is this?</span><span class="fig-kind">AI reads</span></li>
<li data-kind="ai"><span class="fig-strip__n">02</span><span class="fig-strip__t">Extract: pull out the fields you need</span><span class="fig-kind">AI reads</span></li>
<li data-kind="human"><span class="fig-strip__n">03</span><span class="fig-strip__t">Validate against your data; a person reviews what fails</span><span class="fig-kind">Rule + person</span></li>
</ol>
<figcaption>The first two stages read. The third decides whether what was read can be trusted.</figcaption>
</figure>

### Stage one: classification

First the system decides what it is looking at. Is this attachment an invoice, a credit note, a delivery note, or the terms and conditions that came along with them? Each type has different fields and goes to a different place, so this comes first.

Often a rule can decide. A document from a known sender, or with a fixed phrase in its title, identifies itself. For the rest, a model reads the page and picks from your list of types. That list should include "something else", and that pile goes to a person.

**What goes wrong:** two types that look alike, such as an invoice and a credit note from the same supplier. The fix is a check that doesn't rely on the model's reading alone. A credit note with a positive total, for example, should stop and wait for someone.

### Stage two: extraction

Next the system pulls out the fields you need: supplier name, document number, date, line items, quantities, totals. You define the list once for each document type, with the format you want each field in.

**What goes wrong:** mostly one of three things. A field is missing from the document and the model fills it with something plausible. A number is misread, especially from a poor photo or handwriting. Or the field is there but ambiguous, such as two unlabelled dates. The first is the most dangerous, because the output looks complete. A good setup tells the model to leave a field empty when it can't find it, and treats an empty required field as a reason for review.

### Stage three: validation and review

Finally, the extracted data is checked before it goes anywhere. Some checks are plain arithmetic: do the line items add up to the total? Others compare against data you already hold: does this order number exist, does the supplier match, are the hours inside the booked shift? Anything that fails a check, or that the model marked as uncertain, goes to a person with the document and the extracted values side by side.

This stage is what makes the rest trustworthy. The model will make mistakes, and the design assumes it; the point of validation is that those mistakes get caught on a review screen before they reach your books. We cover where to put that step and how to design it in [human-in-the-loop AI](/insights/human-in-the-loop-ai).

## A worked example

Here is one delivery note moving through the three stages. It is an illustration, not a client case.

| Stage | What happens | Result |
| --- | --- | --- |
| Classify | Known supplier; the model reads the page as a delivery note | Delivery note |
| Extract | Order number, date, six line items with quantities | Five lines read cleanly; one quantity unclear in the photo |
| Validate | Order number exists; five quantities match the order, one doesn't | Sent to review |
| Review | A person compares the line with the photo and corrects 12 to 2 | Approved and written to the sheet |

Five of the six lines needed nothing from a person. The sixth took a few seconds, because the review screen showed the photo and the extracted value together.

## What makes a good first candidate

Some document sets are much easier to start with than others. A good first candidate has:

- **volume:** the same type arrives every week, so the setup pays back;
- **a fixed list of fields:** you can say exactly what you need from each document;
- **something to check against:** an order, a booking or a price list, so validation means something;
- **a mistake you can survive:** a wrong value gets caught further down the line, at least in the early weeks.

Temp agency timesheets are a typical example, with hours checked against bookings; the [timesheet guide](/insights/temp-agency-timesheet-automation) works through that case in detail. Supplier catalogs are another. Our [supplier qualification case study](/case-studies/supplier-qualification) shows records in inconsistent formats brought into one structure, with a person approving before anything is published.

Contracts and long legal documents are a harder place to begin. The fields are less fixed, and a misread clause can be expensive.

## What to measure before and after

Before you build anything, write down three numbers for the current process: how many documents of this type arrive each week, how long one takes by hand, and how often errors turn up later. Without them you won't know whether the new setup helped.

After launch, track:

- the share of documents that pass validation without a human change;
- the fields people correct most often, which show you what to fix next;
- time per document, including review;
- errors that got past review, which should be rare and each worth a look.

Expect the review share to start high and fall as the fields and checks are tuned. It won't reach zero, and it shouldn't. The documents that still need a person are the ones the checks exist for.

## Where to start

Pick one document type your team retypes every week. Collect 30 to 50 real examples, including the messy ones, and write down the fields you need from each and what each field should be checked against. That list is the specification for whatever tool or build you choose.

If you'd like us to look at it, describe the document through our [Doc Intake request](/contact?topic=doc-intake) and we'll reply within two business days with whether we can do it and a fixed price. For documents that feed several systems or teams, see [AI Workflow Implementation](/services/implementation). And if your team needs answers to questions from documents rather than data pulled out of them, an [AI knowledge base](/insights/ai-knowledge-assistant) is the better fit.

## FAQ

**Is this the same as OCR?**
OCR turns an image of text into text. Document processing goes further: it works out what kind of document it is, finds the specific fields you need, and checks them.

**Can it handle handwriting and phone photos?**
Often, but with less certainty. Expect those documents to go to review more often, at least until you've seen how they perform on your own examples.

**Does every document still need a person?**
No. Documents that pass every check can go straight through. The ones that fail a check, or have a field the model was unsure about, go to a person.
