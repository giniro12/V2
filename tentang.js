// Fade-in effect on scroll
function onScrollFadeIn() {
  const faders = document.querySelectorAll('.fade-in, .gallery img');

  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('load', onScrollFadeIn);
