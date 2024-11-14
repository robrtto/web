// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

// Function to navigate to the main site
function enterSite() {
    window.location.href = 'main.html';
}

// Function to navigate back to landing page from the main site
function enterBack() {
    window.location.href = 'index.html';
}

// Function to control video behavior and Intersection Observer
window.addEventListener('DOMContentLoaded', () => {
    // Video control logic
    const video = document.getElementById('intro-video');
    if (video) {
        video.play();

        // Pause video at the last frame when it ends
        video.addEventListener('ended', () => {
            video.pause();
            video.currentTime = video.duration; // Ensure it stays at the last frame
            console.log("Video has ended and paused.");
        });
    }

    // Intersection Observer for fade-in effect
    const fadeElements = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                console.log('Element is now visible:', entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(element => observer.observe(element));
});
