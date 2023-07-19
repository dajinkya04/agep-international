
  /**
   * Initiate portfolio lightbox 
   */
  var portfolioLightbox =GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate glightbox 
   */
  var gLightbox = GLightbox({
    selector: '.glightbox'
  });
// Scroll to specific values

// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('body').scrollIntoView({ 
  behavior: 'smooth' 
});
  

  