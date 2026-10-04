// Carousel functions, used in index.html
const carousel = document.querySelector(".poster-carousel");

if (carousel) {
  const slides = Array.from(carousel.querySelectorAll(".poster-carousel-slide"));
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== currentSlide;
    });
  }

  carousel.querySelector("[data-carousel-previous]").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  const slidesContainer = carousel.querySelector(".poster-carousel-slides");
  let timer;

  function startTimer() {
    if (!timer) {
      timer = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    }
  }

  slidesContainer.addEventListener("mouseenter", () => {
    clearInterval(timer);
    timer = null;
  });
  slidesContainer.addEventListener("mouseleave", startTimer);

  showSlide(currentSlide);
  startTimer();
}
