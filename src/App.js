import React, { useState,useEffect } from 'react';
import axios from 'axios';


function App() {
  //data storage
  const [data, setData] = useState([]);

  useEffect(() => {
    
  const loadData =async () => {
    const response = await axios.get("https://icanhazdadjoke.com/")
    console.log(response);
    setData(response);
  }
  loadData();
}, []);

  return (
    <div className="container">
        <h3>The absolutly Worst Dad jokes.</h3>
        <div className="joke" id="joke"></div>
        <button className="btn" id="get_joke">Get Another Joke</button>
      </div>
  )
}
export default App;
