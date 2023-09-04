import Link from "next/link";
import dro from "/public/image/Droga.jpg";
import Home from "@/app/page";
import Image from "next/image";
import Droga from "/public/image/Droga.jpg";
import Groupcards from "./Groupcards";
import Faqaccord from "@/app/Faqaccord/page";

export default function Footer(){

    return <>
    
   
    <div className=" bg-dro_yellow p-10 w-full" >
       
        <h1></h1>

        <div className="flex flex-col justify-start">


<div className=" flex flex-row">

     <div className=" flex flex-row mt-20 px-10">
    <Link href="/home" >
       <Image className="" src={dro} height={1} width={50} alt="droga logo" />
   </Link> 
   {/* <div className="  mt-6 ml-1">
    <p className=" text-sm font-black"> DROGA GROUP</p>
    <p className=" text-xs font-md"> Serving the People!</p>
   </div> */}
   </div>
        <div className="flex flex-col text-dro_black">

            <div><h1 className="text-xl font-bold">Contact Us</h1> </div>
            
            <div className="my-1"></div>
            {/* <div><h1 className="text-md font-semibold">Published By: </h1> </div> */}
            {/* <div className="my-3"></div> */}
            <div className=" m-1 text-xs"><p>Droga Group</p> </div>
            <div className=" m-1 text-xs"><p>Gulele Sub City-Woreda 9</p> </div>
            <div className=" m-1 text-xs"><p>House No-New-Droga Tower</p> </div>
            <div className=" m-1 text-xs"><p>Addis Ababa, Ethiopia</p> </div>
            <div className="my-2 "></div>
            <div className=" m-1 text-xs"><p>Phone: +251112734554</p> </div>
            <div className=" m-1 text-xs"><p>Mobile: +251112734554</p> </div>
            <div className=" m-1 text-xs"><p>info@drogapharma.com</p> </div>
            <div className=" m-1 text-xs"><p>www.drogapharma.com</p> </div>
</div>
<div className="font-bold flex flex-col px-14 ">
 <p className="text-xl">Links</p>
 <Link href="/home"> 
 <button className=" mt-3 font-semibold">Home</button>
 </Link>
 <Link href="/home"> 
 <button className=" mt-3 font-semibold">Our Services</button>
 </Link>
 <Link href=" /Faqaccord"> 
 <button className=" mt-3 font-semibold">Faqs</button>
 </Link>
 </div>
 <div className=" px-14 font-bold">
<p className="text-xl">
    Faqs
</p>
            </div>
            <div className=" px-14 font-bold">
<p className="text-xl">
    Medias
</p>
            </div>

        </div>




        </div>
        
         </div>
         </>
}