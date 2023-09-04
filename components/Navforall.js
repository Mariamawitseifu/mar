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
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

function Buttons({ children }) {
  return (
    <button className="hover:bg-dro_yellow border bg-dro_white py-3 md:py-4 lg:py-5 px-4 md:px-8">
      {children}
    </button>
  );
}
export default function Navforall() {
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
  return (
    <>
      <div className="relative mt-1">
        <header className="text-dro_black body-font relative z-20">
          <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center mb- md:mb-0">
              <div className="px-10 py-10 ml-auto">
               <Link href="/home" >
                  <Image className="" src={Droga} height={120} width={120} alt="droga logo" />
              </Link> 
              </div>
            </a>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <div className="flex flex-row justify-between">
                <a href="/quick" className="px-7 font-extrabold text-xl">Quick Links</a>
                <Popup trigger={
                <button className="px-7 font-extrabold text-xl">Organizations</button>      
                }>
                  <Popup trigger={
                <button className=" hover:bg-dro_yellow border bg-dro_white py-4 md:py-5 px-3 md:px-9 " >
                 Business Units
                </button>
                  }> 
                  <div className="flex flex-col">
                    <Buttons>
                      Chain Pharmacy
                    </Buttons>
                    <Buttons>
                    WholeSale
                    </Buttons>
                  </div>
                  
                  </Popup>
                  <Popup trigger={
                  <button className=" hover:bg-dro_yellow border bg-dro_white py-4 md:py-5 px-7 md:px-11"> Companies </button>
                  }>
                    <div className="flex flex-col">
                      <button className=" hover:bg-dro_yellow border bg-dro_white py-2 md:py-4 px-4 md:px-9">
                        Droga
                      </button>
                      <button className=" hover:bg-dro_yellow border bg-dro_white py-2 md:py-4 px-4 md:px-9">
                        EMA
                      </button>
                      <button className=" hover:bg-dro_yellow border bg-dro_white py-3 md:py-4 px-4 md:px-9">
                        Tender
                      </button>
                    </div>
                  </Popup>
                </Popup>
               <h1 className="font-extrabold px-7 text-xl">Blog</h1>
              </div>

              <li style={{ position: "relative" }}>
                <Notification />
              </li>
              <div className="grid gap-8 md:grid-cols-2" />
              <div className="">
                <input
                  type="text"
                  id="first_name"
                  className="w-20 sm:w-32 h-8 sm:h-10  border border-dro_white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
      <div>
      <Popup
        trigger={
        <button className="flex h-10 w-10 ml-8 mr-10 items-center justify-center rounded-full bg-dro_white">C</button>
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
        </header>
      </div>
    </>
  );
}