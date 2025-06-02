
// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Scroll Animations
function checkScroll() {
    const elements = document.querySelectorAll('.about-text, .about-image, .room-card, .amenity-card, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Hero Content Animation
const heroContent = document.querySelector('.hero-content');
setTimeout(() => {
    heroContent.classList.remove('hidden');
}, 500);

// Modal Handling
const feedbackBtn = document.getElementById('feedback-btn');
const feedbackModal = document.getElementById('feedbackModal');
const closeModal = document.querySelector('.close-modal');

feedbackBtn.addEventListener('click', function(e) {
    e.preventDefault();
    feedbackModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function() {
    feedbackModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e) {
    if (e.target === feedbackModal) {
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form Submissions
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your feedback! We appreciate your input.');
    this.reset();
    feedbackModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});
