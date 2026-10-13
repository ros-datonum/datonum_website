// Site identity. Single source of truth for the facts repeated across head metadata,
// structured data, the footer and llms.txt.

export const siteIdentity = {
  name: 'Datonum',
  summary:
    'Datonum is an AI solutions company helping businesses turn AI from experimentation into practical operating capability.',
  // Longer positioning statement for contexts with room for it (llms.txt).
  positioning:
    'We work from the business problem first: understanding how the company operates, where AI can create meaningful value, and what needs to change in the process, systems or way of working to make that value real. Datonum is not tied to a single platform, model or automation stack; the solution follows the business need.',
  contactEmail: 'hello@datonum.com',
  countryCode: 'ES',
  language: 'en',
  locale: 'en_GB',
  dateLocale: 'en-GB',
} as const;

export const founder = {
  name: 'Rostyslav Bachyk',
  jobTitle: 'Founder',
  linkedInUrl: 'https://www.linkedin.com/in/ros-bachyk',
} as const;

export const socialProfiles = {
  linkedIn: 'https://www.linkedin.com/company/datonum-systems',
  threads: 'https://www.threads.com/@datonumhq',
} as const;

// Social share card, rendered from the brand lockup on navy.
export const shareImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Datonum',
} as const;

export const logoPath = '/brand/logo/datonum-app-tile.svg';
