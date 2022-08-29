import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <MapContainer className="RestaurantsMap" 
                  center={[47.373878, 8.545094]} 
                  zoom={5} 
                  scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
