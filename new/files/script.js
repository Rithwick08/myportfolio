/* ============================================
   RITHWICK REDDY — PORTFOLIO SCRIPTS
   ============================================ */

/* ── Theme Toggle ── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Load saved theme from localStorage (defaults to 'dark')
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
}

/* ── Scroll Reveal ── */
const reveals  = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach(el => revealObserver.observe(el));

/* ── Active Nav Link on Scroll ── */
const allSections = document.querySelectorAll('section[id], div[id]');
const navLinks    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${current}`;
    link.style.color = isActive ? 'var(--accent)' : '';
  });
});

/* ── Logo Scroll to Top ── */
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
  navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
