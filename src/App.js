import { useState } from "react";
import Overview from "./components/Overview"
import './App.css';

function App() {
  // const [brewName, setBrewName] = useState('defaultName');
  // const updateDisplay = event => {
  //   setBrewName(cardName);
  //   console.log(cardName);
  // }
  // const [brewery, setBrewery] = useState([]);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="bg-black w-full text-white text-2xl h-[35px] fixed flex items-center justify-center font-bold z-10">Cleveland Brews</h1>
      <Overview />
    </div>
  );
}

export default App;
