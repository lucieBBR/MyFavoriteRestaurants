import './App.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();  
}, []);

  // GET all restaurants
  async function getRestaurants() {
    try {
        let response = await fetch('/restaurants');
        if (response.ok) {
            let restaurants = await response.json();
            setRestaurants(restaurants);
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
}

  return (
    <MapContainer className="RestaurantsMap" 
                  center={[47.373878, 8.545094]} 
                  zoom={5} 
                  scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {
         restaurants.map(r => (
                    <Marker position={Object.values(r.geo)}>
                        <Popup>
                            { r.restaurant_name } <br /> 
                            { r.restaurant_description } <br /> 
                            { `${r.street} ${r.housenum}, ${r.city}, ${r.country}` }
                        </Popup>
                    </Marker>
                ))
            }
    </MapContainer>
  );
}

export default App;
