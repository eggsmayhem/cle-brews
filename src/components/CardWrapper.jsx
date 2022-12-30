
import * as React from 'react';
import Card from "./Card";
import Spinner from "./Spinner";

export default function CardWrapper({breweries, updateDisplay, isLoading}) {
    if (isLoading) {
        return (
            <Spinner/>
        );
    }
    else {
        return (
            <>
                <span className="font-bold text-center">Click brewery to view map details:</span>  
                {breweries.map(brewery => {
                    return (
                        <span key={brewery._id} onClick={ (e) => updateDisplay(e, brewery) } className="w-full px-0.5">
                            <Card brewery={brewery} />
                        </span>
                    );   
                })} 
            </>
        );
    }
    
    
}