'use client';
import Image from "next/image";
import Link from 'next/link';
import Droga from "/public/image/Droga.jpg";
import land from "/public/image/land.png";
import Quick from "../app/quick/page.js";
import Blogs from "@/app/blogs/Blogs.js";
import Notification from './notification.js';
import lock from "/public/image/lock.png"
import log from "/public/image/log.png"
import dashboard from "/public/image/dashboard.png"
import Popup from "reactjs-popup";
import { useState, useEffect ,useRef} from "react";
import { useMediaQuery } from 'react-responsive';
import Groupcards from "./Groupcards.js";


export default function Navbar() {

  // const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };


  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);




  function Popupview() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);
  }
    const handleClickM = () => {
      setIsOpen(!isOpen);
    };
  
  function Buttons({ children }) {
    return (
      <button className="hover:bg-dro_yellow border bg-dro_white py-3 md:py-4 lg:py-5 px-4 md:px-8">
        {children}
      </button>
    );
  }
  return (
    <>
      <div className="relative mt-1">
        <header className="text-dro_black body-font relative z-20">
          <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center mb- md:mb-0">
              <div className=" flex flex-row px-10 py-3 ml-auto">
               <Link href="/home" >
                  <Image className="" src={Droga} height={110} width={100} alt="droga logo" />
              </Link> 
              <h1 className=" ml-3 font-medium text-3xl">Droga <h className=" font-semibold">Portal </h> </h1>

              

            <nav className="md:ml-auto flex flex-wrap w-full bg-dro_white px-10 items-center text-base justify-center">
              <div className="flex flex-row justify-between">
              <Popup trigger={<button className="font-semibold px-3 text-lg">Quick Links</button>} 
              position="bottom"
              className="backdrop:blur-lg">
  <table className="shadow-lg border-collapse border-spacing-0 bg-dro_white">
  <thead>
    <tr className="">
      <th className="border text-left px-6 py-4">No.</th>
      <th className="border text-left px-6 py-4">Name</th>
      <th className="border text-left px-6 py-4">Internal Link</th>
      <th className="border text-left px-6 py-4">External Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-8 py-4 h-3">1</td>
      <td className="border px-8 py-4 h-3">PMS</td>
      <td className="border px-8 py-4 h-3">www.pms.com</td>
      <td className="border px-8 py-4 h-3">https//:drogapharma.com</td>
    </tr>
    <tr>
      <td className="border px-8 py-4">2</td>
      <td className="border px-8 py-4">DMS</td>
      <td className="border px-8 py-4">www.dms.com</td>
      <td className="border px-8 py-4">https//:drogapharma.com</td>
    </tr>
    <tr>
      <td className="border px-8 py-4">3</td>
      <td className="border px-8 py-4">Odoo</td>
      <td className="border px-8 py-4">erp.odoo.com</td>
      <td className="border px-8 py-4">https//:drogapharma.com</td>
    </tr>
  </tbody>
</table>
</Popup>
<div>
  <button className=" font-semibold" onClick={handleClickM}>
  Blog
</button>
      {isOpen &&
       (
        <div className="absolute w-80 h-1/2 bottom-10 p-4" ref={popupRef}>
          <div className="max-w-md w-full bg-dro_yellow shadow-lg p-4">
            <h2 className="text-lg font-bold mb-1">DROGA SUPPORT</h2>
          </div>
        </div>
      )
      }
    </div>


             </div>
             <div>
             <button className="px-3 font-semibold text-lg">Portal User Guide</button>  
             </div>
              <li style={{ position: "relative" }}>
                <Notification />
              </li>
              <div className="grid md:grid-cols-2" />
              <div className="">
                <input
                  type="text"
                  id="first_name"
                  className=" w-14 sm:w-32 h-5 sm:h-10 placeholder:text-dro_black  border border-dro_black text-dro_black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
      <div>
      <Popup
        trigger={
        <button className="flex h-10 w-10 ml-6 items-center justify-center rounded-full bg-dro_yellow">C</button>
        }
        position="bottom right"
      >
       
    <div className="w-64 h-50 bg-dro_white shadow-lg flex flex-col items-center py-3">
          <div className="rounded-full border-dro_black bg-dro_yellow h-10 w-10 flex items-center justify-center ">
            <span className="text-center">C</span>
          </div>
          <h3 className="text-lg mt-3 font-bold">Charlie Chocolate</h3>
          <h3 className=" text-xs mb-3">Charlieisdo@gmail.com</h3>
          <div className=" flex flex-col">
          <div className=" flex flex-row items-center justify-center border-t-2 border-dro_black w-full">
            <Image src={dashboard} height={20} width={20} />
           <button className="hover:bg-dro_gray font-medium mt-3 py-2 px-4">
           Go to Dashboard
          </button> 
          </div>
          <div>

          </div>
          <div className="flex flex-row items-center justify-center">
          <Image src={lock} height={20} width={20}/>
           <button className="hover:bg-dro_gray font-medium py-2 px-4">
            Change Password
          </button> 
          </div>
          
          <div className="flex flex-row mr-24 ml-3 items-center justify-center">
          <Image src={log} height={20} width={20}/>
          <button className="hover:bg-dro_gray font-medium py-2 px-4">
            Log Out
          </button>
          </div>
          </div>
    </div>
      </Popup>
    </div>
            </nav>
            </div>
            </div>
           </div>
        </header>
      
      <div className="flex items-center px-10 bg-my-bg-image bg-dro_yellow bg-cover relative z-10">
        <div className=" w-full md:w-1/2">
          <h1 className="relative text-2xl py-10 font-extrabold">Welcome to Droga</h1>
          <p className="relative text-align:justify text-sm md:text-lg lg:text-xl font-n">Droga Pharma Pvt. Ltd. Co was established in April 2015 by a group of healthcare professionals, who have rich business experience in the pharmaceutical, Research, Manufacturing sector. We are working in the pharmaceuticals import, wholesale and retail business, targeting the public as well as the private health sector of Ethiopia.</p>
          <button className=" babsolute font-bold mb-10 text- mt-4">See More</button>
        </div>
       </div> 
      </div>
      
    </>
  )
}