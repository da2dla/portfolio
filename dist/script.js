document.body.classList.add('loading');

const loader = document.querySelector('.loader');
const progress = document.querySelector('.progress');
const heroWord = document.querySelector('.hero-word');
const impossible = document.querySelector('.impossible');
const reveals = document.querySelectorAll('.reveal');
const workRows = document.querySelectorAll('.work-row');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('done');
    document.body.classList.remove('loading');
  }, reducedMotion ? 0 : 650);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

reveals.forEach((element) => revealObserver.observe(element));

const setPreview = (row) => {
  const project = row.closest('.work-grid');
  const projectRows = project.querySelectorAll('.work-row');
  const projectVisuals = project.querySelectorAll('.tech-visual');
  const targetVisual = project.querySelector(`.tech-visual[data-visual="${row.dataset.visual}"]`);
  if (row.classList.contains('active') && targetVisual?.classList.contains('active')) return;
  projectRows.forEach((item) => item.classList.remove('active'));
  row.classList.add('active');
  projectVisuals.forEach((visual) => {
    visual.classList.toggle('active', visual.dataset.visual === row.dataset.visual);
  });
};

workRows.forEach((row) => {
  row.addEventListener('mouseenter', () => setPreview(row));
  row.addEventListener('focusin', () => setPreview(row));
});

const rowObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) setPreview(entry.target);
  });
}, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });

workRows.forEach((row) => rowObserver.observe(row));

let pointerX = 0;
let pointerY = 0;
addEventListener('pointermove', (event) => {
  pointerX = (event.clientX / innerWidth - 0.5) * 10;
  pointerY = (event.clientY / innerHeight - 0.5) * -7;
}, { passive: true });

const render = () => {
  const y = scrollY;
  const heroRatio = Math.min(y / Math.max(innerHeight, 1), 1);
  progress.style.transform = `scaleX(${y / Math.max(document.documentElement.scrollHeight - innerHeight, 1)})`;
  if (!reducedMotion && heroRatio < 1) {
    impossible.style.transform = `translate(-50%, calc(-50% + ${y * 0.08}px)) rotateX(${pointerY}deg) rotateY(${pointerX}deg) rotateZ(${-4 + heroRatio * 13}deg)`;
    heroWord.style.transform = `translate(calc(-50% - ${y * 0.035}px), calc(-50% + ${y * 0.04}px))`;
  }
  requestAnimationFrame(render);
};

requestAnimationFrame(render);

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  menu.textContent = open ? '/MENU' : '/CLOSE';
  nav.classList.toggle('open', !open);
});
