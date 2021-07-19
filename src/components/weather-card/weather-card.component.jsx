import React from 'react';
import ReactWeather from 'react-open-weather';
import  { useOpenWeather } from 'react-open-weather';

import './weather-card.style.scss';

const WeatherCard=({lattitude,longitude,name})=>{
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'bdfaecf7a8be0de78e5c13f9d56962b9',
    lat: lattitude,
    lon: longitude,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

	return(
		<ReactWeather 
			isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={name}
      unitsLabels={{ temperature:'°C', windSpeed: 'Km/h' }}
      showForecast/>

		)
}

export default WeatherCard;