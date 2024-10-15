document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  

  //video js


  // Get the video element
const video = document.getElementById('scroll-video');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Check if the video is in view
        if (entry.isIntersecting) {
            video.play(); // Start playing the video
        } else {
            video.pause(); // Pause the video when out of view (optional)
        }
    });
}, {
    threshold: 0.4 // Video must be 50% visible to trigger play
});

// Start observing the video element
observer.observe(video);


