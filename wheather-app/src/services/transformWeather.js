import convert from 'convert-units';
import {
    SUN,   
 
 } from './../constants/weathers';


 //creamos una funcion para convertir grados de kelvin a celcius
 const getTemp = kelvin =>{
    //retornamos un numero de solo 2 decimales
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
  }
 //creamos una funcion que recibe un solo parametro, el cual retorna el valor del "weatherState"
 const getWeatherState = weather_data =>{ 
    return SUN;
         
  }
//en esta funcion recibe un solo parametro "weather_data" y recibe loos datos del servidorgetData
 const transformWeather = weather_data=>{
    console.log(weather_data);
  
    //ponemos en constantes los datos que vienen del servidor
        const {temp} = weather_data.main;
        const {humidity} = weather_data.main;

        const {speed} = weather_data.wind;
        const weatherState = getWeatherState(weather_data);
        const temperature = getTemp(temp);
     //creamos una  nueva estructura(constante) con los valores de las constantes 
        const data = {
          humidity,
          temperature,
          weatherState,
          wind:`${speed} m/s`
        }
     //retornamos la nueva estructura
        return data;
  }

  export default transformWeather;