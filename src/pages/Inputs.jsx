import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CorouselForm from './CorouselForm';
import Info from './Info';
import ResultForm from './ResultForm';
import DonationForm from './DonationForm';

function Inputs() {
const [color,setColor]=useState("Carousel");



  return (<>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
  <ul className="flex flex-wrap -mb-px">
    <li className="me-2">
      <div onClick={(e)=>{setColor("Carousel")}}
        className={color== "Carousel"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" }
      >
        Carousel
      </div>
    </li>
    <li className="me-2">
      <div
        onClick={(e)=>{setColor("Info")}}
        className={color=="Info"?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" }
        aria-current="page"
      >
        Info
      </div>
    </li>
    <li className="me-2">
      <div
       onClick={(e)=>{setColor("Result")}}
       className={color=="Result" ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" }
      >
        Result
      </div>
    </li>
    <li className="me-2">
      <div
      onClick={(e)=>{setColor("Donations")}}
      className={color=="Donations" ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" }
      >
        Donations
      </div>
    </li>
    <li>
      <div onClick={(e)=>{setColor("Disabled")}}
        className={color=="Disabled" ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" }>
        Disabled
      </div>
    </li>
  </ul>
</div>
{color=="Carousel"&&<CorouselForm/>}
{color=="Info" &&<Info/>}
{color=="Result"&&<ResultForm/>}
{color=="Donations"&&<DonationForm/>}
{/* {color=="Disabled"&} */}
</> )
}

export default Inputs ;