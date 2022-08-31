import React from 'react';
import './RestaurantsMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function RestaurantsMap(props) {
    return (
    <MapContainer className="RestaurantsMap" 
                  center={[41.390205, 2.154007]} 
                  zoom={13} 
                  scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/luciebbr/cl7gjuddn001i15p8mip0g9hd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjaWViYnIiLCJhIjoiY2w3Z2pveHB4MDVieTNubzBnYnFmaWlsOSJ9.3lJjKxP4RT-q_Ush43Vf_g"
      />
       {
         props.restaurants.map(r => (
                    <Marker key={r.restaurant_id} position={Object.values(r.geo)}>
                        <Popup className="PopUp">
                            <div className='grid'>
                              <div>
                                <h2 style={{fontWeight: "bold", fontSize: "16px"}}>{ r.restaurant_name }</h2>
                                <p style={{fontStyle: "italic", fontSize: "10px"}}>{ r.restaurant_description }</p>
                                <p style={{fontSize: "8px"}}>{ `${r.street} ${r.housenum}, ${r.city}, ${r.country}` }</p>
                              </div>
                              <div> 
                                <img src={ r.img }></img>
                              </div>
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
    </MapContainer>
    );
}

export default RestaurantsMap;