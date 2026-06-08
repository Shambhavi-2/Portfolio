
document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Active State Navigation Handler on Windows Scroll
     */
    const activeScrollTracking = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Checks if the user scroll viewport is within the section bounds
            if (window.scrollY >= (sectionTop - 200)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Smooth execution capture with passive event for better scroll optimization
    window.addEventListener('scroll', activeScrollTracking, { passive: true });
});