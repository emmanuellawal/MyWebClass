import { getSubmissions, updateSubmissionStatus } from './supabase.js';

let allSubmissions = [];
let currentFilter = 'all';
let selectedSubmission = null;

const container = document.getElementById('submissions-container');
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');
const approveBtn = document.getElementById('approve-btn');
const rejectBtn = document.getElementById('reject-btn');

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getStatusBadge(status) {
  const colors = {
    submitted: 'background: #FFF3CD; color: #856404; border: 1px solid #856404;',
    approved: 'background: #D4EDDA; color: #155724; border: 1px solid #155724;',
    rejected: 'background: #F8D7DA; color: #721C24; border: 1px solid #721C24;'
  };

  return `<span style="padding: 4px 12px; border-radius: 4px; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; ${colors[status] || ''}">${status}</span>`;
}

function renderSubmissions(submissions) {
  if (submissions.length === 0) {
    container.innerHTML = '<p class="text-center">No submissions found.</p>';
    return;
  }

  const html = submissions.map(sub => `
    <div class="card mb-lg" style="cursor: pointer;" data-id="${sub.id}">
      <div class="card-content">
        <div class="flex justify-between items-center mb-md">
          <h3 class="card-title mb-0">${sub.style_name || sub.style_slug || 'Unnamed Style'}</h3>
          ${getStatusBadge(sub.status || 'submitted')}
        </div>

        <p><strong>Submitter:</strong> ${sub.name}</p>
        <p><strong>Email:</strong> ${sub.email}</p>
        <p><strong>Demo URL:</strong> <a href="${sub.demo_url}" target="_blank" rel="noopener noreferrer">${sub.demo_url}</a></p>
        <p><strong>Submitted:</strong> ${formatDate(sub.created_at)}</p>

        <p class="card-description">${sub.explanation.substring(0, 150)}${sub.explanation.length > 150 ? '...' : ''}</p>

        <button class="button button-primary mt-md view-details-btn" data-id="${sub.id}">
          View Details
        </button>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      showDetails(id);
    });
  });
}

function showDetails(id) {
  selectedSubmission = allSubmissions.find(sub => sub.id === id);

  if (!selectedSubmission) return;

  modalBody.innerHTML = `
    <div>
      <h3>${selectedSubmission.style_name || selectedSubmission.style_slug}</h3>

      <div class="mb-lg">
        <p><strong>Status:</strong> ${getStatusBadge(selectedSubmission.status || 'submitted')}</p>
        <p><strong>Submitter:</strong> ${selectedSubmission.name}</p>
        <p><strong>Email:</strong> ${selectedSubmission.email}</p>
        <p><strong>Submitted:</strong> ${formatDate(selectedSubmission.created_at)}</p>
      </div>

      <div class="mb-lg">
        <h4>Demo URL</h4>
        <p><a href="${selectedSubmission.demo_url}" target="_blank" rel="noopener noreferrer">${selectedSubmission.demo_url}</a></p>
        <button class="button button-secondary mt-sm" onclick="window.open('${selectedSubmission.demo_url}', '_blank')">
          Open Demo in New Tab
        </button>
      </div>

      ${selectedSubmission.screenshot_url ? `
        <div class="mb-lg">
          <h4>Screenshot</h4>
          <img src="${selectedSubmission.screenshot_url}" alt="Screenshot" style="max-width: 100%; border: 2px solid var(--color-black);">
        </div>
      ` : ''}

      <div class="mb-lg">
        <h4>Explanation</h4>
        <p style="white-space: pre-wrap;">${selectedSubmission.explanation}</p>
      </div>

      ${selectedSubmission.reviewer_notes ? `
        <div class="mb-lg">
          <h4>Reviewer Notes</h4>
          <p>${selectedSubmission.reviewer_notes}</p>
        </div>
      ` : ''}

      <div class="mb-lg">
        <h4>Preview Demo</h4>
        <iframe
          src="${selectedSubmission.demo_url}"
          style="width: 100%; height: 500px; border: 2px solid var(--color-black);"
          title="Demo Preview"
        ></iframe>
      </div>
    </div>
  `;

  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function hideModal() {
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  selectedSubmission = null;
}

async function handleApprove() {
  if (!selectedSubmission) return;

  const notes = prompt('Add optional notes for this approval:');

  try {
    await updateSubmissionStatus(selectedSubmission.id, 'approved', notes);
    alert('Submission approved successfully!');
    hideModal();
    await loadSubmissions();
  } catch (error) {
    console.error('Error approving submission:', error);
    alert('Error approving submission. Please try again.');
  }
}

async function handleReject() {
  if (!selectedSubmission) return;

  const notes = prompt('Please provide a reason for rejection:');

  if (!notes) {
    alert('Rejection reason is required');
    return;
  }

  try {
    await updateSubmissionStatus(selectedSubmission.id, 'rejected', notes);
    alert('Submission rejected.');
    hideModal();
    await loadSubmissions();
  } catch (error) {
    console.error('Error rejecting submission:', error);
    alert('Error rejecting submission. Please try again.');
  }
}

async function loadSubmissions() {
  try {
    container.innerHTML = '<p class="text-center">Loading submissions...</p>';

    allSubmissions = await getSubmissions();

    const filtered = currentFilter === 'all'
      ? allSubmissions
      : allSubmissions.filter(sub => (sub.status || 'submitted') === currentFilter);

    renderSubmissions(filtered);
  } catch (error) {
    console.error('Error loading submissions:', error);
    container.innerHTML = '<p class="text-center" style="color: var(--color-red);">Error loading submissions. Please refresh the page.</p>';
  }
}

document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;

    document.querySelectorAll('[data-filter]').forEach(b => {
      b.classList.remove('button-primary');
      b.classList.add('button-secondary');
    });
    btn.classList.remove('button-secondary');
    btn.classList.add('button-primary');

    const filtered = currentFilter === 'all'
      ? allSubmissions
      : allSubmissions.filter(sub => (sub.status || 'submitted') === currentFilter);

    renderSubmissions(filtered);
  });
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', hideModal);
}

if (approveBtn) {
  approveBtn.addEventListener('click', handleApprove);
}

if (rejectBtn) {
  rejectBtn.addEventListener('click', handleReject);
}

modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

loadSubmissions();
