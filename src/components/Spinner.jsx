import * as React from 'react';
import spinner from '../assets/spinner.gif'
export default function Header() {
    return (
      <div className="lg:w-[500px] flex justify-center">
        <img src={spinner} alt="breweries loading" className="lg:mt-[200px] mt-[90px]"/>
      </div>
    );
}