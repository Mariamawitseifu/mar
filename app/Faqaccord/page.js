"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


function Faqaccord() {
  const [open,setOpen]=useState(false)
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)
  const [isRotated, setIsRotated] = useState(false);
  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);


  const handleToggle12 = () => {
    setIsRotated(!isRotated);
  };

  const handleToggle11 = () => {
    setIsRotated1(!isRotated1);
  };
  const handleToggle10 = () => {
    setIsRotated2(!isRotated2);
  };

const handleToggle2 =()=>{
  setOpen2(!open2)
}

  const handleToggle = ()=>{
   
    setOpen(!open);

  }
   const handleToggle1 = ()=>{
      setOpen1(!open1);
    }

  return (
  <div className="container mx-auto md:px-6 xl:px-20">
  <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
  <div>  
  <div id="accordionFlushExample">
 <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
 
     <div onClick={handleToggle1}>  
     <h2 className="mb-0" id="flush-headingOne">
   <button onClick={handleToggle10}
       className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
       type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
       aria-controls="flush-collapseOne">
      Where can i find the HR leave form
       <span
         className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee] ${
          isRotated2 ? 'rotate-[-180deg]' : ''
        } `}>
        <IoIosArrowDown/>
       </span>
     </button>
     </h2>
   </div>

   {open1 && ( 
   <div id="flush-collapseOne" className="!visible border-0" data-te-collapse-item data-te-collapse-show
     aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
     <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
       Anim pariatur cliche reprehenderit, enim eiusmod high life
       accusamus terry richardson ad squid. 3 wolf moon officia aute,
       non cupidatat skateboard dolor brunch. Food truck quinoa
       nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
       put a bird on it squid single-origin coffee nulla assumenda
       shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
       wes anderson cred nesciunt sapiente ea proident. Ad vegan
       excepteur butcher vice lomo. Leggings occaecat craft beer
       farm-to-table, raw denim aesthetic synth nesciunt you probably
       haven't heard of them accusamus labore sustainable VHS.
     </div>
   </div>
   )
   }
</div>
</div>
<div id="accordion">
<div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">


  <div onClick={handleToggle}>
    <h2 className="mb-0" id="flush-headingTwo">
   <button onClick={handleToggle11}
       className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
       type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
       aria-controls="flush-collapseOne">
    What is a portal?
       <span
         className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee] ${
          isRotated1 ? 'rotate-[-180deg]' : ''
        } `}>
         <IoIosArrowDown/>
       </span>
     </button>
    </h2>
    </div>
  
   { open && (
 <div id="flush-collapseOne" className="!visible border-0" data-te-collapse-item data-te-collapse-show
 aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
 <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
   Anim pariatur cliche reprehenderit, enim eiusmod high life
   accusamus terry richardson ad squid. 3 wolf moon officia aute,
   non cupidatat skateboard dolor brunch. Food truck quinoa
   nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
   put a bird on it squid single-origin coffee nulla assumenda
   shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
   wes anderson cred nesciunt sapiente ea proident. Ad vegan
   excepteur butcher vice lomo. Leggings occaecat craft beer
   farm-to-table, raw denim aesthetic synth nesciunt you probably
   haven't heard of them accusamus labore sustainable VHS.
 </div>
</div>


   )}
</div>
</div>
<div>
<div id="accordion">
<div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
<h2 className="mb-0" id="flush-headingTwo">
  <div onClick={handleToggle2}> 
<button
      onClick={handleToggle12}
      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition"
      type="button"
    >
      Are portals fun?
      <span className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out ${
        isRotated ? 'rotate-[-180deg]' : ''
      }`}>
      <IoIosArrowDown/>
      </span> 
    </button>
   </div>
   </h2>
   { open2 && (
 <div id="flush-collapseOne" className="!visible border-0" data-te-collapse-item data-te-collapse-show
 aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
 <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
   Anim pariatur cliche reprehenderit, enim eiusmod high life
   accusamus terry richardson ad squid. 3 wolf moon officia aute,
   non cupidatat skateboard dolor brunch. Food truck quinoa
   nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
   put a bird on it squid single-origin coffee nulla assumenda
   shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
   wes anderson cred nesciunt sapiente ea proident. Ad vegan
   excepteur butcher vice lomo. Leggings occaecat craft beer
   farm-to-table, raw denim aesthetic synth nesciunt you probably
   haven't heard of them accusamus labore sustainable VHS.
 </div>
</div>


   )}
</div>
</div>
</div>


</div>
    <div>
      </div> 
</div>
  )
}

export default Faqaccord
