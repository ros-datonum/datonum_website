// First- and last-touch attribution for inquiries. Every page reads its own campaign
// parameters and external referrer; they are written to localStorage only with analytics
// consent, and removed as soon as that consent is missing. The contact form sends the
// stored touches to HubSpot (see pages/contact.astro).
import { hasAnalyticsConsent } from './consent.ts';

export interface Touch {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  landing: string;
  referrer: string;
  ts: number;
}

export interface CampaignParameters {
  source: string;
  medium: string;
  campaign: string;
}

const FIRST_TOUCH_KEY = 'dtn_first_touch';
const LAST_TOUCH_KEY = 'dtn_last_touch';
const TOUCH_LIFETIME_DAYS = 90;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const TOUCH_LIFETIME_MS = TOUCH_LIFETIME_DAYS * MILLISECONDS_PER_DAY;

const UTM_PARAMETER = {
  source: 'utm_source',
  medium: 'utm_medium',
  campaign: 'utm_campaign',
  content: 'utm_content',
} as const;
const DIRECT_SOURCE = 'direct';
const REFERRAL_MEDIUM = 'referral';
const SITE_HOST = new URL(import.meta.env.SITE).hostname;

function readUtmParameters(): Omit<Touch, 'landing' | 'referrer' | 'ts'> {
  const parameters = new URLSearchParams(window.location.search);
  return {
    source: parameters.get(UTM_PARAMETER.source) ?? '',
    medium: parameters.get(UTM_PARAMETER.medium) ?? '',
    campaign: parameters.get(UTM_PARAMETER.campaign) ?? '',
    content: parameters.get(UTM_PARAMETER.content) ?? '',
  };
}

// The referring host when it is another website; '' for our own pages or no referrer.
function readExternalReferrerHost(): string {
  if (!document.referrer) return '';
  const host = new URL(document.referrer).hostname;
  const isOwnSite = host === window.location.hostname || host === SITE_HOST || host.endsWith(`.${SITE_HOST}`);
  return isOwnSite ? '' : host;
}

function hasUtm(utm: Omit<Touch, 'landing' | 'referrer' | 'ts'>): boolean {
  return Object.values(utm).some((value) => value !== '');
}

/** The UTM parameters of the current page's URL, held in memory only. */
export function readCurrentCampaign(): CampaignParameters {
  const { source, medium, campaign } = readUtmParameters();
  return { source, medium, campaign };
}

function readCurrentTouch(): { touch: Touch; isAttributable: boolean } {
  const utm = readUtmParameters();
  const referrer = readExternalReferrerHost();
  const landing = window.location.pathname;
  const ts = Date.now();
  if (hasUtm(utm)) return { touch: { ...utm, landing, referrer, ts }, isAttributable: true };
  if (referrer) {
    return {
      touch: { source: referrer, medium: REFERRAL_MEDIUM, campaign: '', content: '', landing, referrer, ts },
      isAttributable: true,
    };
  }
  return {
    touch: { source: DIRECT_SOURCE, medium: '', campaign: '', content: '', landing, referrer, ts },
    isAttributable: false,
  };
}

function readStoredTouch(key: string): Touch | undefined {
  const stored = localStorage.getItem(key);
  if (!stored) return undefined;
  const touch: Touch = JSON.parse(stored);
  if (Date.now() - touch.ts > TOUCH_LIFETIME_MS) {
    localStorage.removeItem(key);
    return undefined;
  }
  return touch;
}

/** Stored first and last touch; always empty without analytics consent. */
export function readStoredTouches(): { first?: Touch; last?: Touch } {
  if (!hasAnalyticsConsent()) return {};
  return { first: readStoredTouch(FIRST_TOUCH_KEY), last: readStoredTouch(LAST_TOUCH_KEY) };
}

function storeTouches(): void {
  const { touch, isAttributable } = readCurrentTouch();
  if (!readStoredTouch(FIRST_TOUCH_KEY)) localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
  if (isAttributable) localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(touch));
}

function clearStoredTouches(): void {
  localStorage.removeItem(FIRST_TOUCH_KEY);
  localStorage.removeItem(LAST_TOUCH_KEY);
}

/** Stores this page's touch with analytics consent; otherwise removes any stored touch. */
export function syncStoredTouches(): void {
  if (hasAnalyticsConsent()) storeTouches();
  else clearStoredTouches();
}

/** Re-syncs whenever the visitor makes or changes their cookie choice on this page. */
export function watchConsentForAttribution(): void {
  window.addEventListener('cc:onFirstConsent', syncStoredTouches);
  window.addEventListener('cc:onChange', syncStoredTouches);
}
