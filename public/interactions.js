// Terminal-style micro-interactions
(function() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Add command prompt animation on page load
  const container = document.querySelector('.container');
  if (container && !prefersReducedMotion) {
    container.style.opacity = '0';
    setTimeout(() => {
      container.style.transition = 'opacity 0.4s ease';
      container.style.opacity = '1';
    }, 100);
  }

  // Add hover sound effect simulation (visual feedback)
  const interactiveElements = document.querySelectorAll('a, .thought-card, .skill-item, .nav a');

  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      // Create a temporary glow pulse effect
      const originalBoxShadow = window.getComputedStyle(element).boxShadow;
      element.style.transition = 'box-shadow 0.1s ease';
    });
  });

  // Add typing indicator on thought cards
  const thoughtCards = document.querySelectorAll('.thought-card');
  thoughtCards.forEach((card, index) => {
    if (!prefersReducedMotion) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    }
  });

  // Add terminal-style focus states
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // Add ripple effect on click
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button, .thought-card, .skill-item');
    if (target) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX - target.getBoundingClientRect().left + 'px';
      ripple.style.top = e.clientY - target.getBoundingClientRect().top + 'px';
      target.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    }
  });

  // Smooth scroll with terminal feel
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
