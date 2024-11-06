class ProjectCalculator {
    constructor() {
        // Initialize base rates for different project types
        this.baseRates = {
            'new-home': 2500,
            'renovation': 1800,
            'extension': 2000
        };

        // Quality level multipliers
        this.qualityMultipliers = {
            'standard': 1,
            'premium': 1.3,
            'luxury': 1.6
        };

        // Additional feature costs
        this.featureCosts = {
            // Energy & Sustainability
            'solar': 25000,
            'battery': 15000,
            'smart-home': 20000,
            'ev-charger': 3000,
            'rainwater': 8000,
            'insulation': 12000,

            // Outdoor Features
            'pool': 50000,
            'outdoor-kitchen': 15000,
            'landscaping': 20000,
            'deck': 30000,
            'pergola': 10000,

            // Interior Features
            'home-theater': 25000,
            'smart-appliances': 20000,
            'home-elevator': 45000,
            'security-system': 8000,
            'wine-cellar': 35000,

            // Luxury Additions
            'sauna': 15000,
            'gym': 20000,
            'bar': 12000
        };

        this.addStyles();
        this.initializeEventListeners();
    }

    addStyles() {
        const styles = `
            .feature-btn {
                transition: all 0.3s ease;
                background: white;
                border: 1px solid #e2e8f0;
                cursor: pointer;
            }

            .feature-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .feature-btn.selected {
                background-color: rgba(230, 126, 34, 0.1);
                border-color: #e67e22;
                transform: scale(0.98);
            }

            .project-type-btn.selected,
            .quality-btn.selected {
                background-color: #e67e22;
                color: white;
                border-color: #e67e22;
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    initializeEventListeners() {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Project type buttons
        document.querySelectorAll('.project-type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.project-type-btn').forEach(b => 
                    b.classList.remove('selected'));
                btn.classList.add('selected');
                this.calculateCost();
            });
        });

        // Quality buttons
        document.querySelectorAll('.quality-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.quality-btn').forEach(b => 
                    b.classList.remove('selected'));
                btn.classList.add('selected');
                this.calculateCost();
            });
        });

        // Feature buttons
        document.querySelectorAll('.feature-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('selected');
                this.calculateCost();
                console.log('Feature clicked:', btn.dataset.feature); // Debug log
            });
        });

        // Square meters input and slider
        const slider = document.getElementById('square-meters-slider');
        const input = document.getElementById('square-meters');
        
        if (slider && input) {
            slider.addEventListener('input', (e) => {
                input.value = e.target.value;
                this.calculateCost();
            });

            input.addEventListener('input', (e) => {
                slider.value = e.target.value;
                this.calculateCost();
            });
        }
    }

    calculateCost() {
        const selectedProjectType = document.querySelector('.project-type-btn.selected')?.dataset.type;
        const squareMeters = parseFloat(document.getElementById('square-meters')?.value) || 0;
        const selectedQuality = document.querySelector('.quality-btn.selected')?.dataset.quality;

        if (!selectedProjectType || !squareMeters || !selectedQuality) return;

        // Calculate base cost
        const baseCost = this.baseRates[selectedProjectType] * squareMeters;

        // Calculate quality adjustment
        const qualityAdjustment = baseCost * (this.qualityMultipliers[selectedQuality] - 1);

        // Calculate features cost with debug logging
        const selectedFeatures = document.querySelectorAll('.feature-btn.selected');
        console.log('Selected features:', Array.from(selectedFeatures).map(f => f.dataset.feature)); // Debug log

        const featuresCost = Array.from(selectedFeatures)
            .reduce((total, btn) => {
                const featureCost = this.featureCosts[btn.dataset.feature] || 0;
                console.log('Feature:', btn.dataset.feature, 'Cost:', featureCost); // Debug log
                return total + featureCost;
            }, 0);

        // Calculate total
        const totalCost = baseCost + qualityAdjustment + featuresCost;

        // Debug log
        console.log({
            baseCost,
            qualityAdjustment,
            featuresCost,
            totalCost
        });

        this.updateDisplay(baseCost, qualityAdjustment, featuresCost, totalCost);
    }

    updateDisplay(baseCost, qualityAdjustment, featuresCost, totalCost) {
        // Update cost breakdown
        document.getElementById('base-cost').textContent = `$${baseCost.toLocaleString()}`;
        document.getElementById('quality-cost').textContent = `$${qualityAdjustment.toLocaleString()}`;
        document.getElementById('features-cost').textContent = `$${featuresCost.toLocaleString()}`;
        
        // Animate total cost
        this.animateValue('total-cost', totalCost);

        // Update progress circle
        const progressCircle = document.getElementById('progress-circle');
        if (progressCircle) {
            const maxCost = 1000000; // Example maximum cost
            const progressPercentage = (totalCost / maxCost) * 360;
            progressCircle.style.transform = `rotate(${progressPercentage}deg)`;
        }
    }

    animateValue(elementId, endValue) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const startValue = parseInt(element.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        const duration = 500;
        const startTime = performance.now();

        const updateValue = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = Math.floor(startValue + (endValue - startValue) * progress);
            element.textContent = `$${current.toLocaleString()}`;

            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };

        requestAnimationFrame(updateValue);
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCalculator();
}); 