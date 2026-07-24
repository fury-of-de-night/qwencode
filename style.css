--- script.js (原始)


+++ script.js (修改后)
/**
 * Kem's Bakery - JavaScript
 * Minimal vanilla JS for mobile navigation and contact form handling
 */

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

/**
 * Toggles the mobile navigation menu when hamburger is clicked
 */
function toggleMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');

            // Animate hamburger to X shape (optional enhancement)
            const spans = hamburger.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

/**
 * Handles contact form submission with validation
 * @param {Event} event - The form submit event
 */
function handleContactFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');

    if (!form) return;

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Frontend validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (!message) {
        isValid = false;
        errorMessage += 'Message is required.\n';
    }

    // Show alert if validation fails
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    // If valid, show success message and clear form
    alert('Thank you! Your message has been sent.');
    form.reset();
}

/**
 * Validates email format using regex
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Initializes contact form event listener
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', handleContactFormSubmit);
    }
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all JavaScript functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    toggleMobileNav();
    initContactForm();
});
