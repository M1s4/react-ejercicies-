import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

/* se crea constante para recibir los valores de las temperaturas y mandarlas a la funcion weathericon */
const icons ={
 [CLOUD]:"cloud",
  [SUN]:"day-sunny",
  [RAIN]:"rain",
  [SNOW]:"snow",
  [THUNDER]:"day-thunderstore",
  [DRIZZLE]:"day-showers",

};  

/*creamos una constante con una funcion flecha que maneja el control del icono a mostrar segun la temperatura */
const getWeatherIcon = weatherState =>{
/*constante que contiene el json de los dias en la constante */
  const icon = icons[weatherState]

  if (icon)
  return <WeatherIcons className="wicon" name={icon} size="2x"></WeatherIcons>;
 /*si viene vacio el valor de icon se retorna por defecto el "day-sunny" */
  else
  return <WeatherIcons className="wicon" name={"day-sunny"} size="2x"></WeatherIcons>;

}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
    
      {
        getWeatherIcon(weatherState)
      }
      <span className="temperature">{`${temperature} `}</span>
      <span className="temperatureType">{`Cº`}</span>


    </div>
    
  );

  WeatherTemperature.propTypes={
    temperature : PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
  };
  
  export default WeatherTemperature;