import React, {Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';
const cities = [
  'Buenos Aires. ar',
  'Washington, us',
  'Bogota, col',
  'Ciudad de Mexico, mx',
  'Madrid, es',
  'Lima, pe',
];
class  App extends Component {
  render (){
    return (
      <div className="App">
      
      <LocationList cities = {cities}>
 
      </LocationList>
 
     </div>

    );
  }
}

export default App;
