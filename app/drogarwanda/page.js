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
import Gallery from "../gallery/page"
import whatsapp from "public/image/whatsapp.png"
import deskphone from "public/image/deskphone.png"
import phone from "public/image/phone.png"
import telegram from "public/image/telegram.png"
import www from "public/image/www.png"
import Navbar from "@/components/NavBar"
import Type from "@/components/Type"
// import 'tailwindcss/tailwinds.css'
// import Typewriter from 'typewriter-effect'
import Typewriter from 'typewriter-effect';

// import { useState, useEffect ,useRef} from "react";
// import { useTypewriter,Cursor} from 'react-simple-typewriter';


export default function drogarwanda(){
   const router = useRouter();

   const handleClickG = () => {
     router.push('/gallery');
   };

// const {text} = useTypewriter({
// words: ['Droga','Rwanda'],
// loop:{},
// typeSpeed:120,
// deleteSpeed:80, 

//    });
  //  const [typewriterText, setTypewriterText] = useState('');

  //  useEffect(() =>{
  //    const text = 'Droga Rwanda';
  //    let i = 0;
  //    let interval = null;
  //    let isForward = true;
 
  //    const startTyping = () => {
  //      interval = setInterval(() => {
  //        if (isForward) {
  //          setTypewriterText(prevText => prevText + text[i]);
  //          i++;
  //        } else {
  //          setTypewriterText(prevText => prevText.slice(0, -1));
  //          i--;
  //        }
 
  //        if (isForward && i === text.length) {
  //          isForward = false;
  //        } else if (!isForward && i === 0) {
  //          isForward = true;
  //        }
  //      }, 100);
  //    };
 
  //    startTyping();
 
  //    return () => {
  //      clearInterval(interval);
  //    };
  //  }, []);

return<>
<div>
      <div>
   <Navbar/>         
      </div>
      <div className=" py-10 px-1 md:py-12 md:px-52">
      <div className="">
<div className="">
  <Typewriter
    sequence={[
      { strings: ['droga', 'rwanda'], autoStart: true, loop: true }
    ]}
  />
</div>
</div>

</div>
</div>
<div className="flex flex-wrap md:gap-60 gap-6 md:px-40 px-4">
      <div  className=" flex flex-row md:gap-3 py-2 gap-1">
      <div className="w-1/2 md:py-5 py-10 px-1 md:px-4">
   <div className="flex items-center">
     <div className=" flex flex-row"> 
      <div>
       <Image src={www} height={50} width={50}>
</Image>
<h1 className="">
Website
</h1>     
      </div>
</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={itwitter} height={50} width={50}>
</Image> 
<h1 className="">
Twitter
</h1>     
      </div>
</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={ifb} height={50} width={50}>
</Image> 
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
       <Image src={ilinkedin} height={50} width={50}>
</Image> 
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

<div  className=" flex flex-row md:px-5 px-1 md:gap-3 gap-1">
       <div className="w-1/2 py-10 px-1">
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={deskphone} height={50} width={50}>
</Image> 
<h1 className="">
DeskPhone
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={telegram} height={50} width={50}>
</Image> 
<h1 className="">
Telegram
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={whatsapp} height={50} width={50}>
</Image> 
<h1 className="">
Whatsapp
</h1>     
      </div>

</div> 
   </div>
   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={phone} height={50} width={50}>
</Image> 
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
</div>
</>

}