
import * as React from 'react';

export default function Card({cardName, cardType, cardStreet, cardCity, cardState, cardPostal_code, cardWebsite}) {

    //set state here with on click function. Uplift state. 
    return (
        <div className='bg-slate-50 p-4'>
            <h2><strong>{cardName}</strong></h2>
            <div>{cardType}</div>
            <div className="address">
                <div>{cardStreet}</div>
                <div>{cardCity}, {cardState}, {cardPostal_code}</div>
            </div>
            {cardWebsite !== "null" && <a href={cardWebsite} target="_blank" rel="noreferrer noopener">Website</a>}
        </div>
    );
}