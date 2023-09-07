import Image from "next/image";
import Droga from "/public/image/Droga.jpg";
import somaliland from "/public/image/somaliland.jpg";
import physio from "/public/image/physio.jpg"; 
import ema from "/public/image/ema.jpg";
import trust from "/public/image/trust.jpg";
import chain from "/public/image/chain.jpg";

export default function Cards() {
  return (
    <>
    <div className="flex flex-row">
      <div className=" relative w-full object-cover flex flex-col">
        <Image
          src="/image/henok.jpg"
          alt="cards"
          width={115}
          height={80}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 py-4 transition duration-300 ease-in-out hover:scale-110 font-medium px-3 bottom-0 left-0 w-50">Group CEO</p>
      </div>

          <div className=" relative w-full object-cover flex flex-col">
      <div className="relative transition duration-300 ease-in-out hover:scale-110">
        <Image
          src={Droga}
          alt="droga pharma"
          width={140}
          height={130}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium py-3 px-3 bottom-0 left-0 w-50">
          Droga Pharma
        </p>
      </div>
    </div>


      <div className=" relative w-full object-cover flex flex-col"> 
      <div className="relative">
          <Image
        src={ema}
          alt="ema pharma"
          width={150}
          height={165}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium px-4 py-3 bottom-0 left-0 w-60">EMA Ethiopia</p>
      </div>
      </div>
      

      <div className="relative w-full object-cover">
        <div className="relative">
        <Image
    src={trust}
    alt="trust pharma"
    width={150}
    height={150}
  />
  <p className="absolute bg-dro_gray bg-opacity-60 px-2 font-medium py- bottom-0 left-0 w-40">
    Trust Ethiopharma
  </p>
</div>  
        </div>
  

<div className="relative w-full">
  <div className="relative">
      <Image src={physio} alt="physio" width={130} height={150} className="" />
    <div className="absolute inset-0 flex items-end justify-center">
      <p className="absolute bg-dro_gray bg-opacity-60 font-medium px-3 bottom-0 left-0 w-40">Droga pyshiotherapy</p>
    </div>
  </div>
  </div>
  
      <div className="relative w-full object-cover">
        <div className="relative">
           <Image
        src={chain}
          alt="chain"
          width={120}
          height={110}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 px-3 font-medium bottom-0 left-0 w-40">Droga Chain Pharmacy</p>
      </div>
        </div>
       


      <div className="relative w-full object-cover">
        <div className="relative">
          <Image
        src={somaliland}
          alt="somali"
          width={140}
          height={140}
        />
        <p className="absolute bg-dro_gray bg-opacity-60 font-medium px-4 bottom-0 left-0 w-40">Droga Somaliland</p>
      </div>
        </div>
        

        <div className=" relative w-full object-cover flex flex-col">
      <div className="relative">
        <Image
          src={Droga}
          alt="droga rwanda"
          width={120}
          height={122}
        />
        <p className="absolute bg-dro_gray bg-opacity-70 font-medium py-2 bottom-0 left-0 w-60">
          Droga Rwanda
        </p>
      </div>
    </div>
        
      </div>
    </>
  );
}