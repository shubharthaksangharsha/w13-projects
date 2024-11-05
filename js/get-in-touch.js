document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('get-in-touch-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Basic form validation
            let isValid = true;
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                alert('Please fill in all required fields');
                return;
            }

            // Here you would typically send the form data to your server
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Reset form
            form.reset();
            alert('Thank you for your message. We will get back to you soon!');
        });
    }
}); 