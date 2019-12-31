import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
   <div>
       <WeatherLocation city="Bogota,col"> </WeatherLocation>
       <WeatherLocation city="Buenos aires,arg"> </WeatherLocation>
       <WeatherLocation city="Jalisco,mex"> </WeatherLocation>
       

   </div>
);

export default LocationList;