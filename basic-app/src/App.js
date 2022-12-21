import React, {useState, useEffect} from 'react';
import './App.css';
import img from './images/Mahamantra.png';

function App() {
const [counter, setCounter] = useState(0);
const [mala, setMala] = useState(0);

const increment = ()=>{
  setMala(Math.floor(counter/108));
  setCounter(counter +1);
}

const reset = ()=>{
  setCounter(0);
  setMala(0);
}

  return (
    <div className="App">
      <br></br>
      <br></br>
      
    <img src ={img} alt = 'Mantra'  className="image-mantra"/>
    <h1>{counter}</h1>
    <button className="button-counter" onClick = {increment}>Counter ++</button>
    <br></br>
    <br></br>
    <button className="button-reset" onClick = {reset}>Reset</button>
    <h1>Number of mala = {mala}</h1>
    <br></br>
    
     <div> 
      <marquee><h3 className="shape">Hare Krishna Hare Krishna Krishna Krishna Hare Hare <br></br>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          Hare Ram Hare Ram Ram Ram Hare Hare</h3></marquee>

      <h5>Developed by: @beachSideCoder</h5>

     </div>
    
     





        </div>
  );
}

export default App;
