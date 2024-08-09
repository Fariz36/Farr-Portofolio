document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const slides = document.getElementsByClassName("img-item");
  const totalImages = slides.length;
  let currentIndex = 0;

  // Initialize the first slide
  slides[currentIndex].classList.add('active');

  const updateSliderPosition = () => {
    for (let i = 0; i < totalImages; i++) {
      slides[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
  };

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateSliderPosition();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateSliderPosition();
  });
});
