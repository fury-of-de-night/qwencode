// Mobile Navigation Toggle
function toggleMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

// Contact Form Handling
function handleContactFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    if (!form) return;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (!name) {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (!message) {
        isValid = false;
        errorMessage += 'Message is required.\n';
    }

    if (!isValid) {
        alert(errorMessage);
        return;
    }

    alert('Thank you! Your message has been sent.');
    form.reset();
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleContactFormSubmit);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    toggleMobileNav();
    initContactForm();
});
