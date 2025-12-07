// Mobile menu toggle
(function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!mobileMenuButton || !mobileMenu) return;

  mobileMenuButton.addEventListener('click', function() {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    // Toggle menu visibility
    if (isExpanded) {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    if (!isClickInside && isExpanded) {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  });
})();
