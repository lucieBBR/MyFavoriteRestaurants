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
        url="https://api.mapbox.com/styles/v1/luciebbr/cl7gjuddn001i15p8mip0g9hd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjaWViYnIiLCJhIjoiY2w3Z2pveHB4MDVieTNubzBnYnFmaWlsOSJ9.3lJjKxP4RT-q_Ush43Vf_g"
      />
       {
         props.restaurants.map(r => (
                    <Marker key={r.restaurant_id} position={Object.values(r.geo)}>
                        <Popup>
                            { r.restaurant_name } <br /> 
                            { r.restaurant_description } <br /> 
                            { `${r.street} ${r.housenum}, ${r.city}, ${r.country}` }
                            <img src=""></img>
                        </Popup>
                    </Marker>
                ))
            }
    </MapContainer>
    );
}

export default RestaurantsMap;