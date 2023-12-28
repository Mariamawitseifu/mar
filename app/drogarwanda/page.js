"use client"
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Gallery from "../gallery/page";
import Navbar from "@/components/NavBar";
import Type from "@/components/Type";
import Footer from "@/components/Footer";
import Endfooter from "@/components/Endfooter";
import Typewriter from 'typewriter-effect';
import { useState, useEffect ,useRef} from "react";


export default function drogarwanda(){
   const router = useRouter();
   const [typewriterText, setTypewriterText] = useState('');
   const handleClickG = () => {
     router.push('/galleryrwanda');
   };
   useEffect(() => {
      const text = 'Droga Rwanda';
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
            }, 600); // Delay before restarting the effect (1 second in this example)
          }
        }, 100);
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
          <div className="relative h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px]">
 <img
 src="/image/test3.jpg"
 className="absolute inset-0 w-full h-full object-cover"
 alt="drogarwanda"
 />
 <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-typewriter">
 <span className="typewriter">{typewriterText}</span>
 </h1>
</div> 
    </div>
    
    <div className="flex flex-wrap py-28 gap-60 px-80">
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
   <a className="underline"> https://drogapharmacy.com/</a>  
  </div>
     <div className="">
   <a className="underline"> https://twitter.com/DrogaPharm63360</a>  
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
         <img src="/image/whatsappblue.png" height={50} width={50}>
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
         <img src="/image/phoneblue.png" height={50} width={50}>
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
    <button className=" font-semibold text-2xl py-10 px-8 animate-bounce"onClick={handleClickG}> Picture Gallery
    </button>
    <Footer/>
    <Endfooter/>
    </div>
    </>

}