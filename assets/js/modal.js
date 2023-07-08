// Get all thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Iterate over each thumbnail
thumbnails.forEach((thumbnail) => {
  // Get the corresponding modal and modal image
  const modal = thumbnail.parentNode.querySelector('.modal');
  const modalImages = Array.from(modal.querySelectorAll('.display-image'));

  // Initialize carousel index
  let carouselIndex = 0;

  // Function to update the modal image source
  const updateModalImage = () => {
    modalImages.forEach((image) => {
      image.style.display = 'none';
    });
    modalImages[carouselIndex].style.display = 'block';
  };

  // Function to go to the next image in the carousel
  const goToNextImage = () => {
    carouselIndex = (carouselIndex + 1) % modalImages.length;
    updateModalImage();
  };

  // Automatically rotate images at an interval
  const intervalId = setInterval(goToNextImage, 3000);

  // Show the modal and start the image rotation on thumbnail click
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    updateModalImage();
    intervalId; // Start the interval
  });

  // Hide the modal and stop the image rotation on modal click
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(intervalId); // Stop the interval
  });
});
