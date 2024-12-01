document.addEventListener('DOMContentLoaded', function() {
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

    const form = document.getElementById('get-in-touch-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const firstName = form.querySelector('input[type="text"]').value;
            const lastName = form.querySelectorAll('input[type="text"]')[1].value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const projectType = form.querySelector('select').value;
            const message = form.querySelector('textarea').value;

            // Validation
            if (!firstName || !lastName || !email || !phone || !message) {
                notyf.error('Please fill in all required fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                notyf.error('Please enter a valid email address');
                return;
            }

            // Phone validation (basic Australian format)
            const phoneRegex = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/;
            if (!phoneRegex.test(phone)) {
                notyf.error('Please enter a valid Australian phone number');
                return;
            }

            // If all validation passes
            // Here you would typically send the form data to your server
            notyf.success('Thank you for your message. We will get back to you soon!');
            form.reset();
        });
    }
}); 