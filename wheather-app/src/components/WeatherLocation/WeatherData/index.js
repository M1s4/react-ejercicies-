import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUD,
    CLOUDY,
     SUN ,
      RAIN,
       SNOW ,
       WINDY ,

} from './../../../constants/weathers';
import './styles.css';
/*
asi tambien se recibe la constante de weatherlocation
const {temperature, weatherState, humidity, wind } =data; 
a esto se le conoce como doble destructuring */
const WeatherData = ({data:{temperature, weatherState, humidity, wind }}) => ( 

  <div className="weatherDataCont">
        <WeatherTemperature 
          temperature ={temperature}
          weatherState={weatherState}>
         </WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
    
  );

  WeatherData.propTypes = {
    data:PropTypes.shape(
      {temperature:PropTypes.number.isRequired,
      weatherState:PropTypes.string.isRequired,
      humidity:PropTypes.number.isRequired,
      wind:PropTypes.string.isRequired,}
    )
  };
  
  export default WeatherData;