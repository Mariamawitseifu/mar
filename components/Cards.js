"use client"
import Image from "next/image";
import Droga from "/public/image/Droga.jpg";
import somaliland from "/public/image/somaliland.jpg";
import physio from "/public/image/physio.jpg"; 
import ema from "/public/image/ema.jpg";
import trust from "/public/image/trust.jpg";
import chain from "/public/image/chain.jpg";
import chainpharma from "/public/image/chainpharma.jpg";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Socalmedia from "@/app/blogs/page.js";
import chainpharmacy from "@/app/chainpharmacy/page";
import drogapharma from "@/app/drogapharma/page";
import trustethio from "@/app/trustethio/page";
import drogapysio from "@/app/pyshio/page";
import drogasomaliland from "@/app/drogasomaliland/page";
import drogarwanda from "@/app/drogarwanda/page";
import { useState } from "react";



export default function Cards() {

  const router = useRouter();

  const handleClick = () => {
    router.push('/blogs');
  };

  const router1 = useRouter();

  const handleClick1 = () => {
    router.push('/chainpharmacy');
  };

  const router2 = useRouter();

  const handleClick2 = () => {
    router.push('/drogapharma');
  };

  const router3 = useRouter();

  const handleClick3 = () => {
    router.push('/emaethiopia');
  };

  const router4 = useRouter();

  const handleClick4 = () => {
    router.push('/trustethio');
  };

  const router5 = useRouter();

  const handleClick5 = () => {
    router.push('/drogapysio');
  };
  const router6= useRouter();
  const handleClick6 = () => {
    router.push('/drogasomaliland');
  };

  const router7 = useRouter();

  const handleClick7 = () => {
    router.push('/drogarwanda');
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideTo = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };


  return (
    <>
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
    
<div className="grid grid-cols-1 md:grid-cols-8 gap-y-8 gap-x-4">
  <div>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="0" onClick={handleClick}>
  <Image className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Group CEO</p>
</button>
</div>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="1" onClick={handleClick2}>
  <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-80 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Pharma</p>
</button>

<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="2" onClick={handleClick3}>

  <Image className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-70 py-4 font-medium px-3 bottom-0 left-0 w-full">Ema Ethiopia</p>
</button>

<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="3"  onClick={handleClick4}>
  <Image className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Trust Ethiopharma</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="4" onClick={handleClick5}>
  <Image className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-1 font-medium px-3 bottom-0 left-0 w-full">Droga pyshiotherapy</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="5" onClick={handleClick1}>
  <Image className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-1 font-medium px-3 bottom-0 left-0 w-full">Droga Chain Pharmacy</p>
</button>
<button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="6" onClick={handleClick6}>
  <Image className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-60 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Somaliland</p>
</button>
<button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110"  data-carousel-slide-to="7" onClick={handleClick7}>
  <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  <p className="absolute bg-dro_gray bg-opacity-80 py-4 font-medium px-3 bottom-0 left-0 w-full">Droga Rwanda</p>
</button>
      </div>
      </div>
    </>
  );
}