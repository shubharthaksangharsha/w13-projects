class ProjectTimeline {
    constructor() {
        this.timeline = null;
        this.projectPhases = {
            'new-home': [
                { phase: 'Planning', duration: 30 },
                { phase: 'Design', duration: 45 },
                { phase: 'Permits', duration: 30 },
                { phase: 'Site Preparation', duration: 15 },
                { phase: 'Foundation', duration: 30 },
                { phase: 'Framing', duration: 45 },
                { phase: 'Exterior Work', duration: 30 },
                { phase: 'Interior Work', duration: 60 },
                { phase: 'Finishing', duration: 30 },
                { phase: 'Final Inspection', duration: 15 }
            ],
            // Add other project types...
        };
        this.initializeTimeline();
    }

    initializeTimeline() {
        const container = document.getElementById('timeline');
        const options = {
            height: '600px',
            stack: false,
            showMajorLabels: true,
            showCurrentTime: true,
            zoomable: true,
            horizontalScroll: true,
            verticalScroll: true,
            orientation: 'top'
        };

        this.timeline = new vis.Timeline(container, [], options);
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('generate-timeline').addEventListener('click', () => {
            this.generateTimeline();
        });
    }

    generateTimeline() {
        const projectType = document.getElementById('project-type').value;
        const phases = this.projectPhases[projectType];
        const items = new vis.DataSet();
        
        let startDate = new Date();
        phases.forEach((phase, index) => {
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + phase.duration);

            items.add({
                id: index,
                content: phase.phase,
                start: startDate,
                end: endDate,
                className: `phase-${index}`
            });

            startDate = new Date(endDate);
        });

        this.timeline.setItems(items);
        this.updateMilestones(phases);
    }

    updateMilestones(phases) {
        const milestonesContainer = document.querySelector('.milestone-card ul');
        milestonesContainer.innerHTML = phases.map(phase => `
            <li class="flex items-center">
                <i class="fas fa-check-circle text-secondary mr-2"></i>
                ${phase.phase} (${phase.duration} days)
            </li>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProjectTimeline();
}); 