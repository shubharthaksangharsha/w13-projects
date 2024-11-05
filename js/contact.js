document.addEventListener('DOMContentLoaded', () => {
    // Form handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }

    // Map styling can be customized through the Google Cloud Console
    // using the map-id parameter in the gmp-map element
}); 