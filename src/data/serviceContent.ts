// Content model for the service, comparison and FAQ sections. Copied verbatim from the
// Claude Design prototype's data script. Copy is truth — do not paraphrase.
import type { Column } from '../components/DataTable.astro';
import type { AccordionItem } from '../components/Accordion.astro';

type Row = Record<string, string>;

// AI Readiness Audit vs Deep Audit comparison
export const reviewCols: Column[] = [
  { key: 'f', label: '' },
  { key: 'a', label: 'AI Readiness Audit' },
  { key: 'b', label: 'Deep Audit' },
];
export const reviewRows: Row[] = [
  { f: 'Processes covered', a: 'Up to 3, in one part of the business', b: '6–8, across teams, sites, or entities' },
  { f: 'Interviews', a: '3–5', b: '8–12' },
  { f: 'Volume figures', a: 'Reported by your team', b: 'Measured from your system data, 12 months' },
  { f: 'Cross-process view', a: '—', b: 'Included' },
  { f: 'Readiness scoring', a: 'One business-wide score', b: 'Scored per team' },
  { f: 'Sequencing plan', a: '—', b: 'Across 12 months' },
  { f: 'Build specification', a: '—', b: 'For the top recommendation' },
  { f: 'Roadmap', a: '90 days', b: '12 months' },
  { f: 'Timeline', a: '2–3 weeks', b: '4–5 weeks' },
];

// Implementation / Retainer tiers
export const tierCols: Column[] = [
  { key: 'f', label: '' },
  { key: 'lite', label: 'Lite' },
  { key: 'std', label: 'Standard' },
  { key: 'adv', label: 'Advanced' },
];
export const implRows: Row[] = [
  { f: 'Scope', lite: 'One recurring task', std: 'A full multi-step sequence', adv: 'Complex or commercially significant, or two linked sequences' },
  { f: 'AI-assisted steps', lite: '1', std: '2–3', adv: '3–5' },
  { f: 'Connected tools', lite: '1–2', std: '2–4', adv: '3–6' },
  { f: 'Testing', lite: '10–20 real cases', std: '30–50 real cases, batch scored', adv: '50+ cases plus deliberate testing of unusual ones' },
  { f: 'Rollout', lite: 'Handover session', std: 'Team training', adv: 'Phased rollout with adoption support' },
  { f: 'Support after go-live', lite: '7 days', std: '14 days', adv: '30 days' },
  { f: 'Timeline', lite: '2–3 weeks', std: '4–6 weeks', adv: '6–10 weeks' },
];
export const retRows: Row[] = [
  { f: 'Covers', lite: 'A single workflow', std: 'A sequence several people depend on', adv: 'Workflows the business runs on' },
  { f: 'Fixes and quality tuning', lite: 'Included', std: 'Included', adv: 'Included' },
  { f: 'Monthly written check-in', lite: 'Included', std: 'Included', adv: 'Included' },
  { f: 'Monthly review call', lite: '—', std: '45 minutes', adv: '45 minutes' },
  { f: 'Quality sample review', lite: '—', std: 'Monthly', adv: 'Deeper, tracked over time' },
  { f: 'Continuous improvement work', lite: '—', std: 'Minor changes', adv: 'Against a prioritized backlog' },
  { f: 'Performance reporting', lite: '—', std: '—', adv: 'Monthly' },
  { f: 'Multi-team support', lite: '—', std: '—', adv: 'Included' },
  { f: 'Quarterly review', lite: '—', std: '—', adv: 'Included' },
  { f: 'Response priority', lite: 'Standard', std: 'Standard', adv: 'Priority' },
];

// Audit ranking factors
export const rankCols: Column[] = [
  { key: 'f', label: 'Factor' },
  { key: 'd', label: 'What we assess' },
];
export const rankRows: Row[] = [
  { f: 'Volume', d: 'How often the work occurs, and the hours per month it takes' },
  { f: 'AI suitability', d: 'Whether the step genuinely needs judgment about language, or whether a rule would do' },
  { f: 'Build effort', d: 'Systems involved, how varied the input is, how much testing it will need' },
  { f: 'Review burden', d: 'How much checking the output will require to be trusted' },
];

// What we automate — systems
export const sysCols: Column[] = [
  { key: 'c', label: 'Category' },
  { key: 'e', label: 'Examples' },
];
export const sysRows: Row[] = [
  { c: 'Email and documents', e: 'Microsoft 365, Google Workspace, SharePoint, Dropbox' },
  { c: 'CRM', e: 'HubSpot, Pipedrive, Salesforce, Zoho' },
  { c: 'Project and work management', e: 'Asana, ClickUp, Monday, Jira, Trello' },
  { c: 'Finance', e: 'Xero, QuickBooks, Sage, FreeAgent' },
  { c: 'Data and records', e: 'Airtable, Notion, SQL databases, Google Sheets' },
  { c: 'Communication', e: 'Slack, Teams, WhatsApp Business' },
  { c: 'Industry systems', e: 'Practice management, applicant tracking, policy administration, and job management systems, connected where a documented connection exists' },
];

// Timelines
export const stageCols: Column[] = [
  { key: 'n', label: '' },
  { key: 's', label: 'Stage' },
  { key: 'd', label: 'What happens' },
];
export const auditStages: Row[] = [
  { n: '01', s: 'Kick-off', d: '60 minutes. We agree scope, who we speak to, and what a useful answer looks like.' },
  { n: '02', s: 'Discovery', d: 'Three to five interviews, a look at your tools, and real examples of the work.' },
  { n: '03', s: 'Analysis', d: 'Workflow map, readiness scorecard, and opportunity matrix.' },
  { n: '04', s: 'Walkthrough', d: '60 to 90 minutes with you and the people interviewed.' },
  { n: '05', s: 'Handover and follow-up', d: 'Written report, 90-day roadmap, and a follow-up call.' },
];
export const deepStages: Row[] = [
  { n: '01', s: 'Kick-off', d: '90 minutes. Scope, teams in question, and the system exports we will need.' },
  { n: '02', s: 'Data analysis', d: 'System exports analyzed before any interview takes place.' },
  { n: '03', s: 'Discovery', d: 'Eight to twelve interviews, starting from what the numbers already show.' },
  { n: '04', s: 'Cross-process review', d: 'Where the same information is handled by more than one team.' },
  { n: '05', s: 'Analysis and specification', d: 'Scoring, sequencing, and the build-ready specification.' },
  { n: '06', s: 'Walkthrough', d: '90 minutes with the people interviewed.' },
  { n: '07', s: 'Leadership session', d: '60 minutes, separate. Different audiences need different conversations.' },
  { n: '08', s: 'Handover', d: 'Full written report, twelve-month roadmap, and the specification.' },
  { n: '09', s: 'Follow-up', d: 'A call once the report has been read.' },
];

// FAQs
export const auditFaqs: AccordionItem[] = [
  { question: 'How long does an AI readiness audit take?', answer: 'Two to three weeks from kick-off to handover. Most of that is discovery and analysis; your team is involved for around five hours in total.' },
  { question: 'What do we need to have ready?', answer: 'Three to five people for 45 minutes each, a list of the software you pay for, five to ten real examples of the work, and rough monthly volume figures. Nothing needs preparing in advance.' },
  { question: 'What if the answer is that AI will not help?', answer: 'Then that is what the report says, with the reasoning. Anything scoring low on AI suitability goes on the leave-alone list with a note on what would handle it more cheaply.' },
  { question: 'Do you build what you recommend?', answer: 'Usually, but it is a separate engagement, quoted separately, and entirely your choice. The report is written so that anyone could build from it.' },
  { question: 'Where do the volume figures come from?', answer: 'From what your team reports and from sample examples. That is enough to rank three opportunities against each other reliably. Where you need measured figures, the Deep Audit works from your system exports instead.' },
];
export const deepFaqs: AccordionItem[] = [
  { question: 'What if our system data is incomplete?', answer: 'Common, and not a barrier. We use what exists, name what does not, and mark clearly in the report which figures are measured and which are estimated.' },
  { question: 'Is twelve hours realistic across our teams?', answer: 'No individual gives more than about two hours.' },
  { question: 'Why is this twice the AI Readiness Audit?', answer: 'Roughly double the processes and interviews, plus data analysis and a build specification that would otherwise be a separate scoping engagement.' },
  { question: 'Can we build the top recommendation ourselves from the specification?', answer: 'Yes. It is written for that.' },
];
export const retainerFaqs: AccordionItem[] = [
  { question: 'Why does an AI workflow need maintaining at all?', answer: 'Ordinary changes move its output. New client types arrive with documents laid out differently, suppliers change their forms, model providers release updates, and your own standards shift. None of these stop it working — they move the output gradually from reliable to needing a careful check every time.' },
  { question: 'Can we start a retainer without having had an implementation?', answer: 'The retainer is available after an implementation. Maintaining a workflow we did not build means learning it first, which is scoped separately.' },
  { question: 'What happens if there is very little to do one month?', answer: 'We will say so and suggest moving down a level. Hours reset monthly and do not carry over.' },
  { question: 'How quickly do you respond when something looks wrong?', answer: 'Standard response on Lite and Standard, priority on Advanced. Out-of-hours and on-call response are not included at any level.' },
  { question: 'Can we change level?', answer: 'At any point, effective the following month. Monthly and rolling, thirty days’ notice either side.' },
];
export const aivsFaqs: AccordionItem[] = [
  { question: 'What is the difference between AI automation and traditional automation?', answer: 'Traditional automation follows rules you write in advance. It is faster, cheaper, and more reliable than AI for anything with a fixed structure. AI is needed when the input varies every time and the step requires judgment about language — reading a discursive email, deciding what a document is about, drafting in your house style.' },
  { question: 'How do we tell which one we need?', answer: 'Look at the input. If it arrives in the same shape every time and the decision can be written as a rule, it is automation. If it arrives as free text, speech, or documents that vary, and a person currently has to read it to decide, that is the AI-requiring step.' },
  { question: 'Is AI less reliable than rule-based automation?', answer: 'For the steps rules can handle, yes — which is why we do not use AI there. Where AI is genuinely required, reliability comes from the engineering around it: fixed rules applied separately, confidence thresholds, uncertain cases routed to a person, and testing against your real historical work.' },
  { question: 'Can one workflow use both?', answer: 'Almost all of them do. A typical sequence is rules, then an AI step, then rules again, with a review point before anything is used.' },
  { question: 'Is AI more expensive to run?', answer: 'Per run, usually. The comparison that matters is against the hours currently spent doing the step by hand, which is what an audit measures.' },
];

// Contact call steps
export const callSteps: string[] = [
  'You describe the work that keeps repeating.',
  'We ask about the tools involved and who touches it.',
  'We tell you whether it looks like a review, a direct implementation, or nothing at all.',
];
