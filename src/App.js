
import './App.css';
import React from 'react';
import { CalculateBmi } from './components/calculate-bmi/calculate-bmi.component';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      height: 0,
      weight: 0,
      bmi : 0,
      bmiMeaning:''
    }
  }

 

  render(){

    return (
      <div className='App'>
        <h1>BMI Calculator</h1>
        
          <p>
            Type your height in CM<br></br><br></br>
           <input name="heightInCm" type= 'number' min={100} max={250} placeholder="Height" 
                   onChange={(e)=> this.setState({height:parseInt(e.target.value)},()=>{console.log(this.state.height)})}>
                   </input>
          </p>
          <p>
          Type your weight in KG<br></br><br></br>
          <input name="weightInKg" type= 'number' min={20} max={300} placeholder="Weight" 
          onChange={(e)=> this.setState({weight:parseInt(e.target.value)},()=>{console.log(this.state.weight)})}></input>
           </p>

           <CalculateBmi handleClick={()=>{this.setState({bmi: (this.state.weight/((this.state.height/100)*(this.state.height/100))).toFixed(2)},()=>console.log(this.state.bmi))}}/>
        <p>Your BMI is {' '+this.state.bmi}</p>

         
        
      </div>
    )
  }
}



export default App;
