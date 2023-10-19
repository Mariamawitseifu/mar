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
import { FiUpload } from 'react-icons/fi';
import axios from "axios";
import { SearchPage } from "./Filter.js";
import Blogs from "@/app/blogsandblogs/page.js";


export default function Navbar() {
  const [user, setUser] = useState(null)
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpeen, setIsOpeen] = useState(false);
  const [isOpened, setIsOpened]=useState(false);
  // const [isOpen1, setIsOpen1] = useState(false);
  // const cardRef = useRef(null);
  // const blurRef = useRef(null);
  const passRef = useRef(null);
  // const [isBlurred, setIsBlurred] = useState(false);

  const handleToggle = () => {
    setIsOpened((prevState) => !prevState);
  };

  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cardRef.current && !cardRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passRef.current && !passRef.current.contains(event.target)) {
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
      if (popRef.current && !popRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (blurRef.current && !blurRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the authentication token from local storage
      await axios.post("http://127.0.0.1:8000/api/logout/", null, {
        headers: {
          Authorization: `Token ${token}`, // Include the token in the Authorization header
        },
      });
      // Perform any additional actions after successful logout
      localStorage.removeItem("token"); // Clear the token from local storage
    } catch (error) {
      // Handle error
      console.error("Logout error:", error);
    }
  };
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
  const popRef = useRef(null);
  useEffect(() => {

const user = Cookies.get("user");
console.log("User value:", user);
if (user !== undefined) {
  try {
    setUser(JSON.parse(user));
  } catch (error) {
    // Handle the case where the value is not valid JSON
    console.error("Invalid JSON:", error);
  }
}

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

    const handleClickP = () => {
      setIsOpeen(!isOpeen);
    };
    
  
  function Buttons({ children }) {
    return (
      <button className="hover:bg-dro_yellow border bg-dro_white py-3 md:py-4 lg:py-5 px-4 md:px-8">
        {children}
      </button>
    );
  }


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }; 

  return (
    <>
      <div className="relative bg-dro_yellow px-2 py-2 md:px-1">
        <header className="text-dro_black body-font relative z-20">
          <div className="mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center">
            <div className="flex flex-row px-4 md:px-8 py-1">
              <Link href="/home">
                <Image
                  className="w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-20"
                  src={Droga}
                  alt="droga logo"
                />
              </Link>
              <h1 className="px-3 font-medium text-2xl md:text-3xl lg:text-4xl">
                Droga Group{" "}
                <span className="font-semibold animate-pulse">Portal</span>
              </h1>
            </div>
            <div className="flex title-font font-medium items-center mx-auto my-4 md:my-0">
              <nav className="md:mx-auto flex flex-row md:space-x-8 space-x-3 lg:space-x-12 flex-wrap w-full bg-dro_yellow py-8 md:py-16 px-4 md:px-10 items-center text-base justify-center">
                <div className="flex items-start justify-start">
                <Welcome />
                </div>
                <div>
                <Blogs />  
                </div>
                <div>
                  <button className="font-semibold text-lg">
                    Portal User Guide
                  </button>
                </div>
                <ul className="">
                  <li style={{ position: "relative" }}>
                    <Notification />
                  </li>
                </ul>
                <div>
                <SearchPage />  
                </div>
                

                <div className=" order-1">
                  <Popup
                    trigger={
                      <button className="flex h-10 w-10 ml-6 items-center justify-center rounded-full bg-dro_white border-dro_black">
                        {user && user.username[0].toUpperCase()}
                      </button>
                    }
                    position="bottom right"
                  >
                    <div className="w-64 h-50 bg-dro_white shadow-lg flex flex-col items-center py-3">
                      <div className="rounded-full border-dro_black bg-dro_gray h-10 w-10 flex items-center justify-center">
                        <span className="text-center">
                          {user && user.username[0].toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-lg mt-3 font-bold">
                        {user && user.username.toUpperCase()}
                      </h3>
                      <h3 className="text-xs mb-3">{user && user.email}</h3>
                      <div className="flex flex-col">
                        <div></div>
                        <div className="flex flex-row items-center justify-center">
                          <Image src={lock} height={20} width={20} />
                          <button
                            className="hover:bg-dro_gray font-medium py-2 px-4"
                            onClick={handleClickP}
                          >
                            Change Password
                          </button>
                          {isOpeen && (
                            <div
                              className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter"
                              ref={popRef}
                            >
                              <div className="h-96 w-1/ bg-dro_yellow shadow-lg">
                                <div className="flex flex-col justify-center items-center h-full">
                                  <h2 className="text-2xl font-bold mb-4">
                                    Change Password
                                  </h2>
                                  <div className="relative px-10 py-3 h-52 w-full space-y-4 flex flex-col justify-center items-center">
                                    <button className=" absolute right-1/3 top-14 bg-dro_red  text-dro_white px-4 flex justify-start items-start" onClick={handleToggle}>
                                      X
                                    </button>
                                    <input
                                    className="w-full h-14 rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
                                    type="password"
                                    placeholder="Old Password"
                                  />
                                  <div className="relative">
                                    <input
                                      className="h-14 w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500 pr-10"
                                      type="password"
                                      placeholder="New Password"
                                    />
                                    <svg
                                      className="absolute right-3 top-3 h-6 w-6 text-gray-400 cursor-pointer"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <button className="flex justify-center items-center px-10 w-32 h-10 bg-dro_green text-white">Enter</button>
      </div>
    </div>
  </div>
</div>

       )}     
          </div>
          
      
<div className="flex flex-row mr-24 ml-3 items-center justify-center">
  <Image src={log} height={20} width={20} />
  <button className="hover:bg-dro_gray font-medium py-2 px-4" onClick={handleLogout}>
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

     