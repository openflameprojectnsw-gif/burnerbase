// Open Flame Project - Enhanced Website Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    initMobileNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Fade-in animations on scroll
    initScrollAnimations();
    
    // Enhanced accessibility features
    initAccessibilityFeatures();
});

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
            
            // Update button text for screen readers
            navToggle.setAttribute('aria-label', 
                isExpanded ? 'Close navigation menu' : 'Open navigation menu'
            );
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open navigation menu');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open navigation menu');
                navToggle.focus();
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Account for sticky navbar height
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus the target element for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation for grid items
                const gridItems = entry.target.querySelectorAll('.value-card, .stat-card, .timeline-item');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        observer.observe(section);
        
        // Set initial state for grid items
        const gridItems = section.querySelectorAll('.value-card, .stat-card, .timeline-item');
        gridItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
        });
    });
}

// Accessibility Features
function initAccessibilityFeatures() {
    // Add keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.value-card, .stat-card, .info-box');
    interactiveCards.forEach(card => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        // Add keyboard interaction
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Trigger any click handlers or animations
                this.style.transform = 'translateY(-4px)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });
    
    // Enhance button accessibility
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Add loading state capability
        button.addEventListener('click', function() {
            if (this.href && this.href.includes('register.html')) {
                this.style.opacity = '0.8';
                this.innerHTML = 'Loading...';
                
                // Reset after navigation (in case of back button)
                setTimeout(() => {
                    this.style.opacity = '';
                    this.innerHTML = 'Create Your Profile';
                }, 2000);
            }
        });
    });
    
    // Add skip links for better navigation
    addSkipLinks();
    
    // Improve form accessibility
    enhanceFormAccessibility();
}

// Add Skip Links
function addSkipLinks() {
    const mainContent = document.getElementById('main-content');
    if (mainContent && !document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
}

// Enhance Form Accessibility
function enhanceFormAccessibility() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Add required field indicators
            if (input.hasAttribute('required')) {
                const label = form.querySelector(`label[for="${input.id}"]`);
                if (label && !label.textContent.includes('*')) {
                    label.innerHTML += ' <span style="color: var(--error-red);">*</span>';
                }
            }
            
            // Add error handling
            input.addEventListener('invalid', function() {
                this.style.borderColor = 'var(--error-red)';
                this.setAttribute('aria-invalid', 'true');
            });
            
            input.addEventListener('input', function() {
                if (this.validity.valid) {
                    this.style.borderColor = '';
                    this.removeAttribute('aria-invalid');
                }
            });
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle any scroll-based functionality here
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Handle reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Non-critical error:', e.message);
    // Continue execution without breaking the user experience
});

// Service worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register service worker for offline functionality (optional)
        // navigator.serviceWorker.register('/sw.js');
    });
}

