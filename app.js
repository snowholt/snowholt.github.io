/* =========================================================================
   Nariman Jafari — Portfolio
   Theme toggle + section highlighting. No framework, no build step.
   ========================================================================= */

(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  /* ---- Theme ------------------------------------------------------------ */

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function label() {
    if (!toggle) return;
    var dark = currentTheme() === 'dark';
    toggle.textContent = dark ? 'Day' : 'Night';
    toggle.setAttribute('aria-label', dark ? 'Switch to the light theme' : 'Switch to the dark theme');
  }

  if (toggle) {
    label();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
  }

  /* Follow the system theme until the visitor picks one for themselves. */
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (e) {
    var chosen = null;
    try { chosen = localStorage.getItem('theme'); } catch (err) {}
    if (chosen) return;
    root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    label();
  };
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange);

  /* ---- Mark the section currently in view ------------------------------- */

  var links = Array.prototype.slice.call(
    document.querySelectorAll('.masthead nav a[href^="#"]')
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          var active = a.getAttribute('href') === '#' + entry.target.id;
          a.style.color = active ? 'var(--magenta)' : '';
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
