// Matrix rain background effect
(function() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return; // Don't run animation if user prefers reduced motion
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-bg';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.05';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  // Matrix characters - binary and symbols
  const chars = '01';
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);

  // Array to track position of each drop
  const drops = Array(columns).fill(1);

  function draw() {
    // Black background with slight transparency for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      // Reset drop to top randomly
      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  // Start animation
  let animationId;
  function animate() {
    draw();
    animationId = setTimeout(() => requestAnimationFrame(animate), 50);
  }

  animate();

  // Handle resize
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / fontSize);
    drops.length = columns;
    drops.fill(1);
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearTimeout(animationId);
  });
})();
