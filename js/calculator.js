class ProjectCalculator {
    constructor() {
        this.baseRates = {
            'new-home': 2500,
            'renovation': 1800,
            'extension': 2000
        };
        this.qualityMultipliers = {
            'Standard': 1,
            'Premium': 1.3,
            'Luxury': 1.6
        };
        this.featuresCost = {
            'Solar Panels': 15000,
            'Smart Home': 25000,
            'Pool': 45000,
            'Landscaping': 20000
        };
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const form = document.getElementById('calculator-form');
        const qualityBtns = document.querySelectorAll('.quality-btn');

        form.addEventListener('submit', (e) => this.handleSubmit(e));
        qualityBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleQualitySelection(btn));
        });

        // Real-time calculation
        form.addEventListener('change', () => this.calculateCost());
    }

    handleQualitySelection(selectedBtn) {
        document.querySelectorAll('.quality-btn').forEach(btn => {
            btn.classList.remove('bg-secondary', 'text-white');
        });
        selectedBtn.classList.add('bg-secondary', 'text-white');
        this.calculateCost();
    }

    calculateCost() {
        const projectType = document.getElementById('project-type').value;
        const squareMeters = parseFloat(document.getElementById('square-meters').value) || 0;
        const selectedQuality = document.querySelector('.quality-btn.bg-secondary')?.textContent.trim() || 'Standard';
        
        // Calculate base cost
        const baseCost = this.baseRates[projectType] * squareMeters;
        
        // Calculate features cost
        const featuresCost = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .reduce((total, checkbox) => total + (this.featuresCost[checkbox.nextElementSibling.textContent.trim()] || 0), 0);
        
        // Apply quality multiplier
        const qualityMultiplier = this.qualityMultipliers[selectedQuality];
        const totalCost = (baseCost * qualityMultiplier) + featuresCost;

        this.updateDisplay(baseCost, featuresCost, totalCost - baseCost - featuresCost, totalCost);
    }

    updateDisplay(baseCost, featuresCost, qualityCost, totalCost) {
        document.getElementById('base-cost').textContent = this.formatCurrency(baseCost);
        document.getElementById('features-cost').textContent = this.formatCurrency(featuresCost);
        document.getElementById('quality-cost').textContent = this.formatCurrency(qualityCost);
        document.getElementById('total-cost').textContent = this.formatCurrency(totalCost);

        // Animate the numbers
        this.animateValue('total-cost', totalCost);
    }

    formatCurrency(value) {
        return `$${Math.round(value).toLocaleString()}`;
    }

    animateValue(elementId, value) {
        const element = document.getElementById(elementId);
        const duration = 1000;
        const start = parseInt(element.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        const end = value;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        let current = start;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = this.formatCurrency(current);
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.calculateCost();
        
        // Show success notification
        const notyf = new Notyf({
            duration: 3000,
            position: { x: 'right', y: 'top' },
        });
        notyf.success('Calculation completed successfully!');
    }
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCalculator();
}); 