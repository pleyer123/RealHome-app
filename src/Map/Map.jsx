import React, { useCallback, useEffect, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet CSS

function Map() {
  const location = {
    lat: 37.38605,
    lng: -122.08385,
  };

  const [map, setMap] = useState(null);

  const mapRef = useCallback((mapContainer) => {
    if (!mapContainer) return;

    // Clear any previous map instances
    mapContainer.innerHTML = '';

    // Initialize the map and set its view
    const leafmap = L.map(mapContainer).setView([location.lat, location.lng], 14);

    // Add tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(leafmap);

    // Set the map state
    setMap(leafmap);
  }, []);

  useEffect(() => {
    if (map) {
      // Set marker on the map
      const marker = L.marker([location.lat, location.lng], {
        icon: L.icon({
          iconUrl: '/assets/icon-location.svg',
          iconSize: [46, 56],
        }),
      }).addTo(map);
    }
  }, [map, location]);

  return (
    <main className="MapContainer" ref={mapRef}>
      {/* Ensure CSS is applied for dimensions */}
    </main>
  );
}

export default Map;
