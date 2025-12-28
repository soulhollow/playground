// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('is-active');
        
        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', isActive);
        hamburger.setAttribute('aria-label', isActive ? 'Menü schließen' : 'Menü öffnen');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('is-active');
            }
        });
    });

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept');
    const cookieDeclineBtn = document.getElementById('cookie-decline');

    if (cookieBanner) {
        // Check if the user has already made a choice
        const cookieChoice = localStorage.getItem('cookieChoice');
        if (!cookieChoice) {
            cookieBanner.style.display = 'flex';
        }

        // When the user clicks on the accept button
        if (cookieAcceptBtn) {
            cookieAcceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookieChoice', 'accepted');
                cookieBanner.style.display = 'none';
            });
        }

        // When the user clicks on the decline button
        if (cookieDeclineBtn) {
            cookieDeclineBtn.addEventListener('click', () => {
                localStorage.setItem('cookieChoice', 'declined');
                cookieBanner.style.display = 'none';
            });
        }
    }
});
