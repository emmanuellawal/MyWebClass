// Cookie Consent Management
(function() {
  const CONSENT_KEY = 'cookie_consent';
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('cookie-accept');
  const rejectButton = document.getElementById('cookie-reject');
  const preferencesButton = document.getElementById('cookie-preferences');

  if (!cookieBanner) return;

  // Check if user has already made a choice
  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  // Save consent choice
  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      return true;
    } catch (e) {
      console.error('Could not save cookie consent:', e);
      return false;
    }
  }

  // Load analytics if consent given
  function loadAnalytics() {
    // TODO: Add analytics script here (Plausible, Cloudflare Analytics, etc.)
    console.log('Analytics loaded with user consent');

    // Example for Plausible Analytics:
    // const script = document.createElement('script');
    // script.defer = true;
    // script.src = 'https://plausible.io/js/script.js';
    // script.setAttribute('data-domain', 'mywebclass.org');
    // document.head.appendChild(script);
  }

  // Show banner if no consent recorded
  function checkConsent() {
    const consent = getConsent();

    if (consent === null) {
      // No consent recorded, show banner
      cookieBanner.classList.remove('hidden');
    } else if (consent === 'accepted') {
      // User accepted, load analytics
      loadAnalytics();
    }
    // If rejected, do nothing (no analytics)
  }

  // Handle accept button
  acceptButton.addEventListener('click', function() {
    setConsent('accepted');
    cookieBanner.classList.add('hidden');
    loadAnalytics();
  });

  // Handle reject button
  rejectButton.addEventListener('click', function() {
    setConsent('rejected');
    cookieBanner.classList.add('hidden');
  });

  // Handle preferences button (for now, same as accept - could show modal)
  preferencesButton.addEventListener('click', function() {
    // TODO: Show preferences modal for granular control
    setConsent('accepted');
    cookieBanner.classList.add('hidden');
    loadAnalytics();
  });

  // Initialize on page load
  checkConsent();
})();
