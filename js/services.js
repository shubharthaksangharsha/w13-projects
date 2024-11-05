document.addEventListener('DOMContentLoaded', () => {
    // Process Steps Animation
    const processSteps = [
        {
            icon: 'fas fa-comments',
            title: 'Consultation',
            description: 'Initial meeting to discuss your vision and requirements'
        },
        {
            icon: 'fas fa-pencil-ruler',
            title: 'Design',
            description: 'Creating detailed plans and designs'
        },
        {
            icon: 'fas fa-hammer',
            title: 'Construction',
            description: 'Building your dream with precision'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Completion',
            description: 'Final inspection and handover'
        }
    ];

    const processContainer = document.querySelector('.grid-cols-4');
    processSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'text-center relative';
        stepElement.innerHTML = `
            <div class="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-white text-2xl relative z-10">
                <i class="${step.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mt-6 mb-3">${step.title}</h3>
            <p class="text-gray-600">${step.description}</p>
        `;
        processContainer.appendChild(stepElement);
    });

    // Testimonials Slider
    const testimonials = [
        {
            name: 'John Smith',
            role: 'Homeowner',
            image: '../images/testimonial1.jpg',
            text: 'W13 Projects exceeded our expectations. Their attention to detail and commitment to quality is outstanding.'
        },
        // Add more testimonials
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="flex items-center mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" 
                         class="w-16 h-16 rounded-full object-cover">
                    <div class="ml-4">
                        <h4 class="font-bold">${testimonial.name}</h4>
                        <p class="text-gray-600">${testimonial.role}</p>
                    </div>
                </div>
                <p class="text-gray-700">${testimonial.text}</p>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('i').classList.add('animate-bounce');
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('i').classList.remove('animate-bounce');
        });
    });
}); 