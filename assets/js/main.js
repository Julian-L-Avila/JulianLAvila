document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  let currentLang = localStorage.getItem('jla_lang') || 'en';
  let currentTheme = localStorage.getItem('jla_theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
    localStorage.setItem('jla_theme', theme);
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-en][data-es]');
    elements.forEach((el) => {
      const text = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
      if (text) {
        el.innerHTML = text;
      }
    });
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'ES' : 'EN';
    }
    localStorage.setItem('jla_lang', lang);

    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  }

  applyTheme(currentTheme);
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyLanguage(currentLang);
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
