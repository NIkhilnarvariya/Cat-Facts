import { useState, useEffect } from 'react'

import Axios from "axios";
import './App.css'

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
    useEffect(() => {
      fetchCatFact();
    }, []);
  


  return (
   <div className="App">
     <button onClick={fetchCatFact}>generate cat facts</button>
     <p>{catFact}</p>
   </div>
  )
}
export default App;