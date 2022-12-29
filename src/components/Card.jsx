
import * as React from 'react';

export default function Card({brewery}) {
    const {
        name: cardName,
        type: cardType,
        street: cardStreet,
        city: cardCity,
        state: cardState,
        postal_code: cardPostal_code,
        url: cardWebsite
    } = brewery;
   
    return (
        <div className='bg-slate-50 hover:bg-slate-100 p-4 flex flex-col gap-y-1.5 lg:right-0 lg:items-center lg:text-center'>
            <h2><strong>{cardName ? cardName : 'No Name'}</strong></h2>
            <div className="bg-gray-200 text-gray-400 font-bold text-sm rounded w-max p-0.5">{cardType}</div>
            <div className="address">
                <div>{cardStreet}</div>
                <div>{cardCity}, {cardState}, {cardPostal_code}</div>
            </div>
            {cardWebsite.length > 4 && <a href={cardWebsite} target="_blank" rel="noreferrer noopener" onClick={event => event.stopPropagation()} className="text-blue-600 w-max">Website</a>}
        </div>
    );
}