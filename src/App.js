import React, { useState,useEffect } from 'react';
import axios from './axios';
import './App.css';


function App() {
  //data storage
  const [joke, setJoke] = useState([]);

  const loadData = async () => {
  const response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept:"application/json"}})
  console.log(response.data.joke);
  setJoke(response.data.joke);
  };
  useEffect(() => {
  loadData();
}, []);


  return (
    <div className="container">
        <h2 className='title'>The Absolutely Best Dad jokes.</h2>
        <div className="joke">{joke}</div>
        <button className="btn btn-primary" onClick={loadData}>Get Another Joke</button>
      </div>
  )
}
export default App;
