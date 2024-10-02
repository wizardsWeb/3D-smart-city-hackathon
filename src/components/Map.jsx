import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const markers = [
  {
    id: 1,
    title: 'Ongoing Roadwork',
    description: 'Main street is undergoing maintenance work.',
    position: [18.987278,  72.835319],
  },
  {
    id: 2,
    title: 'Community Festival',
    description: 'Join the local festival on October 5th at the town square.',
    position: [51.51, -0.1],
  },
  {
    id: 3,
    title: 'Broken Traffic Light',
    description: 'Reported issue: Traffic light is malfunctioning at 3rd Ave.',
    position: [51.49, -0.08],
  },
];

// Custom icon if needed
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [38, 38],
});


function Map() {
  return (
    <MapContainer center={[ 18.987278, 72.835319]} zoom={13} style={{ height: '70vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>
            <strong>{marker.title}</strong>
            <p>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
