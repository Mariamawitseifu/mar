'use client'
import React, { useState, useEffect } from "react";

export default function galleryrwanda() {
 const [selectedImage, setSelectedImage] = useState(null);
 const [images, setImages] = useState([]); // Initialize images as an empty array
 const [uploadedImage, setUploadedImage] = useState(null);
 const [selectedImages, setSelectedImages] = useState([]);
 const [title, setTitle] = useState('');


 let token;
 if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('token');
  // console.log(`this is the token ${token}`)

 } else {
  // Handle the case when localStorage is not available
  token = null; // or any other default value
 }

 const handleImageUpload = (event) => {
  const file = event.target.files[0];
  setSelectedImages((prevImages) => [...prevImages, file]);
 
  const data = new FormData();
  data.append('image', file);
  data.append('title', title); // append the title
 
  fetch('http://127.0.0.1:8000/pictures/creater/', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${token}`,
    },
    body: data,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Image uploaded successfully:', data);
 
      // Clear the title
      setTitle('');
 
      // Fetch the updated list of images
      fetch('http://127.0.0.1:8000/pictures/imagesr/', {
        headers: {
          'Authorization': `Token ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Update the images state with the updated list
          setImages(data);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
        });
    })
    .catch(error => {
      console.error('Error posting image:', error);
    });
 };
 
 useEffect(() => {
  fetch('http://127.0.0.1:8000/pictures/imagesr/', {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Reverse the order of images received from the server
      const reversedImages = data.reverse();
      // Update the images state with the reversed order
      setImages(reversedImages);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);
 return (
   <>
     <div className="relative">
       <div className="card py-6 px-16">
       <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          />
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


       </div>
     </div>
<div className="grid grid-cols-4 gap-4">
  {images.map((image, index) => (
    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <div className="image-container" style={{ width: '100%', height: '200px', overflow:'hidden' }}>
          <img className="rounded-t-lg" src={`http://127.0.0.1:8000/media/${image.image}`} alt="" />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {image.title}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p> */}
      </div>
    </div>
  ))}
</div>
 </>
);
     }
