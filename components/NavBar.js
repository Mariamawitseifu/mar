'use client';
import Link from 'next/link';
import Image from 'next/image';
import Notification from './notification.js';
import Popup from "reactjs-popup";
import { useState, useEffect ,useRef} from "react";
import Cookies from "js-cookie";
import Welcome from "./Welcome.js";
import Units from './Units.js';
import axios from "axios";
import Filter from "./Filter.js";
import Circle from './Circle.js';


export default function Navbar() {



  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPostResults, setBlogPostResults] = useState([]);
  const [recordResults, setRecordResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response1 = await axios.get('/api/blogpost/search', {
        params: { query: searchQuery },
      });
      setBlogPostResults(response1.data.results);

      const response2 = await axios.get('/api/record/search', {
        params: { query: searchQuery },
      });
      setRecordResults(response2.data.results);
    } catch (error) {
      console.error('Error searching:', error);
    }}
  const [user, setUser] = useState(null)
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpeen, setIsOpeen] = useState(false);
  const [isOpened, setIsOpened]=useState(false);
  // const [isOpen1, setIsOpen1] = useState(false);
  // const cardRef = useRef(null);
  // const blurRef = useRef(null);
  const passRef = useRef(null);
  const handleToggle = () => {
    setIsOpened((prevState) => !prevState);
  };

  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
  
      await axios.post("http://127.0.0.1:8000/api/logout/", null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
  
      localStorage.removeItem("token");
      console.log("Token removed from local storage");
  
      localStorage.removeItem("user");
      console.log("User removed from local storage");
  
      window.location.href = "/dep";
    } catch (error) {
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

  
const fetchData = async () => {
  try {
    const response = await axios.get('/api/your-endpoint');
    console.log(response.data); // Process the response data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const handleFetchData = () => {
  fetchData();
};
const handlePost = () => {
  // update state 
}

  return (
    <>
    
<div className="relative bg-dro_yellow px-2 py-2 md:px-1">
  <header className="text-dro_black body-font relative z-20">
    <div className="mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center">
      <div className="flex flex-row px-4 md:px-8 py-1">
      <Link href="/home">
      <img
        className="w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-20"
        src="/image/Droga.jpg"
        alt="droga logo"
        width={16}
        height={14}
      />
      </Link>
        <h1 className="px-3 font-medium text-2xl md:text-3xl lg:text-4xl">
          Droga Group <span className="font-semibold animate-pulse">Portal</span>
        </h1>
      </div>
      <div className="flex title-font font-medium items-center mx-auto my-4 md:my-0">
        <nav className="md:mx-auto flex flex-row space-x-8 flex-wrap w-full bg-dro_yellow py-8 md:py-16 px-4 md:px-10 items-center text-base justify-center">
          <div>
            <Units/>
          </div>
          <>
          <div>
    </div>
          </>
          
          <Link legacyBehavior href="/userguide">
            <a className="font-semibold text-lg">Portal User Guide</a>
          </Link>

          <ul>
            <li style={{ position: "relative" }}>
              <Notification />
            </li>
          </ul>
          <Filter/>
          <>
          <Circle/>
          </>
              </nav>
             </div>
           </div>
        </header>
      </div>
      
    </>
  )
}

     