import { supabase } from './supabase.js';

const CONSENT_KEY = 'cookie-consent';
const ANALYTICS_KEY = 'analytics-consent';

function getSessionId() {
  let sessionId = sessionStorage.getItem('session-id');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('session-id', sessionId);
  }
  return sessionId;
}

function showConsentBanner() {
  const banner = document.getElementById('cookie-consent');
  if (banner) {
    banner.classList.add('visible');
    banner.setAttribute('aria-hidden', 'false');
  }
}

function hideConsentBanner() {
  const banner = document.getElementById('cookie-consent');
  if (banner) {
    banner.classList.remove('visible');
    banner.setAttribute('aria-hidden', 'true');
  }
}

function showPreferencesModal() {
  const modal = document.getElementById('cookie-preferences-modal');
  if (modal) {
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');

    const analyticsCheckbox = document.getElementById('analytics-consent');
    if (analyticsCheckbox) {
      analyticsCheckbox.checked = localStorage.getItem(ANALYTICS_KEY) === 'true';
    }
  }
}

function hidePreferencesModal() {
  const modal = document.getElementById('cookie-preferences-modal');
  if (modal) {
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
  }
}

async function logConsent(consentGiven, preferences = {}) {
  try {
    await supabase
      .from('consent_logs')
      .insert([{
        session_id: getSessionId(),
        consent_given: consentGiven,
        preferences
      }]);
  } catch (error) {
    console.error('Error logging consent:', error);
  }
}

function acceptAllCookies() {
  localStorage.setItem(CONSENT_KEY, 'accepted');
  localStorage.setItem(ANALYTICS_KEY, 'true');
  hideConsentBanner();
  logConsent(true, { analytics: true });
  window.dispatchEvent(new CustomEvent('consent-changed'));
}

function rejectAllCookies() {
  localStorage.setItem(CONSENT_KEY, 'rejected');
  localStorage.setItem(ANALYTICS_KEY, 'false');
  hideConsentBanner();
  logConsent(false, { analytics: false });
}

function savePreferences() {
  const analyticsCheckbox = document.getElementById('analytics-consent');
  const analyticsConsent = analyticsCheckbox?.checked || false;

  localStorage.setItem(CONSENT_KEY, 'custom');
  localStorage.setItem(ANALYTICS_KEY, analyticsConsent.toString());

  hidePreferencesModal();
  hideConsentBanner();

  logConsent(analyticsConsent, { analytics: analyticsConsent });
  window.dispatchEvent(new CustomEvent('consent-changed'));
}

function init() {
  const consentStatus = localStorage.getItem(CONSENT_KEY);

  if (!consentStatus) {
    setTimeout(showConsentBanner, 1000);
  }

  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');
  const preferencesBtn = document.getElementById('cookie-preferences');
  const savePreferencesBtn = document.getElementById('save-preferences');
  const closePreferencesBtn = document.getElementById('close-preferences');
  const manageConsentBtn = document.getElementById('manage-consent');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', acceptAllCookies);
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', rejectAllCookies);
  }

  if (preferencesBtn) {
    preferencesBtn.addEventListener('click', () => {
      hideConsentBanner();
      showPreferencesModal();
    });
  }

  if (savePreferencesBtn) {
    savePreferencesBtn.addEventListener('click', savePreferences);
  }

  if (closePreferencesBtn) {
    closePreferencesBtn.addEventListener('click', hidePreferencesModal);
  }

  if (manageConsentBtn) {
    manageConsentBtn.addEventListener('click', showPreferencesModal);
  }

  const modal = document.getElementById('cookie-preferences-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hidePreferencesModal();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
