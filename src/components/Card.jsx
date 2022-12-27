
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
        <div className='bg-slate-50 p-4'>
            <h2><strong>{cardName ? cardName : 'No Name'}</strong></h2>
            <div>{cardType}</div>
            <div className="address">
                <div>{cardStreet}</div>
                <div>{cardCity}, {cardState}, {cardPostal_code}</div>
            </div>
            <div>{cardCoords}</div>
            {cardWebsite !== "null" && <a href={cardWebsite} target="_blank" rel="noreferrer noopener">Website</a>}
        </div>
    );
}