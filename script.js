// Dynamic copyright year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Slideshow - create wrapper for continuous scroll
  const slideshowContainer = document.querySelector('.slideshow-container');
  const slides = document.querySelectorAll('.slide');
  
  if (slides.length > 0 && slideshowContainer) {
    const wrapper = document.createElement('div');
    wrapper.className = 'slideshow-wrapper';
    
    slides.forEach(slide => {
      wrapper.appendChild(slide);
    });
    
    slideshowContainer.appendChild(wrapper);
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

// Solution section slideshow navigation
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.solution-slide');
  const prevBtn = document.querySelector('.solution-nav-btn.prev');
  const nextBtn = document.querySelector('.solution-nav-btn.next');
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  }
});
