import * as React from 'react';
import SimpleMap from './SimpleMap';
import phone from "../assets/phone.png";

export default function LargeDisplay({brewery}) {
    const {
        name: displayName,
        type: displayType,
        street: displayStreet,
        city: displayCity,
        state: displayState,
        postal_code: displayPostal_code,
        url: displayWebsite,
        phone_number: displayNumber,
    } = brewery;
    
    return (
        <div className='w-full mt-7 lg:mt-0 bg-slate-50 flex p-4 m-4 lg:w-[560px] lg:h-[700px] items-center gap-x-1.5 shadow-md top-[0px] lg:top-[70px] fixed landscape:relative lg:relative lg:flex-col-reverse lg:gap-y-5'>
             <div className='flex flex-col w-2/4 gap-y-1.5 items-center text-center'>
                <h3><strong>{displayName}</strong></h3>
                <div className="bg-gray-200 text-gray-400 font-bold text-sm rounded w-max p-0.5">{displayType}</div>
                <div>{displayStreet}</div>
                <div>{displayCity} {displayState}, {displayPostal_code}</div>
                {displayWebsite.length > 4 && <a href={displayWebsite} target="_blank" rel="noreferrer noopener" className="text-blue-600 w-max">Website</a>}
                {displayNumber.length > 4 &&
                    <span className="flex gap-x-1.5 items-center font-semibold">
                        <img src={phone} alt="phone icon" className="h-[16px]"/><a href={`tel:${displayNumber}`} className="text-s">{displayNumber.substring(0,3)+ "-" + displayNumber.substring(3,6)+ "-"+displayNumber.substring(6,10)}</a>
                    </span> 
                }
            </div>
            <SimpleMap brewery={ brewery }/>
        </div>
    );
}
