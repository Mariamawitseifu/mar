import Image from "next/image";
import Droga from "/public/image/Droga.jpg";
import somaliland from "/public/image/somaliland.jpg";
import physio from "/public/image/physio.jpg"; 
import ema from "/public/image/ema.jpg";
import trust from "/public/image/trust.jpg";
import chain from "/public/image/chain.jpg";
import chainpharma from "/public/image/chainpharma.jpg";
import Link from "next/link";
import Socalmedia from "@/app/blogs/page.js";


export default function Cards() {
  return (
    <>
    <div className="flex flex-row space-x-6">
      <Link href="/blogs">
    <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Group CEO</p>
</button>
</Link>

<Link href="/blogs">
<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-80 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Pharma</p>
</button>
</Link>

<button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-70 py-4 font-medium px-3 bottom-0 left-0 w-full">Ema Ethiopia</p>
</button>

<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Trust Ethiopharma</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-1 font-medium px-3 bottom-0 left-0 w-full">Droga pyshiotherapy</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-1 font-medium px-3 bottom-0 left-0 w-full">Droga Chain Pharmacy</p>
</button>
<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Somaliland</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-80 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Rwanda</p>
</button>
      {/* <div className=" relative w-full max-w-sm object-cover flex flex-col">
        <div className="relative transition duration-300 ease-in-out hover:scale-110">
           <Image
          src="/image/henok.jpg"
          alt="cards"
          width={120}
          height={90}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 py-4 transition duration-300 ease-in-out hover:scale-110 font-medium px-3 bottom-0 left-0 w-50">Group CEO</p>
      </div>

        </div>
       
          <div className=" relative w-full max-w-sm object-cover flex flex-col">
      <div className="relative transition duration-300 ease-in-out hover:scale-110">
        <Image
          src={Droga}
          alt="droga pharma"
          width={150}
          height={165}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium py-3 px-3 bottom-0 left-0 w-50">
          Droga Pharma
        </p>
      </div>
    </div>


      <div className=" relative w-full max-w-sm object-cover flex flex-col"> 
      <div className="relative transition duration-300 ease-in-out hover:scale-110">
          <Image
        src={ema}
          alt="ema pharma"
          width={150}
          height={165}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium px-3 py-3 bottom-0 left-0 w-60">EMA Ethiopia</p>
      </div>
      </div>
      

      <div className="relative w-full max-w-sm flex flex-col object-cover">
        <div className="relative transition duration-300 ease-in-out hover:scale-110">
        <Image
    src={trust}
    alt="trust pharma"
    width={150}
    height={165}
  />
  <p className="absolute bg-dro_gray bg-opacity-60 px-2 font-medium py- bottom-0 left-0 w-40">
    Trust Ethiopharma
  </p>
</div>  
        </div>
  

<div className="relative max-w-sm w-full object-cover flex flex-col">
  <div className="relative transition duration-300 ease-in-out hover:scale-110">
      <Image src={physio} alt="physio" width={130} height={150} className="" />
    <div className="absolute inset-0 flex items-end justify-center">
      <p className="absolute bg-dro_gray bg-opacity-60 font-medium px-3 bottom-0 left-0 w-40">Droga pyshiotherapy</p>
    </div>
  </div>
  </div>
  
      <div className="relative w-full max-w-sm object-cover flex flex-col">
        <div className="relative transition duration-300 ease-in-out hover:scale-110">
           <Image
        src={chainpharma}
          alt="chain"
          width={120}
          height={110}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 px-3 font-medium bottom-0 left-0 w-40">Droga Chain Pharmacy</p>
      </div>
        </div>
       


      <div className="relative w-full max-w-sm object-cover flex flex-col">
        <div className="relative transition duration-300 ease-in-out hover:scale-110">
          <Image
        src={somaliland}
          alt="somali"
          width={140}
          height={140}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 font-medium px-4 bottom-0 left-0 w-40">Droga Somaliland</p>
      </div>
        </div>
        

        <div className=" relative w-full max-w-sm object-cover flex flex-col">
      <div className="relative transition duration-300 ease-in-out hover:scale-110">
        <Image
          src={Droga}
          alt="droga rwanda"
          width={150}
          height={165}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium py-2 bottom-0 left-0 w-60">
          Droga Rwanda
        </p>
      </div>
    </div>
         */}
      </div>
    </>
  );
}