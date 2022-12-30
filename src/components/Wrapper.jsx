
import * as React from 'react';
// import Card from "./Card";
import LargeDisplay from "./LargeDisplay";
import CardWrapper from './CardWrapper';
import {useEffect, useState} from 'react';
import axios from "axios";

export default function Wrapper() {
    //dummy date to help maintain presentability while the API data is loading, especially important in current API deploy with Render cold start times 

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

    //state to pull in all breweries from API, and to set current brewery for large display
    //loading state for spinner

    const [breweries, setBreweries] = useState([]);
    const [large, setLarge] = useState(defaultBrewery.data);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBreweries = async () => {
            // const breweriesList = await axios.get('http://127.0.0.1:3001/breweries/overview');
            const breweriesList = await axios.get('https://cleveland-brews-api.onrender.com/breweries/overview');
            const breweriesArray = breweriesList.data;
            setBreweries(breweriesArray);
            setIsLoading(false);
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
            <div className='bg-slate-200 flex w-full flex-col items-center gap-y-1 mt-[420px] lg:top-[38px]
            lg:relative lg:overflow-y-scroll landscape:h-screen landscape:overflow-y-scroll lg:h-screen lg:mt-0 landscape:mt-8'>
                <CardWrapper updateDisplay={updateDisplay} breweries={breweries} isLoading={isLoading} />
            </div>
        </div>
    );
}