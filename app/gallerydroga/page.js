"use client"
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from "react";



export default function gallerydroga(){
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
        <div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/image/i1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
</div>

</>

}