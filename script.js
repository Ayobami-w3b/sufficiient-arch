// Preloader / Welcome Animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainHeader = document.getElementById('main-header');

    // Wait for the load animation to complete, then fade out the preloader
    setTimeout(() => {
        preloader.classList.add('finish');
        // Reveal header after preloader disappears
        mainHeader.classList.remove('header-hidden');
    }, 2000); // 2 seconds delay matching the animation length
});

// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Contact Form Handler & Feedback
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate successful form dispatch
    formMsg.style.color = '#25d366';
    formMsg.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
    
    contactForm.reset();

    // Clear success message after 5 seconds
    setTimeout(() => {
        formMsg.textContent = '';
    }, 5000);
});