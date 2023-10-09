import Image from "next/image";
import land from '/public/image/land.png';
import Navbar from "/components/NavBar";
import Units from "/components/Units";
import Faq from "/components/Faq"
import Endfooter from "/components/Endfooter"
import FAQAccordion from '/components/FAQAccordion';
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import { useClient } from 'react';
import Cards from "@/components/Cards";



export default function Home (){ 
return(<div>
    <div className="">
      <Navbar />
    <div className="flex flex-row absolute top-0 right-0 h-full w-full">
   
           </div> 
    </div>

{/* <div className="relative"><Units/></div> */}
<div className=" py-52 px-5">
  <Cards/>
</div>

<div className="">
  <Faq/>
</div>
<div className="mt-4">
  <Footer/>
</div>
<div>
  <Endfooter/>
</div>
</div>
)
}
