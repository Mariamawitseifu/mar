// import Image from "next/image";
// import dep from "public/image/dep.png";
import organization from "public/image/organization.png";
import { useClient } from 'react';

export default function Units() {
return<>

 {/* <div className="flex flex-row mt-96 md:grid-cols-2 justify-center py-52 px-30 -ml-14 ">
  <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-12">Organizational Units</h1>
        <div className="flex justify-center gap-32">
          <div className="flex flex-col items-center">
            <img src="public/image/home.png" height={70} width={70} />
            <img src
            <h1 className="text-xl font-semibold">Business units</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="mt-2">
            <img src={dep} height={60} width={65} />
            </div>
            <h1 className="text-xl mt-1 font-semibold">Companies</h1>
            
          </div>
          
        </div>
    
</div>
          </div> */}


</>

}
// 'use client';
// import { useState, useEffect ,useRef} from "react";
// import Cookies from "js-cookie"


// export default function BlogPost()
// {
//   const [user, setUser] = useState(null)
//   const [isOpen, setIsOpen] = useState(false);
//   const cardRef = useRef(null);
//   const blurRef = useRef(null);
//   const [isBlurred, setIsBlurred] = useState(false);
//   const handleToggle = () => {
//     setIsOpen((prevState) => !prevState);
//   };


  
//   const [isSmallScreen, setIsSmallScreen] = useState(false);




  
//   // console.log(typeof(user));
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cardRef.current && !cardRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (blurRef.current && !blurRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 640px)");
//     setIsSmallScreen(mediaQuery.matches);

//     const handleResize = () => {
//       setIsSmallScreen(mediaQuery.matches);
//     };

//     mediaQuery.addEventListener("change", handleResize);

//     return () => {
//       mediaQuery.removeEventListener("change", handleResize);
//     };
//   }, []);

//   const popupRef = useRef(null);

//   useEffect(() => {

//     const user = Cookies.get("user");
// if (user !== undefined) {
//   setUser(JSON.parse(user));
// }


//     const handleOutsideClick = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

 

//   // console.log(uuw[0][0], uuw[1][0])




//   function Popupview() {
//     const [isOpen, setIsOpen] = useState(false);
//     const popupRef = useRef(null);
//     const popupRef1 = useRef1(null);
  
//     useEffect(() => {
//       const handleOutsideClick = (event) => {
//         if (popupRef.current && !popupRef.current.contains(event.target)) {
//           setIsOpen(false);
//         }
//       };
  
//       document.addEventListener('mousedown', handleOutsideClick);
  
//       return () => {
//         document.removeEventListener('mousedown', handleOutsideClick);
//       };
//     }, []);
//   }
//     const handleClickM = () => {
//       setIsOpen(!isOpen);
//       // setIsBlurred(!isBlurred);
//     };
  
//   return(
// <>
// <div>
//   <button className="font-semibold text-lg" onClick={handleClickM}>
//   Blog
// </button>
//       {isOpen &&
//        (
        
//         <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter" ref={popupRef}>
//           <div ref={cardRef}  className="h-96 w-1/2 bg-dro_yellow shadow-lg">
//             <h2 className="text-2xl px-10 py-6 font-bold mb-1">Blog Here</h2>
//             <div class="w-96">
//         <div class="relative px-10 py-3 h-52 w-full">
//           <input
//             class="h-full w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
//             type="text"
//             placeholder="Write Your Blog Here"
//           />
//         </div>
      
//       <div className=" px-28">
//         <button className=" flex justify items-center px-10 w-32 h-10 bg-dro_green text-white ">POST</button>
//       </div>
//           </div>
//         </div>
//       </div>
//       )
//       }
//       {/* {isBlurred && <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>} */}
// </div>
// </>



//   )
// }