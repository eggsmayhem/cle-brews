
import * as React from 'react';
import Card from "./Card";
import LargeDisplay from "./LargeDisplay";
import {useEffect, useState} from 'react';
import axios from "axios";

export default function Wrapper() {
    const defaultBrewery = {
        data: {
            _id: "63a604387c8ae886f07a5ee2",
            city: "Cleveland",
            coordinates: [41.4861772, -81.7051638],
            name: "Bad Tom Smith Brewing",
            phone_number: "null",
            postal_code: "44113-3142",
            state: "Ohio",
            street: "1836 W 25th St",
            type: "brewpub",
            url: "",
        }
    };

    const [breweries, setBreweries] = useState([]);
    const [large, setLarge] = useState(defaultBrewery.data);

    useEffect(() => {
        const fetchBreweries = async () => {
            const breweriesList = await axios.get('http://127.0.0.1:3001/breweries/overview');
            // const breweriesList = await axios.get('https://cleveland-brews-api.onrender.com/breweries/overview');
            const breweriesArray = breweriesList.data;
            setBreweries(breweriesArray);
        }
        fetchBreweries();
    }, []);

    const updateDisplay = (event, brewery) => {
        event.preventDefault();
        setLarge(brewery);
    }

    return (
        <div className="flex flex-col items-center landscape:flex-start landscape:flex-row lg:items-start lg:flex-row lg:justify-center">
            <LargeDisplay brewery={ large }/>
            <div className='bg-slate-200 flex w-full flex-col items-center gap-y-1 mt-[420px] lg:top-[37px]
            lg:relative lg:overflow-y-scroll landscape:h-screen landscape:overflow-y-scroll lg:h-screen lg:top-[47px] lg:mt-0 landscape:mt-8'>
                <span className="font-bold text-center">Click brewery to view map details:</span>  
                {breweries.map(brewery => {
                    return (
                        <span key={brewery._id} onClick={ (e) => updateDisplay(e, brewery) } className="w-full px-0.5">
                            <Card brewery={brewery} />
                        </span>
                    );   
                })} 
            </div>
        </div>
    );
}