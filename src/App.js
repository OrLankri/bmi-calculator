
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
      bmiMeaning:'waiting for values'
    }
  }
  componentDidUpdate(){
    if(this.state.bmi>0&&(this.state.bmiMeaning==='waiting for values')){
      if(this.state.bmi<18.5) this.setState({bmiMeaning:'Underweight'},()=>console.log(this.state.bmiMeaning))
      else if(this.state.bmi>25)this.setState({bmiMeaning:'Overweight'},()=>console.log(this.state.bmiMeaning))
      else this.setState({bmiMeaning:'Normal'},()=>console.log(this.state.bmiMeaning))
    }
  }

 

  render(){

    return (
      <div className='App'>
        <h1>BMI Calculator</h1>
        
          <p>
            Type your height in CM<br></br><br></br>
           <input name="heightInCm" type= 'number' min={100} max={250} placeholder="Height" 
                   onChange={(e)=>{ this.setState({height:parseInt(e.target.value)},()=>{console.log(this.state.height)})
                   this.setState({bmiMeaning:'waiting for values'},()=>console.log(this.state.bmiMeaning))
                   this.setState({bmi:0},()=>console.log(this.state.bmi))}}>
                   </input>
          </p>
          <p>
          Type your weight in KG<br></br><br></br>
          <input name="weightInKg" type= 'number' min={20} max={300} placeholder="Weight" 
          onChange={(e)=>{ this.setState({weight:parseInt(e.target.value)},()=>{console.log(this.state.weight)})
          this.setState({bmiMeaning:'waiting for values'},()=>console.log(this.state.bmiMeaning))
          this.setState({bmi:0},()=>console.log(this.state.bmi))}}></input>
           </p>

           <CalculateBmi handleClick={()=>{this.setState({bmi: (this.state.weight/((this.state.height/100)*(this.state.height/100))).toFixed(2)},()=>console.log(this.state.bmi))}}/>
        <p>Your BMI is {' '+this.state.bmi} and it is {this.state.bmiMeaning}</p>

        

         
        
      </div>
    )
  }
}



export default App;
