"use client"
import Image from "next/image"
import land from "public/image/land.png"
import news from "public/image/news.png"
import { useState, useEffect } from "react";

export default function Faq() {
  const cover = [land, news];
  const [currentImage, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % cover.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
    {/* <div> */}
      <div className="flex items-center justify-center">
        <h1 className="px-12 text-2xl font-semibold relative mb-12">Announcements and Blogs</h1>
      </div>
     
      <div className="ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
  <div className="flex lg:flex-row sm:flex-row justify-end">
    <div className="flex flex-col justify-center px-80">
      <div className="font-bold sm:mt-3 text-xl sm:text-lg">DROGA RESEARCH GRANT</div>
      <div className="text-md sm:text-sm font-medium">12, AUG, 2023</div>
      <div className="sm:mb-3">
        <button className="rectangle-button float bg-dro_black inline-block px-4 py-2 mt-10 right-5 sm:mt-6 sm:py-2 text-dro_white rounded">
          Visit Us
        </button>
      </div>
    </div>
   
    <div className="w-full h-72">
      <div className="relative hover:absolute overflow-hidden h-full w-full">
        <div className=" relative w-full h-full transform transition-transform duration-500 hover:absolute hover:h-10 hover:w-10  hover:scale-105 ">
          <Image src={cover[currentImage]} alt="Image"  layout="fill" objectFit="cover" className="object-cover rounded-lg " />
        </div>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
}

// import Image from "next/image"
// import news from "public/image/news.png"
// import land from "public/image/land.png"
// import organization from "public/image/organization.png"
// // import trust from 'public/image/trust.png';
// import { useState, useEffect } from "react";

// export default function Faq(){
//   // useClient();
//   const cover = [land, news];
//   const [currentImage, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prevIndex => (prevIndex + 1) % cover.length);
//     }, 5000); // change 10000 to the number of milliseconds you want to wait before each slide
//     return () => clearInterval(interval); // This clears the interval when the component unmounts, very important for avoiding memory leaks
//   }, []);


//     return (

// <div className="flex flex-col ">
// <div className="flex items-center justify-center">
//        <h1 className=" px-12 text-2xl font-semibold relative mb-12" > Announcements and Blogs</h1> 
//      </div>
  
// <div className=" ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg ">

// <div className=" flex lg:flex-row sm:flex-row justify-end">
//   <div className="flex flex-col justify-center px-80">
//     <div className="font-bold sm:mt-3 text-xl sm:text-lg ">DROGA RESEARCH GRANT</div>
//     <div className="text-md sm:text-sm font-medium"> 12,AUG,2023</div>
//     <div className="sm:mb-3">
//     <button className=" rectangle-button float bg-dro_black inline-block px-4 py-2 mt-10 right-5 sm:mt-6 sm:py-2  text-dro_white rounded">Visit Us </button>
//   </div>
//   </div>
//   {/* <div className="">
//     <div className=" h-1/3 ">
//     <Image 
//      src={cover[currentImage]} 
//     height={500} 
//     width={700}/>
//     </div>
//   </div> */}
//   <div className="w-96 h-screen">
//           <div className="relative h-full w-full overflow-hidden">
//             <Image className="object-cover" src={cover[currentImage]} alt="Image" layout="fill" objectFit="cover" className="rounded-lg" />
//           </div>
//         </div>
//       </div>
// </div>
// </div>

// )
// }