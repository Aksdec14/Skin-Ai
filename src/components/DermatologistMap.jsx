import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet’s marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const StaticMap = () => {
  const position = [28.6139, 77.2090]; // New Delhi, India

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '20px',
  };

  const textStyle = {
    flex: 1,
    maxWidth: '40%',
    padding: '10px',
  };

  const mapStyle = {
    flex: 1,
    maxWidth: '50%',
    height: '500px',
    border: '2px solid #444',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h2>Skin Health Resources in India </h2>
        <p>
          Welcome to SkinCheck – your partner in maintaining healthy skin. New Delhi is home to expert dermatologists, advanced skin care clinics, and a range of services tailored to help you monitor and manage skin conditions.
        </p>
        <p>
          Use the map on the right to find nearby skin care centers, hospitals, and wellness hubs. Our tools and expert advice ensure you have the guidance needed for better skin health and confidence.
        </p>
      </div>
      <MapContainer center={position} zoom={5} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>Dermatology & Skin Care Centers in New Delhi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StaticMap;
