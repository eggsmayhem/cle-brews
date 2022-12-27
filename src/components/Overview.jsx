
import * as React from 'react';
import Card from "./Card";
// import Largedisplay from "./Largedisplay"
import {useEffect, useState} from 'react';
import axios from "axios";

export default function Overview() {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        const fetchBreweries = async() => {
            const breweriesList = await axios.get('http://127.0.0.1:3001/breweries/overview');
            const breweriesArray = await breweriesList.data;
            console.log(breweriesList);
            setBreweries(breweriesArray);
            console.log(breweriesArray);
        }
        fetchBreweries();
    }, []);

    

    // const cards = breweries.map(brewery =>)

    return (
        <div className='bg-slate-200 flex w-[242px] flex-col items-center gap-y-1 mt-[420px] lg:mt-6 lg:relative lg:left-[100px]'>
            <p>Click brewery to view map details:</p>
            {/* <Largedisplay /> */}
            {breweries.map(brewery => {
                return (
                    <Card key={brewery._id} cardName={brewery?.name} cardType={brewery?.type} cardStreet={brewery?.street} cardCity={brewery?.city} cardState={brewery?.state} cardPostal_code={brewery?.postal_code} cardWebsite={brewery?.url}/>
                )   
            })} 
        </div>
    );
}