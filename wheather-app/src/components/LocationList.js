import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

//creamos una funcion que mapea todos los valores del array y los pone en "cities"
const strToComponents = cities =>(
    /*Se utiliza una key para poder refrescar por separado cada componente, 
    en este caso usamos "city" como key ya que el nombre no se repite */
cities.map(city=><WeatherLocation key={city} city={city}></WeatherLocation>)
);

const LocationList = ({cities}) =>(
//mandamos a llamar a la funcion "srtToComponent" que va a devolver de un array 
//todos los componentes que se van a mostrar con su respectiva ciudad
<div>
        
        {strToComponents(cities)}
    </div>
);

LocationList.propTypes={
     cities:PropTypes.array.isRequired,
};

export default LocationList;