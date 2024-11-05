class CustomMap {
    constructor() {
        this.map = null;
        this.marker = null;
        this.initMap();
    }

    initMap() {
        const mapStyles = [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            // Add more custom styles...
        ];

        const mapOptions = {
            center: { lat: -34.8367, lng: 138.6933 }, // Para Hills coordinates
            zoom: 15,
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true
        };

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        this.addMarker();
        this.addCustomControls();
    }

    addMarker() {
        const markerIcon = {
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
            fillColor: '#e67e22',
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 2
        };

        this.marker = new google.maps.Marker({
            position: { lat: -34.8367, lng: 138.6933 },
            map: this.map,
            icon: markerIcon,
            animation: google.maps.Animation.DROP,
            title: 'W13 Projects'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">W13 Projects</h3>
                    <p>419 Nelson Road</p>
                    <p>Para Hills, SA</p>
                    <a href="https://maps.google.com/maps?daddr=-34.8367,138.6933" 
                       class="text-secondary hover:underline" target="_blank">
                        Get Directions
                    </a>
                </div>
            `
        });

        this.marker.addListener('click', () => {
            infoWindow.open(this.map, this.marker);
        });
    }

    addCustomControls() {
        // Add custom map controls here
    }
} 