// Ambil elemen-elemen penting
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-card img');

// Tampilkan modal saat gambar diklik
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Tutup modal saat tombol close diklik
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Tutup modal saat klik di luar gambar
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Animasi fade-in saat gambar masuk viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

// Terapkan observer ke semua gambar galeri
galleryImages.forEach(img => observer.observe(img));
