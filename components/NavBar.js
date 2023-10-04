'use client';
import Image from "next/image";
import Link from 'next/link';
import Droga from "/public/image/Droga.jpg";
import Notification from './notification.js';
import lock from "/public/image/lock.png"
import log from "/public/image/log.png"
import dashboard from "/public/image/dashboard.png"
import Popup from "reactjs-popup";
import { useState, useEffect ,useRef} from "react";
import { useMediaQuery } from 'react-responsive';
import Groupcards from "./Groupcards.js";
import Cookies from "js-cookie"
import blur from "/components/blur.css";
import Welcome from "./Welcome.js";


export default function Navbar() {
  


  // const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const blurRef = useRef(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };


  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (blurRef.current && !blurRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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

  const popupRef = useRef(null);

  useEffect(() => {

    const user = Cookies.get("user");
if (user !== undefined) {
  setUser(JSON.parse(user));
}
// if ( user !== undefined){
//   Cookies.get('email')
// } 


    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
    console.log(user) 
  }, []);

  const uu = "berttt alemmu"
  const uuw = uu.split(" ")
  const a = uuw[0][0].toUpperCase()
  const ab = uuw[0]
 const ac =  ab.slice(1)
 const ad = a+ac

 const uuu="Hello World";
 const al= uuu.split(" ");
 const t=al[1][0];


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
  <div className="relative bg-dro_yellow mt-1 ">
        <header className="text-dro_black body-font relative z-20">
          <div className="mx-auto display flex flex-wrap flex-col md:flex-row items-center">
          <div className=" flex flex-row px-8 py-1">
               <Link href="/home" >
                  <Image className="" src={Droga} height={90} width={80} alt="droga logo" />
              </Link> 
              <h1 className=" ml-3 font-medium text-3xl">Droga Group <h className=" font-semibold">Portal </h> </h1>
              </div>
            <div className="flex title-font font-medium items-center ml-auto md:mb-0">
            <nav className="md:ml-auto flex flex-row space-x-8 flex-wrap w-full bg-dro_yellow py-16 px-10 items-center text-base justify-center">
              <div>
              <Welcome/>
              </div>
             <div>
  <button className="font-semibold text-lg" onClick={handleClickM}>
  Blog
</button>
      {isOpen &&
       (
        
        <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter" ref={popupRef}>
          <div ref={cardRef}  className="h-96 w-1/2 bg-dro_yellow shadow-lg">
            <h2 className="text-2xl px-10 py-6 font-bold mb-1">Blog Here</h2>
        <div class="relative px-10 py-3 h-52 w-full">
          <input
            class="h-full w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Write Your Blog Here"
          />
      
      <div className=" flex justify-center items-center py-8">
        <button className=" flex justify items-center px-10 w-32 h-10 bg-dro_green text-white ">POST</button>
      </div>
          </div>
        </div>
      </div>
      )
      }
</div>
             <div>
             <button className="font-semibold text-lg">Portal User Guide</button>  
             </div>
             <ul>
              <li style={{ position: "relative" }}>
                <Notification />
              </li>
              </ul>
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
        <button className="flex h-10 w-10 ml-6 items-center justify-center rounded-full bg-dro_white border-dro_black">{user && user.username[0].normalize()}</button>
        }
        position="bottom right"
      >
       
    <div className="w-64 h-50 bg-dro_white shadow-lg flex flex-col items-center py-3">
          <div className="rounded-full border-dro_black bg-dro_black h-10 w-10 flex items-center justify-center ">
            <span className="text-center"> {user && user.username[0].normalize()}</span>
          </div>
          <h3 className="text-lg mt-3 font-bold"> 
            {user && user.username}
            </h3>
          {/* <h3 className=" text-xs mb-3">{user && user.email}</h3> */}
          <h3 className="text-xs mb-3">{user && user.email}</h3>
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
        </header>
      </div>
      
    </>
  )
}