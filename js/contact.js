document.addEventListener('DOMContentLoaded', () => {
    // Initialize Notyf
    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        },
        types: [
            {
                type: 'success',
                background: '#4CAF50',
            },
            {
                type: 'error',
                background: '#ff5b5b',
            }
        ]
    });

    // Form handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const subject = form.querySelector('#subject').value;
            const message = form.querySelector('#message').value;

            if (!name || !email || !subject || !message) {
                notyf.error('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                notyf.error('Please enter a valid email address');
                return;
            }

            // If validation passes, show success message
            // Here you would typically send the form data to your server
            notyf.success('Message sent successfully! We will contact you soon.');
            form.reset();
        });
    }

    // Map styling can be customized through the Google Cloud Console
    // using the map-id parameter in the gmp-map element
}); 