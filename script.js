// Dynamic copyright year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Slideshow functionality with horizontal sliding
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showNextSlide() {
    // Mark current as prev
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Reset all slides that aren't current or prev
    slides.forEach((slide, index) => {
      if (index !== currentSlide && !slide.classList.contains('active')) {
        slide.classList.remove('prev');
        slide.style.left = '100%';
      }
    });
    
    // Show new slide
    slides[currentSlide].classList.remove('prev');
    slides[currentSlide].classList.add('active');
  }
  
  // Change slide every 6 seconds
  setInterval(showNextSlide, 6000);
});

// Smooth scroll for anchor links (already handled by CSS, but this adds support for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
