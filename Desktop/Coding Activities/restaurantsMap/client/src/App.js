import './App.css';
import RestaurantsMap from './components/RestaurantsMap';
import React, { useEffect, useState } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();  
}, []);

  // GET all restaurants details (including coordinates) and save it to restaurants state
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
    <div className="AppContainer">
      <h1> My Favorite Restaurants </h1>
      <RestaurantsMap restaurants={restaurants}/>
      <div className='footer'>
        <p> Map project by Lucie Baborová  </p>
      </div>
    </div>
  );
}

export default App;
