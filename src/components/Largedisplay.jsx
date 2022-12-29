
import * as React from 'react';
import SimpleMap from './SimpleMap'
import phone from "../assets/phone.png"

export default function LargeDisplay({brewery}) {
    const {
        name: displayName,
        type: displayType,
        street: displayStreet,
        city: displayCity,
        coordinates: displayCoords,
        state: displayState,
        postal_code: displayPostal_code,
        url: displayWebsite,
        phone_number: displayNumber,
    } = brewery;
    
    // if (Object.keys(brewery).length === 0) return 'Select Brewery.';

    return (
        // <div className='bg-slate-50 flex p-4 m-4 lg:w-[500px] h-[350px] justify-around items-center shadow-md top-[0px] lg:top-[90px] lg:mt-[35px] fixed lg:left-[150px]'>
        <div className='w-full mt-7 bg-slate-50 flex p-4 m-4 lg:w-[750px] lg:h-[500px] justify-around items-center shadow-md top-[0px] lg:top-[90px] lg:mt-[35px] fixed lg:left-0 lg:flex-col-reverse lg:gap-y-5'>
             <div className='flex flex-col w-2/4'>
                <h3><strong>{displayName}</strong></h3>
                <div className="bg-gray-200 text-gray-400 font-bold text-sm rounded w-max p-0.5">{displayType}</div>
                <div>{displayStreet}</div>
                <div>{displayCity} {displayState}, {displayPostal_code}</div>
                {displayWebsite.length > 4 && <a href={displayWebsite} target="_blank" rel="noreferrer noopener" className="text-blue-600 w-max">Website</a>}
                {displayNumber.length > 4 &&
                    <span className="flex gap-x-1.5 items-center">
                        <img src={phone} className="h-[16px]"/><div href={`tel:${displayNumber}`} className="text-s">{displayNumber.substring(0,3)+ "-" + displayNumber.substring(3,6)+ "-"+displayNumber.substring(6,10)}</div>
                    </span> 
                }
            </div>
            <SimpleMap brewery={ brewery }/>
            {/* <SimpleMap coords={ brewery }/> */}
        </div>
    );
}