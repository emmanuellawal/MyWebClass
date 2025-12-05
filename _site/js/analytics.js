import { trackAnalytics } from './supabase.js';

function trackPageView() {
  const analyticsConsent = localStorage.getItem('analytics-consent') === 'true';

  if (!analyticsConsent) {
    return;
  }

  trackAnalytics('page_view', {
    path: window.location.pathname,
    referrer: document.referrer,
    title: document.title
  });
}

function trackDemoClick(demoUrl, styleName) {
  trackAnalytics('demo_click', {
    demo_url: demoUrl,
    style_name: styleName
  });
}

function trackSubmission() {
  trackAnalytics('form_submission', {
    form_type: 'gallery_submission'
  });
}

window.addEventListener('load', trackPageView);

window.addEventListener('consent-changed', () => {
  trackPageView();
});

window.trackDemoClick = trackDemoClick;
window.trackSubmission = trackSubmission;

export { trackPageView, trackDemoClick, trackSubmission };
