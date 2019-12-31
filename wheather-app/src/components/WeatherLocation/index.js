/*importamos "Component" para poder hacer class component weatherLocation */
import React, {Component} from 'react';
import { CircularProgress } from '@material-ui/core';
import {PropTypes} from 'prop-types';
import getUrlWeatherCity from './../../services/getUrlWeatherCity';
import transformWeather from './../../services/transformWeather'; 
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';
import {
  SUN,   

} from './../../constants/weathers';



const data ={
  temperature : 5,
  weatherState: SUN, 
  humidity:10, 
  wind :'10m/s',
}

class WeatherLocation extends Component {
/*constructor es una palabra reservada que se usa para iniciar una aplicacion 
agregamos props para poder recibir datos a weatherLocation (por medio de index)
*/
  constructor(props){
    //super() : hace referencia al constructor principal "component" de donde extiende el componente
    super(props);

    const {city} = props;
    //this.state : Es el estado actual de un componente el cual ayuda a que se renderize
    this.state={
        city,
        data:data,
    };
  }

  componentDidMount() {
     console.log ("componentDidMount");
    
     this.handleUpdateClick();
     console.log("aqui ya se imprimio el objeto");
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componenDidUpdate");
  }
  


  handleUpdateClick =() =>{
   const api_weather = getUrlWeatherCity(this.state.city);
    //le concatenamos una funcion que devuelve el parametro "resolve"
    fetch(api_weather).then(resolve =>{
      //le pasamos "resolve" a la funcion ".json()" que devuelve una promesa con los datos en "texto" tipo JSON.
      return resolve.json(); 
    }).then(data =>{
      //creamos una constante donde recibimos los datos de la funcion "getData" y recibimos la constante "data" con la estructura con los valores del servidor
      const newWeather = transformWeather(data);
      //el constructor es el unico que puede acceder al estado del constructor usando "this.state" si se utiliza en algun otro
//lugar se llama con "this.setState();"
    this.setState({
      data:newWeather,
    });
    
    });
    }
  render (){
    const {city,data} = this.state;
    return ( 
    <div className="weatherLocationCont">
       <Location city={city}></Location> 
      
             {data ? 
                <WeatherData data ={data}></WeatherData>  :
                <CircularProgress color="secondary" />
             }
       </div>);
  }
 
};


 WeatherLocation.propTypes = {
   city:PropTypes.string.isRequired, 
 }
export default WeatherLocation;