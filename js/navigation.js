document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    // Toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            
            // Change icon based on menu state
            const icon = mobileMenuButton.querySelector('i');
            if (isMenuOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            
            // Reset icon to bars
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}); 