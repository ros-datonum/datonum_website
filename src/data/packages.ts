// Fixed-price packages. Copy and prices live here; pages render from it.
// Checkout links are Stripe Payment Links with a required terms checkbox
// (Terms of Service + DPA). Prices in EUR, VAT excluded.

export const packagePath = (slug: string): string => `/packages/${slug}`;

export interface PackageTier {
  name: string;
  price: string; // display, e.g. "€1,500"
  priceNote: string; // e.g. "one-time setup, VAT excluded"
  includes: string[];
  checkoutUrl: string | null; // null = not sold online
  cta: string;
  umamiId: string;
}

export interface PackageFaq {
  question: string;
  answer: string;
}

export interface Package {
  slug: string;
  name: string;
  eyebrow: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  summary: string; // card text on /packages
  forWhom: string[];
  problem: string[];
  outcome: string;
  tiers: PackageTier[];
  monthly: { name: string; price: string; includes: string[]; note: string };
  steps: { label: string; detail: string }[];
  guarantee: string;
  worksWith: string;
  notIncluded: string[];
  faqs: PackageFaq[];
  related: { label: string; href: string }[];
}

export const packages: Package[] = [
  {
    slug: 'inbox-desk',
    name: 'Inbox Desk',
    eyebrow: 'Package · Shared inbox',
    title: 'Inbox Desk: your shared inbox, sorted and drafted before anyone opens it',
    metaTitle: 'Inbox Desk — AI sorting and reply drafts for a shared inbox | Datonum',
    metaDescription:
      'Fixed-price setup for one shared inbox: emails sorted into your categories, routed to your tools, reply drafts waiting for review. €1,500 setup, €190/month.',
    summary:
      'Every email in info@ or bookings@ gets sorted into your categories and routed where it belongs. For the types you choose, a reply draft waits in your drafts folder. Nothing is sent without a person.',
    forWhom: [
      'Teams that answer customers from one shared inbox, such as info@, bookings@ or support@',
      'One or two people spend the first hour of the day sorting before they can reply',
      'Google Workspace or Microsoft 365 (personal Gmail and Outlook.com accounts are not supported)',
    ],
    problem: [
      'New inquiries sit next to supplier invoices, booking changes and spam. Someone reads every message twice: once to sort it, once to answer it.',
      'Urgent emails wait behind routine ones, and the same replies get typed again and again.',
    ],
    outcome:
      'When your team opens the inbox, each email already has a label, the important ones are in your CRM or Slack, and the routine replies are drafted in your tone. They review, edit if needed, and press send.',
    tiers: [
      {
        name: 'Setup',
        price: '€1,500',
        priceNote: 'one-time, VAT excluded, paid at order',
        includes: [
          'One shared inbox, up to 8 categories',
          'Routing: label or folder, a row in Google Sheets or your CRM, a Slack or Teams message',
          'Reply drafts for the categories you choose, from your own FAQ and past replies',
          'Test on 200 of your past emails before launch',
          'A short video guide for your team',
          '30 days of tuning after launch',
        ],
        checkoutUrl: 'https://buy.stripe.com/7sY5kEcnt42q2ut8Ad2Ry00',
        cta: 'Buy Inbox Desk setup',
        umamiId: 'inbox-desk-setup',
      },
    ],
    monthly: {
      name: 'Run',
      price: '€190 / month',
      includes: [
        'Runs on our EU server, up to 3,000 emails a month',
        'Alerts on failed runs, checked on business days',
        'Monthly accuracy check and up to 2 small changes',
      ],
      note: 'Starts after launch. Cancel any time. If you stop, we hand over the workflow so you can run it yourself.',
    },
    steps: [
      { label: 'Pay online and fill in a 10-minute form', detail: 'Tell us about the inbox, your email types and where each should go.' },
      { label: 'We check the fit within 2 business days', detail: 'If it is not a fit, you get a full refund.' },
      { label: 'Your admin gives access in about 20 minutes', detail: 'Through an app in your own Google Workspace or Microsoft 365 account, using our step-by-step guide.' },
      { label: 'We agree in writing what “working” means', detail: 'The categories, the routing and the accuracy test.' },
      { label: 'Build and test on your past emails', detail: 'You get the results of the 200-email test.' },
      { label: 'Live in about 10 days', detail: 'Then 30 days of tuning.' },
    ],
    guarantee:
      'At least 90% of your 200 test emails are sorted correctly. If they are not, we keep fixing it at no cost. If it still falls short, we refund the setup in full.',
    worksWith: 'Google Workspace (Gmail), Microsoft 365 (Outlook), Google Sheets, HubSpot and most CRMs, Slack, Microsoft Teams.',
    notIncluded: [
      'Sending emails automatically. Every draft waits for a person',
      'Personal inboxes or more than one shared inbox (each extra inbox is a new setup)',
      'Cleaning up your CRM or rebuilding your processes',
    ],
    faqs: [
      { question: 'Does it ever send an email on its own?', answer: 'No. It labels, routes and writes drafts. A person on your team reads each draft and decides whether to send it.' },
      { question: 'Who can see our emails?', answer: 'Only the system and the Datonum owner, under our Data Processing Agreement. Access goes through an app in your own Workspace or Microsoft 365 account, and you can revoke it at any time.' },
      { question: 'How is this different from the AI built into Gmail or Outlook?', answer: 'Those tools help one person in one inbox. Inbox Desk works on a shared inbox, uses your own categories and routes each email into your CRM, sheet or chat, so the whole team sees the same picture.' },
      { question: 'What if our email volume is above 3,000 a month?', answer: 'Tell us in the form. We will quote the monthly plan for your volume before any work starts, or refund you if it does not suit you.' },
      { question: 'Do we have to keep the monthly plan?', answer: 'No. You can cancel at any time. We hand over the workflow and a short guide so you can run it on your own server or ours.' },
    ],
    related: [
      { label: 'Terms of Service', href: '/service-terms' },
      { label: 'Data Processing Agreement', href: '/dpa' },
    ],
  },
  {
    slug: 'team-answers',
    name: 'Team Answers',
    eyebrow: 'Package · Company knowledge',
    title: 'Team Answers: an AI assistant that answers your team from your own documents',
    metaTitle: 'Team Answers — an AI assistant built on your company documents | Datonum',
    metaDescription:
      'Fixed-price setup of an AI assistant in your Claude, ChatGPT or Gemini workspace that answers staff questions from your SOPs and price lists, with sources. From €1,500.',
    summary:
      'Your team asks the same questions every week: how we price this, where the template is, what we tell a client when something goes wrong. We build an assistant that answers from your own documents and shows the source.',
    forWhom: [
      'Teams of about 10 to 50 people where the owner or senior staff answer the same questions every week',
      'Your answers already exist in SOPs, price lists, policies and old emails, but nobody finds them quickly',
      'You use, or are ready to use, Claude Team, ChatGPT Business or Gemini for Google Workspace',
    ],
    problem: [
      'Senior people get interrupted all day with questions the documents already answer. New hires take weeks to find their way around.',
      'Generic AI chat tools answer confidently from the internet, not from how your company does things.',
    ],
    outcome:
      'Your team asks the assistant first and gets an answer from your documents, with the document it came from. When the documents do not cover something, it says so instead of guessing.',
    tiers: [
      {
        name: 'Team Answers',
        price: '€1,500',
        priceNote: 'one-time setup, VAT excluded, paid at order',
        includes: [
          'One assistant in your Claude, ChatGPT or Gemini workspace',
          'Up to 50 of your documents, organized and loaded',
          'A list of gaps and contradictions found in your documents',
          '30 real questions from your team as the acceptance test',
          'A recorded walkthrough for your team',
          '30 days of fixes after launch',
        ],
        checkoutUrl: 'https://buy.stripe.com/eVq4gAbjpaqOfhf7w92Ry02',
        cta: 'Buy Team Answers',
        umamiId: 'team-answers',
      },
      {
        name: 'Team Answers Plus',
        price: '€3,000',
        priceNote: 'one-time setup, VAT excluded, 50% at order and 50% after the tests pass',
        includes: [
          'Two assistants for different roles, for example sales and operations',
          'Up to 100 documents across both',
          'Access from Slack or Microsoft Teams where your plan supports it',
          '30 test questions per assistant',
          'Recorded walkthrough and 30 days of fixes',
        ],
        checkoutUrl: 'https://buy.stripe.com/dRm00k739fL8glj6s52Ry03',
        cta: 'Pay €1,500 to start',
        umamiId: 'team-answers-plus',
      },
    ],
    monthly: {
      name: 'Care',
      price: '€150 / month, optional',
      includes: [
        'New and changed documents loaded every month',
        'Monthly check of answers against your test questions',
        'Up to 2 small changes to instructions a month',
      ],
      note: 'Your AI workspace subscription is paid directly to the provider. Cancel Care any time; the assistant keeps working.',
    },
    steps: [
      { label: 'Pay online and fill in a 10-minute form', detail: 'Which AI workspace you use, which documents matter and the questions your team asks.' },
      { label: 'We check the fit within 2 business days', detail: 'If it is not a fit, you get a full refund.' },
      { label: 'You share the documents', detail: 'We sort them, flag gaps and contradictions, and agree the 30 test questions with you.' },
      { label: 'Build and test', detail: 'You get every test answer with its source.' },
      { label: 'Handover in about 1 to 2 weeks', detail: 'Recorded walkthrough, then 30 days of fixes.' },
    ],
    guarantee:
      'At least 27 of the 30 test questions are answered correctly, with the source document. If not, we keep fixing it at no cost. If it still falls short, we refund the setup in full.',
    worksWith: 'Claude Team or Enterprise, ChatGPT Business or Enterprise, Gemini for Google Workspace. Documents from Google Drive, SharePoint, Notion or files you send.',
    notIncluded: [
      'Rewriting your documents (we point out the gaps; you decide what to fix)',
      'Answering customers directly. This assistant is for your team',
      'The AI workspace subscription itself',
    ],
    faqs: [
      { question: 'Will it make things up?', answer: 'It is set up to answer only from your documents and to show the source. When the documents do not cover a question, it is instructed to say so. The 30-question test checks exactly this before you accept the setup.' },
      { question: 'Our documents are a mess. Is that a problem?', answer: 'That is common. Part of the setup is sorting them and giving you a list of gaps and contradictions. The assistant can only be as good as the documents, so we show you where they fall short.' },
      { question: 'Which AI tool should we use?', answer: 'The one your team already pays for or is ready to use. If you have none, we will recommend one in the fit check based on what you use for email and files.' },
      { question: 'Is our data used to train AI models?', answer: 'By default, the business plans of Claude, ChatGPT and Gemini for Google Workspace do not use your content to train their models. We only set this up on business plans, never on personal accounts.' },
      { question: 'Do we need the Care plan?', answer: 'No. It helps if your documents change often. Without it, the assistant keeps working and your team can add documents themselves using the walkthrough.' },
    ],
    related: [
      { label: 'Case study: answers from company documents', href: '/case-studies/document-answers' },
      { label: 'Terms of Service', href: '/service-terms' },
      { label: 'Data Processing Agreement', href: '/dpa' },
    ],
  },
];

// Doc Intake is offered on request only, to gauge demand before it becomes a package.
export const docIntake = {
  name: 'Doc Intake',
  title: 'Doc Intake: documents into a table, checked by a person',
  summary:
    'Supplier order confirmations, delivery notes, timesheets, application forms: if your team retypes the same fields from documents every week, tell us which document it is. We set up extraction into your sheet or system with a review step.',
  price: 'From €1,800 setup, from €150/month',
  cta: 'Describe your document',
  note: 'On request. We reply within 2 business days with whether we can do it and a fixed price.',
};
