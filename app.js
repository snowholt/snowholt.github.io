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

  /* ---- Reveal sections as they scroll into view -------------------------- */

  /* Progressive enhancement: the class that hides these elements is only ever
     added from here, so a visitor with JS disabled sees the full page. */
  var wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (wantsMotion && 'IntersectionObserver' in window) {
    root.classList.add('is-animated');

    /* Groups reveal together with a short stagger; the hero is excluded on
       purpose so the first paint is never gated on a transition. */
    var groups = [
      '.section-head', '.section-note', '.record', '.card',
      '.data-sheet', '.two-up > div', '.contact'
    ];

    var targets = [];
    groups.forEach(function (selector) {
      var found = Array.prototype.slice.call(document.querySelectorAll(selector));
      found.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.setProperty('--stagger', Math.min(i, 4));
        targets.push(el);
      });
    });

    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        reveal.unobserve(entry.target);   /* plays once, never on scroll back */
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    targets.forEach(function (el) { reveal.observe(el); });

    /* Anything already on screen at load should not wait for a scroll. */
    requestAnimationFrame(function () {
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
      });
    });
  }

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
