/*const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const images = slide.querySelectorAll('img');
    images.forEach((image, j) => {
      if (j === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
});*/
