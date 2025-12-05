import { insertSubmission } from './supabase.js';

const form = document.getElementById('submission-form');
const successMessage = document.getElementById('success-message');
const submitButton = document.getElementById('submit-button');
const formMessage = document.getElementById('form-message');

function showError(fieldId, message) {
  const errorElement = document.getElementById(`${fieldId}-error`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.form-error');
  errorElements.forEach(el => el.textContent = '');
}

function validateForm(formData) {
  clearErrors();
  let isValid = true;

  if (!formData.name || formData.name.trim().length < 2) {
    showError('name', 'Please enter your name (at least 2 characters)');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  if (!formData.styleName || formData.styleName.trim().length < 3) {
    showError('style-name', 'Please enter the design style name');
    isValid = false;
  }

  const urlRegex = /^https?:\/\/.+/;
  if (!formData.demoUrl || !urlRegex.test(formData.demoUrl)) {
    showError('demo-url', 'Please enter a valid URL (must start with http:// or https://)');
    isValid = false;
  }

  if (formData.screenshotUrl && !urlRegex.test(formData.screenshotUrl)) {
    showError('screenshot-url', 'Please enter a valid URL or leave this field empty');
    isValid = false;
  }

  if (!formData.explanation || formData.explanation.trim().length < 100) {
    showError('explanation', 'Please provide at least 100 characters explaining your design');
    isValid = false;
  }

  if (formData.explanation && formData.explanation.trim().length > 2000) {
    showError('explanation', 'Explanation is too long (maximum 2000 characters)');
    isValid = false;
  }

  if (!formData.privacyConsent) {
    showError('privacy', 'You must agree to the privacy policy to submit');
    isValid = false;
  }

  return isValid;
}

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function sendDiscordNotification(submission) {
  const webhookUrl = '{{ site.discordWebhook }}';

  if (!webhookUrl || webhookUrl.includes('your_discord')) {
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [{
          title: '🎨 New Design Submission',
          color: 14820378,
          fields: [
            {
              name: 'Submitter',
              value: submission.name,
              inline: true
            },
            {
              name: 'Style',
              value: submission.styleName,
              inline: true
            },
            {
              name: 'Demo URL',
              value: submission.demoUrl,
              inline: false
            },
            {
              name: 'Explanation',
              value: submission.explanation.substring(0, 200) + (submission.explanation.length > 200 ? '...' : ''),
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }]
      })
    });

    if (!response.ok) {
      console.warn('Discord notification failed');
    }
  } catch (error) {
    console.error('Error sending Discord notification:', error);
  }
}

async function handleSubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    styleName: document.getElementById('style-name').value,
    demoUrl: document.getElementById('demo-url').value,
    screenshotUrl: document.getElementById('screenshot-url').value,
    explanation: document.getElementById('explanation').value,
    privacyConsent: document.getElementById('privacy-consent').checked
  };

  if (!validateForm(formData)) {
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';
  formMessage.textContent = '';
  formMessage.className = '';

  try {
    const submission = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      styleName: formData.styleName.trim(),
      styleSlug: createSlug(formData.styleName),
      demoUrl: formData.demoUrl.trim(),
      screenshotUrl: formData.screenshotUrl.trim() || null,
      explanation: formData.explanation.trim()
    };

    const result = await insertSubmission(submission);

    if (window.trackSubmission) {
      window.trackSubmission();
    }

    await sendDiscordNotification(submission);

    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
  } catch (error) {
    console.error('Submission error:', error);

    formMessage.textContent = 'An error occurred while submitting your design. Please try again.';
    formMessage.style.color = 'var(--color-red)';
    formMessage.style.padding = 'var(--spacing-md)';
    formMessage.style.border = '2px solid var(--color-red)';
    formMessage.style.marginTop = 'var(--spacing-md)';

    submitButton.disabled = false;
    submitButton.textContent = 'Submit Design';
  }
}

if (form) {
  form.addEventListener('submit', handleSubmit);
}

const inputs = form?.querySelectorAll('input, textarea');
inputs?.forEach(input => {
  input.addEventListener('blur', () => {
    const fieldId = input.id;
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement && errorElement.textContent) {
      errorElement.textContent = '';
    }
  });
});
