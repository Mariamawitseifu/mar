"use client"
import Image from "next/image"
import ifb from "public/image/ifb.png"
import iedge from "public/image/iedge.png"
import igmail from "public/image/igmail.png"
import instagram from "public/image/instagram.png"
import itwitter from "public/image/itwitter.png"
import iwechat from "public/image/iwechat.png"
import ilinkedin from "public/image/ilinkedin.png"
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export default function Gallery(){
    // const router = useRouter();

    // const handleClick = () => {
    //   router.push('/');
    // };
  
return<>
<div className=" py-8 px-1">

<div>

<div className="flex flex-row space-x-6">
      <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  
    <Image className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110 ">
    <Image className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  </div>

</div>
<div className=" py-10">
<div className="flex flex-row space-x-6">
      <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  
    <Image className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110 ">
    <Image className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <Image className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  </div>
        </div>
        </div>
</>

}