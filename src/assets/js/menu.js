/**
 * Brutalist Mobile Menu Toggle
 * Uses data attributes for DOM hooks per project conventions
 */
const MobileMenu = {
  init() {
    const toggleBtn = document.querySelector('[data-menu-toggle]');
    const navMenu = document.getElementById('nav-menu');

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';

      toggleBtn.setAttribute('aria-expanded', !isOpen);
      navMenu.classList.toggle('is-open', !isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        toggleBtn.focus();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => MobileMenu.init());
