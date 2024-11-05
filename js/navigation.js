document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    mobileMenuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Handle mobile menu link clicks
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
}); 