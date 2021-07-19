
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import CoOrdinates from './data';

import WeatherDropdown from './components/weather-dropdown/weather-dropdown.component';
import {ReactComponent as Logo} from './assets/Simple-Cloud-Icon.svg';
import './App.css';



class App extends React.Component  {
  constructor(){
    super();

    this.state={
    statCities:CoOrdinates,
    hidden:true,
    flag:true,
    count:CoOrdinates.length
  }
   
  }
 

  updateState=(CoOrdinates,rcd)=>{
  
    window.sessionStorage.setItem("cities",
     JSON.stringify( JSON.parse(window.sessionStorage.getItem("cities"))?
       [CoOrdinates,...JSON.parse(
    window.sessionStorage.getItem('cities'))]:[CoOrdinates,...this.state.statCities]));
   
    console.log([CoOrdinates,...this.state.statCities])
    console.log(JSON.parse(window.sessionStorage.getItem("cities")));

  
    this.setState({hidden:!this.state.hidden});
    this.setState({count:rcd});

  }


  handleChange=event=>{
    this.setState({hidden:!this.state.hidden});
  }

  render(){
    
    const cities=JSON.parse(window.sessionStorage.getItem("cities"));
    console.log(cities);
    return(
      <div>
        <div className="logo-container">
          <Logo onClick={this.handleChange}/>
          {
            this.state.hidden?null:<WeatherDropdown
             count={this.state.count} updateState={this.updateState} />
          }
        </div>
        { cities?<HomePage cities={cities} />:
        <HomePage cities={this.state.statCities}/>}
      </div>)
   
    }
  
  
};


export default App;