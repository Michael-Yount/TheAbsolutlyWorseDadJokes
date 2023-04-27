import React, { useState,useEffect } from 'react';
import axios from './axios';
import './App.css';


function App() {
  //data storage
  const [joke, setJoke] = useState([]);
  const [state, setState] = useState(1);

  const API_LINK = "https://icanhazdadjoke.com/";

useEffect (() => {  
  const loadData = async () => {
    const response = await axios.get(`${API_LINK}`, {headers: {Accept:"application/json"}})
    setJoke(response.data.joke);
  }
  loadData();
}, [state]);

  return (
    <div className="container">
        <h2 className='title'>The Absolute Best Dad jokes.</h2>
        <div className="joke">{joke}</div>
        <button className='btn btn-outline-primary' onClick={() => setState(state + 1)}>Get Another Joke</button>
      </div>
  )
}
export default App;
