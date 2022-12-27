import { useState } from "react";
import Overview from "./components/Overview"
import Largedisplay from "../src/components/Largedisplay"
import './App.css';

function App({cardName}) {
  // const [brewName, setBrewName] = useState('defaultName');
  // const updateDisplay = event => {
  //   setBrewName(cardName);
  //   console.log(cardName);
  // }
  // const [brewery, setBrewery] = useState([]);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="bg-black w-full text-white text-2xl h-[35px] fixed flex items-center justify-center font-bold z-10">Cleveland Brews</h1>
      <div className="flex flex-col items-center lg:items-start lg:flex-row mt-4 lg:ml-[380px]">
        <Largedisplay/>
        <Overview />
      </div>
    </div>
  );
}

export default App;
