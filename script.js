
    // Function to toggle the navigation menu
    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('open');
    }

    // Function to navigate to the main site
    function enterSite() {
        window.location.href = 'main.html';
    }

    //funciton to navigate back to landing page from main site
    function enterBack() {
        window.location.href = 'index.html';
    }

   // Function to control video behavior
   window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    if (video) {
        // Start playing the video manually
        video.play();

        // Add an event listener to pause when the video ends
        video.addEventListener('ended', () => {
            video.pause();
            video.currentTime = video.duration; // Ensure it stays at the last frame
            console.log("Video has ended and paused.");
        });
    }
});
