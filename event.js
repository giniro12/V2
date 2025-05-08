function onScrollFadeIn() {
  const cards = document.querySelectorAll('.fade-in');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('load', onScrollFadeIn);