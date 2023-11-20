"use client"
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from "react";



export default function gallerypysio(){
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

    // const router = useRouter();

    // const handleClick = () => {
    //   router.push('/');
    // };
  
return<>
        <div className="relative">
        <div className="card py-6 px-16">
              <label
                htmlFor="image-upload"
                className="upload-button bg-dro_white px-8 py-2 md:px-4 md:py-1"
              >
                Choose Image
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {selectedImage && (
                <img
                  className="absolute top-2 right-2"
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: '40px' }}
                />
              )}
            </div>    
        </div>
<div className=" py-8 px-1">

<div>

<div className="flex flex-row space-x-6">
      <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  
    <img className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110 ">
    <img className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  </div>

</div>
<div className=" py-10">
<div className="flex flex-row space-x-6">
      <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/henok.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/Droga.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
  
    <img className="h-full w-full" src="/image/ema.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110 ">
    <img className="w-full h-full" src="/image/trust.jpg" width={160} height={150} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/physio.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className="relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/chainpharma.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  <button className=" relative max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-110">
    <img className="w-full h-full" src="/image/somaliland.jpg" width={160} height={160} alt="Sunset in the mountains"/>
  </button>
  </div>
        </div>
        </div>

</>

}