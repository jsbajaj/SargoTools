document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Close menu when a link is clicked (for better UX)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    // Scroll-Triggered Animations
    const sections = document.querySelectorAll('.about-us-section, .values-section, .value-card, .purpose-section, .contact-section, .contact-details-container, .map-box');

    const revealOnScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            if (sectionTop < scrollPosition - 100) {
                section.classList.add('visible'); // Use a CSS class for visibility
            }
        });
    };

    // Set initial opacity and transform using CSS
    sections.forEach(section => {
        section.classList.add('hidden'); // Add a CSS class for initial hidden state
    });

    // Optimize scroll event with a debounce function
    let scrollTimeout;
    const optimizedScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            revealOnScroll();
        }, 50); // Adjust debounce delay as needed
    };

    window.addEventListener('scroll', optimizedScroll);
    revealOnScroll(); // Trigger on initial load
});
