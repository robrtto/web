
    // Function to toggle the navigation menu
    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('open');
    }

    // Function to navigate to the main site
    function enterSite() {
        window.location.href = 'main.html';
    }

    // Function to stop the video when it ends
    window.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('intro-video');
        if (video) {
            video.addEventListener('ended', () => {
                video.pause();
            });
        }
    });
