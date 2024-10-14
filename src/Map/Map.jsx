import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = ({ coordinates }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');

    // Check if the map container already has the map initialized
    if (!mapContainer._leaflet_id) { // This check prevents re-initialization
      const map = L.map('map').setView([coordinates.lat, coordinates.lng], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map);
      marker.bindPopup("<b>Property Location</b>").openPopup();

      // Fly to the location after initialization
      map.flyTo([coordinates.lat, coordinates.lng], 16, {
        duration: 2, // Smooth zoom transition over 2 seconds
      });
    }

  }, [coordinates]);

  return (
    <div id="map" style={{ height: "100%", width: "100%" }}></div>
  );
};

export default Map;
