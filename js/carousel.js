// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Set the initial slide index
    let slideIndex = 0;
  
    // Get the carousel slide element
    const slideContainer = document.querySelector('.carousel-slide');
  
    // Get the individual slides
    const slides = slideContainer.getElementsByTagName('img');
  
    // Get the modal element
    const modal = document.getElementById('modal');
  
    // Get the modal image and close button
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.getElementsByClassName('close')[0];
  
    // Function to show the current slide
    function showSlide() {
      // Reset the previous slide
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      // Show the current slide
      slides[slideIndex].style.display = 'block';
    }
  
    // Function to move to the next slide
    function nextSlide() {
      slideIndex++;
  
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      showSlide();
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      slideIndex--;
  
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  
      showSlide();
    }
  
    // Function for autoplay
    let autoplayInterval;
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 2000); // Adjust the interval (in milliseconds) as per your preference
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    // Attach click event listeners to the left and right buttons
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
  
    prevButton.addEventListener('click', function() {
      stopAutoplay();
      prevSlide();
    });
  
    nextButton.addEventListener('click', function() {
      stopAutoplay();
      nextSlide();
    });
  
    // Attach click event listener to each image
    for (let i = 0; i < slides.length; i++) {
      slides[i].addEventListener('click', function() {
        const imageUrl = slides[i].getAttribute('src');
        modalImage.setAttribute('src', imageUrl);
        modal.style.display = 'block';
        stopAutoplay();
      });
    }
  
    // Close the modal when the close button or outside the modal is clicked
    function closeModal() {
      modal.style.display = 'none';
    }
  
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Show the initial slide
    showSlide();
  
    // Start autoplay
    startAutoplay();
  });
  