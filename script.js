// Animasi scroll masuk
window.addEventListener('scroll', () => {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    heroText.style.transform = 'translateY(0)';
    heroText.style.opacity = '1';
    heroImage.style.transform = 'translateX(0)';
    heroImage.style.opacity = '1';
  }
});

// Efek animasi awal saat load
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');

  heroText.style.transition = 'all 1s ease';
  heroImage.style.transition = 'all 1s ease';

  heroText.style.transform = 'translateY(-50px)';
  heroText.style.opacity = '0';

  heroImage.style.transform = 'translateX(50px)';
  heroImage.style.opacity = '0';

  // Trigger muncul saat DOM siap
  setTimeout(() => {
    heroText.style.transform = 'translateY(0)';
    heroText.style.opacity = '1';

    heroImage.style.transform = 'translateX(0)';
    heroImage.style.opacity = '1';
  }, 300);
});
