
import * as React from 'react';
import SimpleMap from './SimpleMap'

export default function LargeDisplay({brewery}) {
    const {
        name: displayName,
        type: displayType,
        street: displayStreet,
        city: displayCity,
        coordinates: displayCoords,
        state: displayState,
        postal_code: displayPostal_code,
        url: displayWebsite
    } = brewery;
    
    // if (Object.keys(brewery).length === 0) return 'Select Brewery.';

    return (
        <div className='bg-slate-50 flex p-4 m-4 lg:w-[500px] h-[350px] justify-around items-center shadow-md top-[0px] lg:top-[90px] lg:mt-[35px] fixed lg:left-[30px]'>
             <div className='flex flex-col'>
                <h3><strong>{displayName}</strong></h3>
                <div>{displayType}</div>
                <div>{displayStreet}</div>
                <div>{displayCity} {displayState}, {displayPostal_code}</div>
                <div>{displayWebsite}</div>
            </div>
            <SimpleMap coords={ brewery.coordinates }/>
            {/* <SimpleMap coords={ brewery }/> */}
        </div>
    );
}