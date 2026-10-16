// Umami custom events. Umami is cookieless and loads outside the consent banner; it may
// still be absent (not configured locally, or blocked), so a missing
// tracker is a no-op. Event data never carries names or email addresses.

export type UmamiEventData = Record<string, string | number | boolean>;

interface UmamiTracker {
  track: (event: string, data?: UmamiEventData) => void;
}

declare global {
  interface Window {
    umami?: UmamiTracker;
  }
}

export function trackEvent(event: string, data?: UmamiEventData): void {
  window.umami?.track(event, data);
}
