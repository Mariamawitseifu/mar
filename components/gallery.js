"use client"
import Droga from "/public/image/Droga.jpg";
import somaliland from "/public/image/somaliland.jpg";
import physio from "/public/image/physio.jpg"; 
import ema from "/public/image/ema.jpg";
import trust from "/public/image/trust.jpg";
import chain from "/public/image/chain.jpg";
import chainpharma from "/public/image/chainpharma.jpg";


export default function Gallery(){
return<>


<div className="flex flex-row space-x-6">
      <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  
    <img className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110 ">
    <img className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
        </div>
</>
}