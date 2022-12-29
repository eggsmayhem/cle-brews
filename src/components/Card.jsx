
import * as React from 'react';

export default function Card({brewery}) {
    const {
        name: cardName,
        type: cardType,
        street: cardStreet,
        city: cardCity,
        coordinates: cardCoords,
        state: cardState,
        postal_code: cardPostal_code,
        url: cardWebsite
    } = brewery;
    console.log(brewery);
    console.log(cardName);

    //set state here with on click function. Uplift state. 
    return (
        <div className='bg-slate-50 p-4 flex flex-col gap-y-1.5'>
            <h2><strong>{cardName ? cardName : 'No Name'}</strong></h2>
            <div className="bg-gray-200 text-gray-400 font-bold text-sm rounded w-max p-0.5">{cardType}</div>
            <div className="address">
                <div>{cardStreet}</div>
                <div>{cardCity}, {cardState}, {cardPostal_code}</div>
            </div>
            {cardWebsite !== "null" && <a href={cardWebsite} target="_blank" rel="noreferrer noopener" onClick={event => event.stopPropagation()} className="text-blue-600">Website</a>}
        </div>
    );
}