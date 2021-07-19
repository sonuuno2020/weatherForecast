import React from 'react';
import CoOrdinates from '../../data';

import FormInput from '../form-input/form-input.component';
import './weather-dropdown.styles.scss';

class WeatherDropdown extends React.Component {

  state={
    city:"",
    country:"",
    CoOrdinates : CoOrdinates,
    lat:'',
    lon:'',
    cityNames:[],
   
   
  }


  handleChange=event=>{
    const {name,value}=event.target;
    this.setState({[name]:value})
  }


  handleSubmit=async event=>{
    event.preventDefault();
    
    const {city,country}=this.state;

    fetch(`http://api.geonames.org/searchJSON?username=sonuuno
      &country=${country}&maxRows=500`)
    .then(respone=>respone.json())
    .then(data=>this.setState({cityNames:[...this.state.cityNames,
      ...data.geonames.map(obj=>obj.name)]},()=>{

     console.log(this.state);

     if(!this.state.cityNames.includes(city)){
        alert("please enter correct city name");
        
        return ;
      }
     try{
        fetch(`https://api.openweathermap.org/geo/1.0/direct?
          q=${city}&limit=1&appid=bdfaecf7a8be0de78e5c13f9d56962b9`)
     .then(response=>response.json())
     .then(data=>{
       
       this.setState({lat:data[0].lat});
       this.setState({lon:data[0].lon});
       
       console.log(data[0].lon,data[0].lat);

       let rcd=this.props.count+1;

       const newCoOrdinate={
         id:rcd,
         lat:this.state.lat.toString(),
         lon:this.state.lon.toString(),
         name:this.state.city,
         
       }

      
       this.props.updateState(newCoOrdinate,rcd);
   })
    
      }catch(error){
        console.log(error.message)
      }
    }))

    

}
  render(){
    return <div className='weather-dropdown'>
    <h2>Enter Details</h2>
    <form className="row" onSubmit={this.handleSubmit}>

      <FormInput name="city" 
      label="city" 
      type="text"
      handleChange={this.handleChange} 

      required />


      <FormInput name="country" 
      label="country" 
      type="text" 
      handleChange={this.handleChange}
      required />
      
      <div className="button">
        <button type="submit">ADD TO LIST</button>
        
      </div>
            
    </form>
   
  </div>
  }

};
export default WeatherDropdown;