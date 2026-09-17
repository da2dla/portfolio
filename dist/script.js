const progress = document.querySelector('.progress');
const reveals = document.querySelectorAll('.reveal');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

reveals.forEach((element) => revealObserver.observe(element));

const updateProgress = () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
};

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  menu.textContent = open ? '/MENU' : '/CLOSE';
  nav.classList.toggle('open', !open);
});

updateProgress();
addEventListener('scroll', updateProgress, { passive: true });
