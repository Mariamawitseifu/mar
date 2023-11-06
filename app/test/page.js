'use client'
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Faq from "@/components/Faq.js";
import Cookies from "js-cookie";


export default function Test(){


// const Test = () => {
  // const router = useRouter();
  // const [blogs, setBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const authorInputRef= useRef(null);
  const cardRef = useRef(null);
  const popupRef = useRef(null);
  const [isOpenn, setIsOpenn] = useState(false);

   const handleOutsideClick = (event) => {
       if (popupRef.current && !popupRef.current.contains(event.target)) {
         setIsOpen(false);
       }
     };

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

  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || [])

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs])

  // rest of state

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      console.log(axios.defaults.headers.common["Authorization"]);
      const response = await axios.post('http://127.0.0.1:8000/api1/createpost/'); 
      setBlogs(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  
  useEffect(() => {
    fetchBlogs();
  }, [blogs]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handlePost = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api1/createpost/", {
        title: titleInputRef.current.value,
        body: bodyInputRef.current.value,
        // author:author.current.value,
      });
      console.log(response.data);

      setBlogs((prevBlogs) => [
        ...prevBlogs,
        { title: response.data.title, body: response.data.body, author:response.data.author,image: response.data.image },
      ]);

      titleInputRef.current.value = "";
      bodyInputRef.current.value = "";
      // authorInputRef.current.value="";

    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };


  return (
    <>
      <button onClick={handleClick}>Blog</button>

      {isOpen && (
        <Modal 
          handlePost={handlePost}
          titleInputRef={titleInputRef}
          bodyInputRef={bodyInputRef}
          handleImageUpload={handleImageUpload}
          selectedImage={selectedImage}
          // authorInputRef={authorInputRef}
          cardRef={cardRef}  
          popupRef={popupRef}  
          closeModal={closeModal}

        />  
      )}

    {blogs.map(blog => (
  <Faq key={blog.id} title={blog.title} body={blog.body} author={blog.author.username}  image={blog.image}/>  
))}

    </>
  );
}

const Modal = ({handlePost, closeModal, titleInputRef, bodyInputRef, cardRef, popupRef, handleImageUpload,selectedImage}) => {
  const handleSubmit = async () => {
    await handlePost();
    closeModal();
  };

  return (
    <div className="fixed inset-0 grid place-items-center p-16 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-10" ref={popupRef}>
      <div ref={cardRef} className="md:w-full w-2/3 lg:w-2/3 lg:h-96 bg-dro_yellow shadow-lg flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl px-10 py-6 font-bold mb-1">
          Blog Here  
        </h2>
        <div className="relative">
        <div className="card py-6 px-16">
            <label htmlFor="image-upload" className="upload-button bg-dro_white px-8 py-2 md:px-4 md:py-1">
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
        </div>
        <div className="px-10 py-3 md:h-96 w-full">
          <div className="px-10 h-11 w-full">
            <input 
              ref={titleInputRef}
              className="h-10 w-full border py-3 border-dro_gray px-4 text-md text-dro_black resize-none"
              type="text" 
              placeholder="title"
            />
          </div>
          <div className="px-10 h-52 w-full">
            <input
              ref={bodyInputRef} 
              className="h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
              type="text"
              placeholder="Write Your Blog Here" 
            />
          </div>
          <div className="grid place-items-center pb-12 sm:flex-col md:flex-row lg:flex-row lg:pb-10">
            <button
              onClick={handleSubmit}
              className="bg-dro_green text-dro_white p-4 px-6 py-2"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
