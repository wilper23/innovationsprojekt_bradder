// Dynamic copyright year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Slideshow functionality with horizontal sliding
  const slideshowContainer = document.querySelector('.slideshow-container');
  const slides = document.querySelectorAll('.slide');
  
  if (slides.length > 0 && slideshowContainer) {
    // Create wrapper and move slides into it
    const wrapper = document.createElement('div');
    wrapper.className = 'slideshow-wrapper';
    
    slides.forEach(slide => {
      wrapper.appendChild(slide);
    });
    
    slideshowContainer.appendChild(wrapper);
    
    let currentSlide = 0;
    
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      const translateX = -(currentSlide * 33.333);
      wrapper.style.transform = `translateX(${translateX}%)`;
    }
    
    // Change slide every 6 seconds
    setInterval(showNextSlide, 6000);
  }
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
