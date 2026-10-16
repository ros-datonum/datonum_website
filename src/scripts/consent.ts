// Cookie consent (vanilla-cookieconsent v3, bundled from npm). Necessary is always on;
// analytics (HubSpot tracking, Umami session recording, stored attribution) and marketing
// (LinkedIn Insight Tag)
// stay off until the visitor opts in. Gated scripts are tagged in BaseLayout with
// type="text/plain" data-category="…" and are only executed by the library after consent.
// Umami's cookieless usage analytics (script.js) runs outside this banner.
import * as CookieConsent from 'vanilla-cookieconsent';
import { routes } from '../data/navigation.ts';
import { trackEvent } from './umami.ts';
import consentStylesheetUrl from '../styles/consent.css?url';

export const consentCategory = {
  necessary: 'necessary',
  analytics: 'analytics',
  marketing: 'marketing',
} as const;

// Bump when the category list or what a category covers changes: everyone is asked again.
const CONSENT_REVISION = 0;
const CONSENT_COOKIE_NAME = 'cc_cookie';
const CONSENT_LIFETIME_DAYS = 365;
const CONSENT_UPDATE_EVENT = 'consent_update';
// Section 10 of the Privacy Notice, linked from under the banner's buttons.
const PRIVACY_COOKIES_SECTION = `${routes.privacy}#cookies`;

// First-party cookies set by the gated scripts, removed when their category is withdrawn.
// Third-party LinkedIn cookies (linkedin.com) cannot be removed from this domain.
const HUBSPOT_COOKIES = ['__hstc', 'hubspotutk', '__hssrc', '__hssc'];
const LINKEDIN_FIRST_PARTY_COOKIES = ['li_fat_id', 'li_sugr'];

export function hasAnalyticsConsent(): boolean {
  return CookieConsent.acceptedCategory(consentCategory.analytics);
}

function reportConsentChoice(): void {
  trackEvent(CONSENT_UPDATE_EVENT, {
    analytics: CookieConsent.acceptedCategory(consentCategory.analytics),
    marketing: CookieConsent.acceptedCategory(consentCategory.marketing),
  });
}

// The banner styles load asynchronously so they never delay the first paint. A failed load
// still resolves: an unstyled banner is better than no way to give or refuse consent.
function loadConsentStylesheet(): Promise<void> {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = consentStylesheetUrl;
  const settled = new Promise<void>((resolve) => {
    link.onload = () => resolve();
    link.onerror = () => resolve();
  });
  document.head.append(link);
  return settled;
}

export async function startConsentBanner(): Promise<void> {
  await loadConsentStylesheet();
  return CookieConsent.run({
    revision: CONSENT_REVISION,
    cookie: { name: CONSENT_COOKIE_NAME, expiresAfterDays: CONSENT_LIFETIME_DAYS },
    guiOptions: {
      consentModal: { layout: 'bar inline', position: 'bottom', equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false },
    },
    categories: {
      [consentCategory.necessary]: { enabled: true, readOnly: true },
      [consentCategory.analytics]: {
        autoClear: { cookies: HUBSPOT_COOKIES.map((name) => ({ name })), reloadPage: true },
      },
      [consentCategory.marketing]: {
        autoClear: { cookies: LINKEDIN_FIRST_PARTY_COOKIES.map((name) => ({ name })), reloadPage: true },
      },
    },
    onFirstConsent: reportConsentChoice,
    onChange: reportConsentChoice,
    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'Your privacy choices',
            description:
              'We use privacy-friendly, cookieless analytics to understand how our website is used. With your permission, we’d also like to use HubSpot analytics technologies and session recording to understand website visits and inquiries, and LinkedIn marketing technologies to measure our advertising and reach relevant audiences. You can change your preferences at any time.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage preferences',
            footer: `<a class="cc__link" href="${PRIVACY_COOKIES_SECTION}">Privacy Notice &amp; Cookies</a>`,
          },
          preferencesModal: {
            title: 'Cookie settings',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close',
            sections: [
              {
                description: `Our usage analytics are cookieless and always on. Everything below runs only if you switch it on. Details are in our <a class="cc__link" href="${routes.privacy}">privacy notice</a>.`,
              },
              {
                title: 'Necessary',
                description: 'Remembers your cookie choice for 12 months.',
                linkedCategory: consentCategory.necessary,
              },
              {
                title: 'Analytics',
                description:
                  'HubSpot cookies record the pages you view, and we keep the link or website that brought you here in your browser for up to 90 days, so that if you contact us we know which channel reached you. With the same permission we record anonymised sessions (clicks, scrolling, navigation; form input masked) to improve the site.',
                linkedCategory: consentCategory.analytics,
              },
              {
                title: 'Marketing',
                description:
                  'The LinkedIn Insight Tag lets LinkedIn report the professional characteristics of our visitors to us in aggregated form, and in future lets us show our content on LinkedIn to people who have visited this site.',
                linkedCategory: consentCategory.marketing,
              },
            ],
          },
        },
      },
    },
  });
}
