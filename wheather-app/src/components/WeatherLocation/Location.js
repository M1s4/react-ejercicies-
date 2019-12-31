import React from 'react';
import PropTypes from 'prop-types';
/*con destructuring podemos tambien escribir
  const Location = (props) => {
*/
const Location =({city})=>(
<div className="locationCont">
  <h1>{city}</h1>
</div>
);
  //destructuring 
  /*tambien puede escribirse
    const {city} = props
      const city = props.city;

  */   
  Location.propTypes = {
    city: PropTypes.string.isRequired,
  };
  export default Location;