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

// For events fired on page load: the Umami script is deferred and may not be ready yet.
// Retries for a few seconds, then gives up silently (blocked or not configured).
export function trackEventWhenReady(event: string, data?: UmamiEventData, timeoutMs = 5000): void {
  const started = Date.now();
  const attempt = () => {
    if (window.umami) {
      window.umami.track(event, data);
    } else if (Date.now() - started < timeoutMs) {
      window.setTimeout(attempt, 200);
    }
  };
  attempt();
}
