import React from 'react';
import WeatherCard from '../../components/weather-card/weather-card.component';
import './homepage.style.css';
const HomePage=({cities})=>{
		
    return (

  
      <div className="item">
      	
	      {
	      	cities.length?cities.map(city=>
	      		 <WeatherCard key={city.id} lattitude={city.lat} 
	      		 longitude={city.lon} name={city.name}/>
	      	):<WeatherCard key={cities.id} lattitude={cities.lat} 
	      		 longitude={cities.lon} name={cities.name}/>

	      }
        
      </div>
      )

}

export default HomePage;