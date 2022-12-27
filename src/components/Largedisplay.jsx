
import * as React from 'react';
import Simplemap from './SimpleMap'
export default function Largedisplay() {
    return (
        <div className='bg-slate-50 flex p-4 m-4 lg:w-[500px] h-[350px] justify-around items-center shadow-md lg:mt-[35px] fixed lg:left-[30px]'>
             <div className='flex flex-col'>
                <h3><strong>Brewery name</strong></h3>
                <div>brewery type</div>
                <div>123 Fake st</div>
                <div>Cleveland Oh, 1242</div>
                <div>Website</div>
            </div>
            <Simplemap/>
        </div>
    );
}