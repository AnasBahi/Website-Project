let currentIndex = 0; // Start at the first slide
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

// Update slide position with smooth transition
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Handle previous slide logic
function prevSlide() {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSlidePosition();
}

// Handle next slide logic
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

