// Script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js for the home section
    // IMPORTANT: The target class must match the HTML element
    if (document.querySelector('.typing-text')) { // Use '.typing-text' to match the HTML span
        var typed = new Typed('.typing-text', { // Target the correct class
            strings: ['Web Developer', 'UI/UX Designer', 'Figma Expert', 'Data Scientist'], // Updated strings based on CV and HTML
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
});