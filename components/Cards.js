import Image from "next/image";
import Droga from "/public/image/Droga.jpg";
import somaliland from "/public/image/somaliland.jpg";
import pyshio from "/public/image/pyshio.jpg";
import ema from "/public/image/ema.jpg";
import trust from "/public/image/trust.jpg";

export default function Cards() {
  return (
    <>
    <div className="flex flex-row">
      <div className="  w-full object-cover flex flex-col">
        <Image
          src="/image/henok.jpg"
          alt="cards"
          width={100}
          height={80}
        />
        <p className="absolute  bg-dro_yello w-full px-1 py-16 bottom z-10">Group CEO</p>
      </div>

      <div className=" w-full object-cover flex flex-col">
        <Image
        src={Droga}
          alt="droga pharma"
          width={110}
          height={110}
        />
        <p className="absolute bg- w-full px- py-16 bottom z-10">Droga Pharma</p>
      </div>

      <div className=" w-full object-cover flex flex-col">
        <Image
        src={ema}
          alt="ema pharma"
          width={120}
          height={120}
        />
        <p className="absolute bg-dro_yello w-full px-1 py-14 bottom z-10">EMA Ethiopia</p>
      </div>


      <div className="relative w-full object-cover">
  <Image
    src={trust}
    alt="trust pharma"
    width={125}
    height={130}
  />
  <p className="absolute inset-0 mt-4 flex items-end justify-end text-white bg-dro_ray bg-opacity-50 p-4">
    Trust ethio pharma
  </p>
</div>

<div className="relative w-full">
  <Image src={pyshio} alt="physio" width={130} height={140} className="" />
  <div className="absolute inset-0 flex items-end justify-center">
    <p className="bg-dro_gray bg-opacity-50 text-white font-semibold p-2">Droga pyshiotherapy</p>
  </div>
</div>


      <div className="relative w-full object-cover">
        <Image
        src={Droga}
          alt="chain"
          width={110}
          height={110}
        />
        <p className="absolute inset-0 flex items-end justify-center text-white bg-dro_ray bg-opacity-50">Droga Chain Pharmacy</p>
      </div>


      <div className="relative w-full object-cover">
        <Image
        src={somaliland}
          alt="somali"
          width={120}
          height={120}
        />
        <p className="absolute inset-0 mt-5 flex items-end justify-end text-white bg-dro_ray bg-opacity-50 p-4">Droga Somaliland</p>
      </div>

      <div className=" w-full object-cover flex flex-col">
        <Image
        src={Droga}
          alt="droga rwanda"
          width={110}
          height={110}
        />
        <p className="absolute mb-2 bg- w-full px- py-16 bottom z-10">Droga Rwanda</p>
      </div>
      </div>
    </>
  );
}