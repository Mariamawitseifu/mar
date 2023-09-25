<div className="mb-12 py-7 px-10 ml-auto mr-auto max-w-5xl bg-dro_yellow rounded overflow-hidden shadow-lg">
</div>
import Image from "next/image";
import land from '/public/image/land.png';
import Navbar from "/components/NavBar";
import Units from "/components/Units";
import Faq from "/components/Faq"
import FAQAccordion from '/components/FAQAccordion';
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import { useClient } from 'react';


export default function Home (){ 
return(<>
<div className="relative">
    <div className="mt-1">
      <Navbar />
    <div className="flex flex-row absolute top-0 right-0 h-full w-full">
    <Image
      className="mt-0 absolute"
      src={land}
    /> 
    <Welcome/>
           </div> 
    </div>
<Units/>
</div>

<Faq/>
<div className="py-16">
  <FAQAccordion/>
</div>

<Footer/>
</>
)
}
