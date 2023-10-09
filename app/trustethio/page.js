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
import 'tailwindcss/tailwind.css'

export default function trustethio(){
   const router = useRouter();

   const handleClickG = () => {
     router.push('/gallery');
   };
 
return<>
<div>
      <div>
   <Navbar/>         
      </div>

{/* <h1 className="animate-bounc  font-semibold text-4xl px-9 py-16 bg-dro_white">
   Trust Ethiopharma
</h1> */}
<Type/>
</div>
 <div className=" flex flex-row">
 <div className="w-1/2 py-10 px-4 gap-3">
   <div className="flex items-center">
   
     <div className=" flex flex-row"> 
     
      <div>
       <Image src={www} height={50} width={50}>
</Image>
<h1 className="">
Website
</h1>     
      </div>
<div className=" py-4">
 <a className=" px-6 underline"> www.trustethiopharma.com</a>  
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
<div className=" py-4">
 <a className=" px-6 underline"> www.trustethiopharma.com</a>  
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
<div className=" py-4">
 <a className=" px-6 underline"> www.trustethiopharma.com</a>  
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
<div className=" py-4">
 <a className=" px-6 underline"> www.trustethiopharma.com</a>  
</div>
</div> 
   </div>
   </div>
   </div>
   <div className="w-1/2 py-10 px-4 gap-3">

   <div className="flex items-center">
     <div className=" flex flex-row">
      <div>
       <Image src={deskphone} height={50} width={50}>
</Image> 
<h1 className="">
DeskPhone
</h1>     
      </div>
<div className=" py-4">
 <a className=" px-6 underline"> www.trustethiopharma.com</a>  
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
<div className=" py-4">
 <a className=" px-6 underline">https:\\telegram\Ethiopharma</a>  
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
<div className=" py-4">
 <a className=" px-6 underline">https:whatsapp\trustethiopharma</a>  
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
<div className=" py-4">
 <a className=" px-6 underline"> +25196969654</a>  
</div>
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