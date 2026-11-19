// Post-purchase onboarding forms, one per package. Stripe redirects buyers here after
// payment. Pages render from this file; on submit the answers are joined into one
// HubSpot contact property (onboarding_answers) next to the standard contact fields.
// The pages are noindex and stay out of the sitemap.

// HubSpot form "Datonum Package Onboarding" (creates contacts, sets lifecycle stage to Customer). A form GUID is public: it ships in the page script.
// Portal and region come from the same PUBLIC_HUBSPOT_* env vars as the contact form.
export const ONBOARDING_FORM_GUID = '47fe4d94-0223-4bf3-8d64-8f51e77288c1';

export const onboardingPath = (slug: string): string => `/onboarding/${slug}`;

export interface Choice {
  value: string;
  label: string;
}

interface QuestionBase {
  id: string; // also the input name
  label: string; // shown on the page and used as the line label in HubSpot
  hint?: string;
  required?: boolean;
  showWhen?: { field: string; value: string }; // show only when another radio has this value
}

export type Question =
  | (QuestionBase & { type: 'text' | 'date'; placeholder?: string })
  | (QuestionBase & { type: 'textarea'; placeholder?: string; rows?: number })
  | (QuestionBase & { type: 'radio' | 'checkbox'; choices: Choice[] });

export interface OnboardingSection {
  title: string;
  lead?: string;
  questions: Question[];
}

export interface OnboardingForm {
  slug: string; // matches the package slug
  packageName: string;
  title: string;
  lead: string;
  sections: OnboardingSection[];
}

const choices = (...labels: string[]): Choice[] => labels.map((label) => ({ value: label, label }));

const timing: OnboardingSection = {
  title: 'Timing',
  questions: [
    { id: 'deadline', type: 'date', label: 'Do you need it running by a certain date?', hint: 'Leave empty if there is no deadline.' },
    { id: 'notes', type: 'textarea', rows: 3, label: 'Anything else we should know?' },
  ],
};

export const onboardingForms: OnboardingForm[] = [
  {
    slug: 'inbox-desk',
    packageName: 'Inbox Desk',
    title: 'Tell us about your inbox',
    lead: 'About 10 minutes. We use your answers to check the fit within 2 business days and to plan the setup.',
    sections: [
      {
        title: 'The inbox',
        questions: [
          {
            id: 'platform', type: 'radio', required: true, label: 'Where does the inbox live?',
            choices: choices('Google Workspace (Gmail)', 'Microsoft 365 (Outlook)', 'Somewhere else'),
          },
          { id: 'inbox_address', type: 'text', required: true, label: 'Inbox address', placeholder: 'info@yourcompany.com' },
          {
            id: 'volume', type: 'radio', required: true, label: 'Roughly how many emails arrive a month?',
            hint: 'The monthly plan covers up to 3,000. Above that we quote the plan before any work starts.',
            choices: choices('Under 500', '500 to 1,500', '1,500 to 3,000', 'Over 3,000'),
          },
          { id: 'languages', type: 'text', label: 'Languages the emails arrive in', placeholder: 'English, Spanish' },
        ],
      },
      {
        title: 'Email types and routing',
        questions: [
          {
            id: 'email_types', type: 'textarea', required: true, rows: 5,
            label: 'What kinds of email arrive? Up to 8.',
            placeholder: 'New booking inquiry\nSupplier invoice\nChange to an existing booking\nComplaint',
          },
          {
            id: 'routing', type: 'textarea', rows: 5,
            label: 'Where should each kind go?',
            hint: 'A label or folder, a row in a sheet or your CRM, a message in Slack or Teams.',
            placeholder: 'New booking inquiry → HubSpot deal and a Slack message in #sales',
          },
          {
            id: 'tools', type: 'checkbox', label: 'Which tools should it connect to?',
            choices: choices('Google Sheets', 'HubSpot', 'Pipedrive', 'Salesforce', 'Slack', 'Microsoft Teams', 'Other'),
          },
        ],
      },
      {
        title: 'Reply drafts',
        questions: [
          { id: 'draft_types', type: 'textarea', rows: 3, label: 'Which kinds of email should get a drafted reply?' },
          {
            id: 'sources', type: 'textarea', rows: 3,
            label: 'Where are your FAQ, templates or good past replies?',
            hint: 'A link or a folder name is enough. Please don’t paste customer emails here.',
          },
          { id: 'tone', type: 'text', label: 'Anything about tone we should know?', placeholder: 'First names, informal, sign off as “The bookings team”' },
        ],
      },
      {
        title: 'Access',
        questions: [
          {
            id: 'admin', type: 'text', required: true,
            label: 'Who manages your email accounts?',
            hint: 'Name and email. They approve our access during setup. We never ask for passwords.',
          },
        ],
      },
      timing,
    ],
  },
  {
    slug: 'team-answers',
    packageName: 'Team Answers',
    title: 'Tell us about your team and documents',
    lead: 'About 10 minutes. We use your answers to check the fit within 2 business days and to plan the setup.',
    sections: [
      {
        title: 'Your plan',
        questions: [
          {
            id: 'plan', type: 'radio', required: true, label: 'Which package did you buy?',
            choices: [
              { value: 'standard', label: 'Team Answers (one assistant)' },
              { value: 'plus', label: 'Team Answers Plus (two assistants)' },
            ],
          },
        ],
      },
      {
        title: 'Your AI workspace',
        questions: [
          {
            id: 'workspace', type: 'radio', required: true, label: 'Which AI workspace does your team use?',
            choices: choices('Claude', 'ChatGPT', 'Gemini', 'Not decided yet'),
          },
          {
            id: 'workspace_plan', type: 'radio', label: 'Which kind of plan?',
            hint: 'A shared assistant needs a team or business plan. If you are not sure, we check it with you.',
            choices: choices('Team or business plan', 'Enterprise plan', 'Individual accounts only', 'Not sure'),
          },
          {
            id: 'admin', type: 'text', required: true,
            label: 'Who manages the workspace?',
            hint: 'Name and email. They add the assistant during setup. We never ask for passwords.',
          },
        ],
      },
      {
        title: 'The assistant',
        questions: [
          { id: 'users', type: 'text', required: true, label: 'Which team will use it, and roughly how many people?', placeholder: 'Customer support, 12 people' },
          {
            id: 'roles', type: 'textarea', rows: 3, required: true,
            label: 'What are the two roles?',
            placeholder: 'Sales: pricing, terms and product questions\nOperations: procedures and supplier rules',
            showWhen: { field: 'plan', value: 'plus' },
          },
          {
            id: 'chat_app', type: 'radio', label: 'Should people reach it from a chat app?',
            choices: choices('Slack', 'Microsoft Teams', 'No, the AI workspace is enough'),
            showWhen: { field: 'plan', value: 'plus' },
          },
          { id: 'limits', type: 'textarea', rows: 3, label: 'Anything it should never answer or do?' },
        ],
      },
      {
        title: 'Documents',
        questions: [
          {
            id: 'doc_location', type: 'checkbox', label: 'Where are the documents?',
            choices: choices('Google Drive', 'SharePoint or OneDrive', 'Notion', 'Confluence', 'Other'),
          },
          {
            id: 'doc_count', type: 'radio', required: true, label: 'Roughly how many documents?',
            hint: 'Team Answers covers up to 50, Plus up to 100.',
            choices: choices('Under 20', '20 to 50', '50 to 100', 'Over 100'),
          },
          { id: 'doc_priority', type: 'textarea', rows: 3, label: 'Which documents matter most?', placeholder: 'Price list, returns policy, onboarding handbook' },
        ],
      },
      {
        title: 'Questions',
        questions: [
          {
            id: 'questions', type: 'textarea', rows: 6, required: true,
            label: '5 to 10 real questions your team asks',
            hint: 'We agree the full set of 30 test questions with you later.',
            placeholder: 'Can we offer a discount above 10% without approval?\nWhat is the lead time for orders to the UK?',
          },
        ],
      },
      timing,
    ],
  },
];
