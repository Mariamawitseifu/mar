"use client"
// import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Gallery from "../gallery/page";
import Navbar from "@/components/NavBar";
import Type from "@/components/Type";
import 'tailwindcss/tailwind.css';
import { useState, useEffect ,useRef} from "react";
import Footer from "@/components/Footer";
import Endfooter from "@/components/Endfooter";
import gallerypysio from '../gallerypysio/page';

export default function drogapysio(){
   const router = useRouter();

   const handleClickG = () => {
     router.push('/gallerypysio');
   };
   const [typewriterText, setTypewriterText] = useState('');

   useEffect(() => {
    const text = 'Droga Pyshiotherapy';
    let i = 0;
    let interval = null;
  
    const startTyping = () => {
      interval = setInterval(() => {
        setTypewriterText(prevText => {
          if (i < text.length) {
            return text.slice(0, i + 1);
          } else {
            return prevText.slice(0, -1);
          }
        });
  
        i++;
  
        if (i > text.length * 2) {
          clearInterval(interval);
          setTimeout(() => {
            i = 0;
            startTyping(); // Restart the typewriter effect
          }, 1000); // Delay before restarting the effect (1 second in this example)
        }
      }, 500);
    };
  
    startTyping();
  
    return () => {
      clearInterval(interval);
    };
  }, []);
return<>
<div>
      <div>
   <Navbar/>         
      </div>
      <div className=" py-12 px-52">
<div className="bg-gray-200">
      <h1 className="text-4xl font-bold animate-typewriter">
      <span className=" inset-0 typewriter">{typewriterText}</span>
      </h1>
    </div>
</div>
</div>
<div className="inset-0  flex flex-wrap gap-60 px-40">
      <div  className=" flex flex-row gap-3">
      <div className="w-1/2 py-10 px-4">
   <div className="flex items-center">
     <div className=" flex flex-row"> 
      <div>
       <img 
       src= "/image/www.png"
       height={50} 
       width={50}
       alt="website"/>
<h1 className="">
Website
</h1>     
      </div>
</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/itwitter.png" height={50} width={50}>
</img> 
<h1 className="">
Twitter
</h1>     
      </div>
</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/ifb.png" height={50} width={50}>
</img> 
<h1 className="">
Facebook
</h1>     
      </div>

</div> 
   </div>
<div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/ilinkedin.png" height={50} width={50}>
</img> 
<h1 className="">
LinkedIn
</h1>     
      </div>

</div> 
   </div>
   </div>
   </div>
   <div className="px-">
   <div className="  py-14">
 <a className="underline"> www.desk</a>  
</div>
   <div className="">
 <a className="underline"> www.trustethiopharma.com</a>  
</div>
   <div className=" py-12">
 <a className="underline"> www.trustethiopharma.com</a>  
</div>
   <div className=" py-4">
 <a className="underline"> www.trustethiopharma.com</a>  
</div>
   </div>       
      </div>

<div  className=" flex flex-row px-5 gap-3">
       <div className="w-1/2 py-10 px-4">
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/deskphone.png" height={50} width={50}>
</img> 
<h1 className="">
DeskPhone
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/telegram.png" height={50} width={50}>
</img> 
<h1 className="">
Telegram
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/whatsapp.png" height={50} width={50}>
</img> 
<h1 className="">
Whatsapp
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <img src="/image/phone.png" height={50} width={50}>
</img> 
<h1 className="">
Phone No
</h1>     
      </div>

</div>
</div> 
   </div>
   <div className="px-">
   <div className=" py-14">
 <a className="underline"> www.lo.com</a>  
</div>
<div className=" py-2">
 <a className="underline">https:\\telegram\Ethiopharma</a>  
</div>
<div className=" py-12">
 <a className="underline">https:whatsapp\trustethiopharma</a>  
</div>
<div className=" py-">
 <a className="underline"> +25196969654</a>  
</div>
   </div>  
</div>

   </div>
<div>
<button className=" font-semibold text-2xl py-6 px-8 animate-bounce"onClick={handleClickG}> Picture Gallery
</button>
<Footer/>
<Endfooter/>
</div>
</>

}