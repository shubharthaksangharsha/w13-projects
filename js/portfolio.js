const portfolioItems = [
    {
        id: 1,
        title: 'Modern Kitchen Design',
        category: 'Kitchen',
        image: '../images/Kitchen1.jpg',
        description: 'Contemporary kitchen with premium appliances and island bench'
    },
    {
        id: 2,
        title: 'Master Bedroom Suite',
        category: 'Interior',
        image: '../images/bedroom.jpg',
        description: 'Luxurious master bedroom with ensuite'
    },
    // Add more items for all your images
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Render portfolio items
    const renderItems = (items) => {
        grid.innerHTML = items.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-aos="fade-up">
                <a href="${item.image}" data-lightbox="portfolio" data-title="${item.description}">
                    <div class="relative group overflow-hidden rounded-lg">
                        <img src="${item.image}" alt="${item.title}" 
                             class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-white text-center p-4">
                                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                                <p class="text-sm">${item.description}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    };

    // Initial render
    renderItems(portfolioItems);

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-secondary', 'text-white'));
            btn.classList.add('active', 'bg-secondary', 'text-white');
            
            const category = btn.textContent;
            const filteredItems = category === 'All' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === category);
            
            renderItems(filteredItems);
        });
    });
}); 