const progress = document.querySelector('.progress');
const reveals = document.querySelectorAll('.reveal');
const processSteps = document.querySelectorAll('.process-steps article');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

reveals.forEach((element) => revealObserver.observe(element));

const processObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    processSteps.forEach((step) => step.classList.remove('active'));
    entry.target.classList.add('active');
  });
}, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });

processSteps.forEach((step) => processObserver.observe(step));

const updateProgress = () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
};

updateProgress();
addEventListener('scroll', updateProgress, { passive: true });
