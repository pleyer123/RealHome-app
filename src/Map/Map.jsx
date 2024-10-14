import React, { useCallback, useEffect, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getCoordinates } from './geocoding';

function Map({ properties, openModal }) {
  const location = {
    lat: 37.38605,
    lng: -122.08385,
  };

  const [map, setMap] = useState(null);

  const mapRef = useCallback((mapContainer) => {
    if (!mapContainer) return;

    // If a map already exists, we do not need to create a new one
    if (map) {
      return;
    }

    // Clear the container and create a new Leaflet map instance
    mapContainer.innerHTML = '';

    const leafmap = L.map(mapContainer).setView([location.lat, location.lng], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(leafmap);

    setMap(leafmap);
  }, [map]);

  useEffect(() => {
    if (map) {
      // Clear existing markers if necessary
      const markers = [];

      properties.forEach(async (property) => {
        if (property.city) {
          const coordinates = await getCoordinates(property.city);
          if (coordinates) {
            const marker = L.marker(coordinates, {
              icon: L.icon({
                iconUrl: '/assets/icon-location.svg',
                iconSize: [46, 56],
              }),
            }).addTo(map);

            // Open modal on marker click
            marker.on('click', () => {
              openModal(property);
            });

            // Store marker in an array for potential cleanup
            markers.push(marker);
          }
        }
      });

      // Cleanup function to remove markers if needed (optional)
      return () => {
        markers.forEach(marker => {
          map.removeLayer(marker);
        });
      };
    }
  }, [map, properties, openModal]);

  return (
    <main className="map-container" ref={mapRef}></main>
  );
}

export default Map;
