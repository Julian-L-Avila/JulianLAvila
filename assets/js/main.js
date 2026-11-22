// ==========================================================================
// Julian L. Avila-Martinez — Researcher & Scientific Computing Website
// Bilingual Toggle (EN / ES) + Theme Toggle (Light/Dark) + Academic/Industry Lens
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const langBtn = document.getElementById('lang-toggle');
  const themeBtn = document.getElementById('theme-toggle');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lensBtns = document.querySelectorAll('.lens-btn');
  const lensPanels = document.querySelectorAll('.lens-panel');
  const searchInput = document.getElementById('project-search');
  const projectCards = document.querySelectorAll('.project-card');

  // 1. Language state (default: 'en')
  let currentLang = localStorage.getItem('jla_lang') || 'en';
  const applyLang = (lang) => {
    htmlEl.setAttribute('data-lang', lang);
    htmlEl.setAttribute('lang', lang);
    if (langBtn) {
      const label = langBtn.querySelector('#lang-label');
      if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
    }
    if (searchInput) {
      searchInput.placeholder = lang === 'en'
        ? 'Search projects, methods, languages (e.g. Dirac, Fortran, PINN, FFT)...'
        : 'Buscar proyectos, métodos, lenguajes (ej. Dirac, Fortran, PINN, FFT)...';
    }
    localStorage.setItem('jla_lang', lang);
  };
  applyLang(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyLang(currentLang);
    });
  }

  // 2. Theme state (default: 'light' to match Metropolis slide background=light)
  let currentTheme = localStorage.getItem('jla_theme') || 'light';
  const applyTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    if (themeBtn) {
      const icon = themeBtn.querySelector('#theme-icon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('jla_theme', theme);
  };
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // 3. Project category filtering & search
  let activeCategory = 'all';
  let activeLens = 'all';
  let searchQuery = '';

  const filterProjects = () => {
    projectCards.forEach((card) => {
      const cat = card.getAttribute('data-category') || '';
      const lens = card.getAttribute('data-lens') || 'academic industry';
      const text = card.textContent.toLowerCase();
      const matchesCat = activeCategory === 'all' || cat.includes(activeCategory);
      const matchesLens = activeLens === 'all' || lens.includes(activeLens);
      const matchesSearch = !searchQuery || text.includes(searchQuery);
      card.style.display = matchesCat && matchesLens && matchesSearch ? 'flex' : 'none';
    });
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterProjects();
    });
  });

  // 4. Profile View Switcher (Integrated / Academic & Research / Computational & Industry)
  lensBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      lensBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const targetLens = btn.getAttribute('data-lens-target') || 'all';
      activeLens = targetLens;

      lensPanels.forEach((panel) => {
        const panelType = panel.getAttribute('data-lens-panel');
        if (targetLens === 'all' || panelType === targetLens) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });

      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterProjects();
    });
  }
});
