document.addEventListener('DOMContentLoaded', function() {
  // Modal elements
  const termsModal = document.getElementById('termsModal');
  const privacyModal = document.getElementById('privacyModal');
  const kvkkModal = document.getElementById('kvkkModal');
  const closeTermsModal = document.getElementById('closeTermsModal');
  const closePrivacyModal = document.getElementById('closePrivacyModal');
  const closeKvkkModal = document.getElementById('closeKvkkModal');

  // Get the footer links
  const termsLink = document.getElementById('termsLink');
  const privacyLink = document.getElementById('privacyLink');
  const kvkkLink = document.getElementById('kvkkLink');

  // Function to open modal
  function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Function to close modal
  function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable background scrolling
  }

  // Event listeners for opening modals
  if (termsLink) {
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(termsModal);
    });
  }

  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(privacyModal);
    });
  }

  if (kvkkLink) {
    kvkkLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(kvkkModal);
    });
  }

  // Event listeners for closing modals
  if (closeTermsModal) {
    closeTermsModal.addEventListener('click', () => {
      closeModal(termsModal);
    });
  }

  if (closePrivacyModal) {
    closePrivacyModal.addEventListener('click', () => {
      closeModal(privacyModal);
    });
  }

  if (closeKvkkModal) {
    closeKvkkModal.addEventListener('click', () => {
      closeModal(kvkkModal);
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === termsModal) {
      closeModal(termsModal);
    }
    if (e.target === privacyModal) {
      closeModal(privacyModal);
    }
    if (e.target === kvkkModal) {
      closeModal(kvkkModal);
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(termsModal);
      closeModal(privacyModal);
      closeModal(kvkkModal);
    }
  });
});
