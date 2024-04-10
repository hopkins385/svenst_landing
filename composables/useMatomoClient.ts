// extend Window interface to include _paq
declare global {
  interface Window {
    _paq?: any[];
  }
}

export default function useMatomoClient() {
  interface TrackPageView {
    customTitle: string;
    customUrl: string;
  }

  function trackPageView({ customTitle, customUrl }: TrackPageView) {
    if (process.client && window._paq !== undefined) {
      window._paq.push(['setDocumentTitle', customTitle]);
      window._paq.push(['setCustomUrl', customUrl]);
      window._paq.push(['trackPageView']);
    }
  }

  interface TrackEvent {
    category: string;
    action: string;
    name?: string;
    value?: number;
  }

  function trackEvent({ category, action, name, value }: TrackEvent) {
    if (typeof category !== 'string' || typeof action !== 'string') return;
    if (process.client && window._paq !== undefined) {
      window._paq.push(['trackEvent', category, action, name, value]);
    }
  }

  interface TrackGoal {
    goalId: number;
    revenue?: number;
  }

  function trackGoal({ goalId, revenue }: TrackGoal) {
    if (typeof goalId !== 'number') return;
    if (process.client && window._paq !== undefined) {
      window._paq.push(['trackGoal', goalId, revenue]);
    }
  }

  interface TrackLink {
    url: string;
    linkType: string;
  }

  function trackLink({ url, linkType }: TrackLink) {
    if (typeof url !== 'string' || typeof linkType !== 'string') return;
    if (process.client && window._paq !== undefined) {
      window._paq.push(['trackLink', url, linkType]);
    }
  }

  function setCookieConsentGiven() {
    if (process.client && window._paq !== undefined) {
      window._paq.push(['rememberCookieConsentGiven']);
    }
  }

  return {
    setCookieConsentGiven,
    trackPageView,
    trackEvent,
    trackGoal,
    trackLink,
  };
}
