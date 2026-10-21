// Case study content. Copied verbatim from the Claude Design prototype (case studies index
// + the five detail screens). Order defines prev/next. Watermark placements mirror the export.
import { routes } from './navigation.ts';

export interface FlowStep {
  n: string;
  t: string;
  review?: boolean;
}
export interface MapLink {
  href: string;
  label: string;
}
export interface Watermark {
  img: string;
  pos: string;
  size: string;
}
export interface CaseStudy {
  slug: string;
  num: string;
  navName: string; // short name for prev/next links
  indexTitle: string; // title in the index list + Home card
  indexDesc: string; // summary in the index list + Home card
  title: string; // detail hero H1
  lead: string; // detail hero lead
  metaTitle?: string; // <title> when the H1 is too long for search results (≤ 50 chars before the suffix)
  metaDescription?: string; // meta description when the lead runs past 160 chars
  situation: string[]; // first paragraph is lead-sized
  whereAI?: string;
  howItRuns: FlowStep[];
  outputLine?: { label: string; text: string };
  trustworthy: string;
  buyerNote?: { label: string; text: string };
  builtWith: string;
  mapsTo: MapLink[];
  heroWm: Watermark;
  bodyWm: Watermark;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'opportunity-scoring',
    num: '01',
    navName: 'Opportunity scoring',
    indexTitle: 'Opportunity scoring with reasons',
    indexDesc: 'Turns inconsistent inbound inquiries into a consistent qualification decision — with the reasoning recorded, and a route to a person whenever the case is unclear.',
    title: 'AI lead and opportunity scoring',
    lead: 'Turns inconsistent inbound inquiries into a consistent qualification decision — with the reasoning recorded, and a route to a person whenever the case is unclear.',
    metaDescription: 'Turns inconsistent inbound inquiries into a consistent qualification decision, with the reasoning recorded and a person brought in when the case is unclear.',
    situation: ['Inquiries arrive with different levels of detail. What matters is buried inside descriptions, budgets, timelines, and previous correspondence. Reviewing each one by hand takes time and produces different judgments on different days. A simple points-based score misses the context that decides it.'],
    whereAI: 'Reading a discursive inquiry and assessing fit, commercial potential, and where the difficulties lie — then explaining that assessment in terms a person can check. No rule can read an email and work out what the sender actually needs.',
    howItRuns: [
      { n: '01', t: 'Inquiry captured — form, email, marketplace, or CRM' },
      { n: '02', t: 'Mapped into one consistent record' },
      { n: '03', t: 'Fixed rules applied — your must-haves and exclusions' },
      { n: '04', t: 'AI assesses fit, potential, and difficulty' },
      { n: '05', t: 'Priority calculated from weighted factors' },
      { n: '06', t: 'Uncertain or contradictory? Routed to a person, with the reason', review: true },
      { n: '07', t: 'CRM updated with the score, the reasons, and the next action' },
    ],
    outputLine: { label: 'Decision output:', text: 'Strong fit · Review required · Low priority · Reject' },
    trustworthy: 'The rules you set are applied separately from the AI assessment, so a must-have cannot be argued away. Every score carries its evidence, the risks identified, and what information was missing. A failed AI call produces a visible exception rather than a silent CRM decision.',
    builtWith: 'Python · AI assessment · CRM integration · consistent output formats',
    mapsTo: [{ href: routes.impl, label: 'AI Workflow Implementation — Standard or Advanced' }],
    heroWm: { img: '--wm-db', pos: 'right min(calc(50% + 598px + var(--wm-k) * 132px / 2), calc(100% + var(--wm-k) * 132px - 24px)) top 34px', size: 'calc(var(--wm-k) * 132px)' },
    bodyWm: { img: '--wm-d', pos: 'left min(calc(50% + 612px + var(--wm-k) * 168px / 2), calc(100% + var(--wm-k) * 168px - 24px)) top -18px', size: 'calc(var(--wm-k) * 168px)' },
  },
  {
    slug: 'document-answers',
    num: '02',
    navName: 'Answers from your own documents',
    indexTitle: 'Answers from your own documents, with sources shown',
    indexDesc: 'Questions asked in plain language across your approved documents, answered with the specific document and section each statement came from.',
    title: 'A knowledge assistant that shows where every answer came from',
    lead: 'Lets people ask questions in plain language across your approved documents, and answers with the specific document and section each statement came from.',
    metaTitle: 'Knowledge assistant with cited answers',
    situation: ['Policies, procedures, product information, and operating guidance sit across many files and change over time. Nobody is sure which document holds the current answer. Searching by keyword fails when the question uses different words than the document. And a general AI tool will produce a confident answer with nothing behind it.'],
    whereAI: 'Understanding a question asked in one set of words and finding the passage that answers it in another. That is meaning-matching, which keyword search cannot do.',
    howItRuns: [
      { n: '01', t: 'You approve which documents may be used' },
      { n: '02', t: 'Documents read, divided into sections, source details kept' },
      { n: '03', t: 'Question asked in plain language' },
      { n: '04', t: 'Relevant passages found across approved documents only' },
      { n: '05', t: 'Weak or irrelevant matches discarded' },
      { n: '06', t: 'Answer written using only what was found' },
      { n: '07', t: 'Each statement linked to its document and section' },
      { n: '08', t: 'Not enough evidence? It says so, rather than inventing an answer', review: true },
    ],
    outputLine: { label: 'The governing principle:', text: 'no material answer without evidence behind it.' },
    trustworthy: 'The answer is built only from documents you have approved, never from what the AI happens to have learned elsewhere. Where the evidence is thin, it says so instead of producing something plausible. When a document is updated, only the affected content is refreshed. And the finding step is tested separately from the answering step, so a well-written answer cannot conceal the wrong source.',
    builtWith: 'Python · AI · document processing · searchable index · evaluation against expected sources',
    mapsTo: [{ href: routes.impl, label: 'AI Workflow Implementation — Standard or Advanced' }],
    heroWm: { img: '--wm-da', pos: 'right min(calc(50% + 596px + var(--wm-k) * 188px / 2), calc(100% + var(--wm-k) * 188px - 24px)) top 38%', size: 'calc(var(--wm-k) * 188px)' },
    bodyWm: { img: '--wm-b', pos: 'right min(calc(50% + 598px + var(--wm-k) * 132px / 2), calc(100% + var(--wm-k) * 132px - 24px)) top 34px', size: 'calc(var(--wm-k) * 132px)' },
  },
  {
    slug: 'supplier-qualification',
    num: '03',
    navName: 'Supplier and product qualification',
    indexTitle: 'Supplier and product qualification',
    indexDesc: 'Thousands of records in inconsistent formats, with the supplier assessed before the product and every rejection reason recorded.',
    title: 'Two-stage scoring across a large catalog',
    lead: 'Takes thousands of supplier and product records in inconsistent formats, assesses the supplier before the product, and prepares approved items for publishing — with every rejection reason recorded.',
    metaDescription: 'Assesses thousands of supplier and product records in inconsistent formats, supplier before product, and prepares approved items for publishing.',
    situation: ['Supplier catalogs arrive with inconsistent titles, categories, prices, shipping terms, and stock information. Reviewing products first creates repeated work, because one unsuitable supplier invalidates every product attached to it. Rejection reasons end up scattered across spreadsheets, so the same item gets reconsidered months later.'],
    whereAI: 'Assessing commercial potential, usefulness, and how well a product is described — from text written by hundreds of different suppliers with no shared standard.',
    howItRuns: [
      { n: '01', t: 'Catalog imported from source systems' },
      { n: '02', t: 'Records standardized — identifiers, categories, prices, stock' },
      { n: '03', t: 'Duplicate suppliers merged into one' },
      { n: '04', t: 'Suppliers scored on location, fulfillment, returns, and data quality' },
      { n: '05', t: 'Products from suppliers below threshold excluded before any product work' },
      { n: '06', t: 'Remaining products assessed on potential, margin, and description quality' },
      { n: '07', t: 'Pricing inputs calculated — cost, fees, shipping, tax, target margin' },
      { n: '08', t: 'A person approves', review: true },
      { n: '09', t: 'Approved items created as drafts, never published automatically' },
    ],
    outputLine: { label: 'Decision output:', text: 'Approve · Review · Hold · Reject' },
    trustworthy: 'Suppliers and products are scored separately, so a promising product cannot conceal an unreliable supplier. Every rejection carries a structured reason. Repeat runs process only what is new or changed. One faulty record does not halt the whole run. And nothing publishes without a person approving it.',
    builtWith: 'Python · AI-assisted scoring · catalog database · Shopify · scheduled runs',
    mapsTo: [{ href: routes.impl, label: 'AI Workflow Implementation — Advanced' }],
    heroWm: { img: '--wm-dc', pos: 'left min(calc(50% + 608px + var(--wm-k) * 142px / 2), calc(100% + var(--wm-k) * 142px - 24px)) bottom 22%', size: 'calc(var(--wm-k) * 142px)' },
    bodyWm: { img: '--wm-a', pos: 'right min(calc(50% + 596px + var(--wm-k) * 188px / 2), calc(100% + var(--wm-k) * 188px - 24px)) top 38%', size: 'calc(var(--wm-k) * 188px)' },
  },
  {
    slug: 'reporting-layer',
    num: '04',
    navName: 'One reliable picture across several systems',
    indexTitle: 'One reliable picture across several systems',
    indexDesc: 'Records collected from several external systems on a schedule and reconciled into one consistent history, with the status of every run visible.',
    title: 'Bringing scattered records into a single reporting layer',
    lead: 'Collects records from several external systems on a schedule, reconciles them into one consistent history, and presents current state alongside how it came about.',
    metaTitle: 'One reporting layer from scattered records',
    metaDescription: 'Collects records from several systems on a schedule, reconciles them into one consistent history, and shows current state alongside how it came about.',
    situation: ['Records arrive from different systems with different structures and update behavior. The current position is visible, but nothing explains how it came about or provides a dependable history. Repeated synchronization risks duplicates. Failed runs pass unnoticed.'],
    howItRuns: [
      { n: '01', t: 'Scheduled collection from each connected system' },
      { n: '02', t: 'Original records preserved exactly as received' },
      { n: '03', t: 'Mapped into one shared structure' },
      { n: '04', t: 'Entries created — running twice does not create duplicates' },
      { n: '05', t: 'Figures calculated and checked back against the source' },
      { n: '06', t: 'Differences flagged rather than absorbed', review: true },
      { n: '07', t: 'Dashboard shows current state, history, and the status of every run' },
    ],
    trustworthy: 'The original record is kept alongside the standardized one, so any figure can be traced back. Calculated results are checked against the source rather than assumed correct. Every run records what it processed, what it skipped, and what failed. A partial failure can be inspected and resumed without corrupting the history.',
    builtWith: 'Python · FastAPI · PostgreSQL · React · scheduled workers · Docker',
    mapsTo: [
      { href: routes.impl, label: 'AI Workflow Implementation — Advanced' },
      { href: routes.retainer, label: 'And the reporting element of an Advanced retainer' },
    ],
    heroWm: { img: '--wm-dd', pos: 'right min(calc(50% + 606px + var(--wm-k) * 126px / 2), calc(100% + var(--wm-k) * 126px - 24px)) bottom -28px', size: 'calc(var(--wm-k) * 126px)' },
    bodyWm: { img: '--wm-c', pos: 'left min(calc(50% + 608px + var(--wm-k) * 142px / 2), calc(100% + var(--wm-k) * 142px - 24px)) bottom 22%', size: 'calc(var(--wm-k) * 142px)' },
  },
  {
    slug: 'governed-delivery',
    num: '05',
    navName: 'Oversight of AI-assisted delivery',
    indexTitle: 'Oversight of AI-assisted delivery',
    indexDesc: 'Software delivery split into separate roles, each producing a defined document and each having to pass a check before the next stage begins.',
    title: 'Governed software delivery, where no step approves its own work',
    lead: 'Splits delivery into separate roles — requirements, architecture, planning, building, review, testing, release readiness — each producing a defined document and each having to pass a check before the next stage begins.',
    metaTitle: 'Governed delivery where no step approves itself',
    metaDescription: 'Delivery split into separate roles, from requirements to release readiness, each producing a defined document that must pass a check before the next stage.',
    situation: [
      'When one AI interprets the request, writes the requirements, builds the work, reviews its own decisions, and declares it finished, contradictions can survive every stage untouched. The output looks complete. What is missing is any independent check that it does what was asked, and any record connecting the original requirement to the thing that was built.',
      'For an organization paying for delivery rather than performing it, that is the whole difficulty: the work arrives, it looks finished, and there is no evidence to inspect.',
    ],
    whereAI: 'Turning stated intent into precise, testable requirements, and then — separately — reviewing the delivered work against them without inheriting the reasoning that produced it.',
    howItRuns: [
      { n: '01', t: 'Intent, constraints, and existing systems collected' },
      { n: '02', t: 'Requirements written — scope, rules, outcomes, acceptance criteria' },
      { n: '03', t: 'Requirements challenged — ambiguity, conflicts, and gaps identified' },
      { n: '04', t: 'Architecture and boundaries defined' },
      { n: '05', t: 'Work broken into ordered, testable packages' },
      { n: '06', t: 'Built — one bounded change at a time' },
      { n: '07', t: 'Reviewed independently — by a role that did not build it' },
      { n: '08', t: 'Tested against the requirements and the failure cases' },
      { n: '09', t: 'Every requirement traced to what was built and how it was verified' },
      { n: '10', t: 'Release readiness — a person accepts, rejects, or returns it', review: true },
    ],
    outputLine: { label: 'The governing principle:', text: 'no step approves its own critical output.' },
    trustworthy: 'The roles are genuinely separate — requirements, building, review, and testing are not collapsed into one instruction. Every requirement carries an identifier that connects it to what was built and how it was verified, so "is this actually finished" has an evidence-based answer. A missing or invalid document stops the work rather than passing quietly downstream. Progress is saved, so a failure resumes from the last good stage instead of restarting. And scope, architecture exceptions, and release decisions stay with a person.',
    buyerNote: { label: 'What you get from it as the buyer', text: 'A record you can inspect. Not a report that the work is done, but the requirement, the review that challenged it, the test that verified it, and the decision that accepted it.' },
    builtWith: 'Python · AI roles with defined responsibilities · version control · automated testing · traceability records · build and release integration',
    mapsTo: [{ href: routes.impl, label: 'AI Workflow Implementation — Advanced' }],
    heroWm: { img: '--wm-dc', pos: 'left min(calc(50% + 600px + var(--wm-k) * 96px / 2), calc(100% + var(--wm-k) * 96px - 24px)) top 60px', size: 'calc(var(--wm-k) * 96px)' },
    bodyWm: { img: '--wm-d', pos: 'right min(calc(50% + 606px + var(--wm-k) * 126px / 2), calc(100% + var(--wm-k) * 126px - 24px)) bottom -28px', size: 'calc(var(--wm-k) * 126px)' },
  },
];

export function caseStudyPath(slug: string): string {
  return `${routes.cases}/${slug}`;
}
