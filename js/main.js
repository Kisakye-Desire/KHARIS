(function () {
  'use strict';

  const preloader = document.getElementById('preloader');
  const menuToggle = document.querySelector('.header-menu-toggle');
  const navWrap = document.querySelector('.header-nav-wrap');
  const topButton = document.querySelector('.ss-go-top');

  window.addEventListener('load', function () {
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => preloader.remove(), 450);
    }
  });

  if (menuToggle && navWrap) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', function (event) {
      event.preventDefault();
      const isOpen = navWrap.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navWrap.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navWrap.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (topButton) {
    window.addEventListener('scroll', () => {
      topButton.classList.toggle('link-is-visible', window.scrollY > 500);
    }, { passive: true });
  }
})();
