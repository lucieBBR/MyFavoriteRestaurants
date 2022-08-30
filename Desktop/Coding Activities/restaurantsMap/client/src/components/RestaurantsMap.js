import React from 'react';
import './RestaurantsMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function RestaurantsMap(props) {
    return (
    <MapContainer className="RestaurantsMap" 
                  center={[47.373878, 8.545094]} 
                  zoom={5} 
                  scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {
         props.restaurants.map(r => (
                    <Marker key={r.restaurant_id} position={Object.values(r.geo)}>
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

export default RestaurantsMap;