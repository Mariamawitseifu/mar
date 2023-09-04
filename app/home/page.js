import Image from "next/image";
import land from '/public/image/land.png';
import Navbar from "/components/NavBar";
import Units from "/components/Units";
import Faq from "/components/Faq"
import Endfooter from "/components/Endfooter"
import FAQAccordion from '/components/FAQAccordion';
import Footer from "@/components/Footer";
import Welcome from "@/components/welcome";
import { useClient } from 'react';



export default function Home (){ 
return(<div>
    <div className="mt-1 ">
      <Navbar />
    <div className="flex flex-row absolute top-0 right-0 h-full w-full">
    {/* <Image
      className="absolute max-w-full h-auto sm:bg-right object-cover "
      src={land}
      layout="fill"
    />  */}
    {/* <Welcome/> */}
           </div> 
    </div>

{/* <div className="relative"><Units/></div> */}






<div className="py-16">
  <Faq/>
  {/* <FAQAccordion/> */}
</div>
<div>
  <Footer/>
</div>
<div>
  <Endfooter/>
</div>

</div>
)
}
