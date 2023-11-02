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

  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || [])

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs])

  // rest of state

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api1/posts/'); 
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
      });
      console.log(response.data);

      setBlogs((prevBlogs) => [
        ...prevBlogs,
        { title: response.data.title, body: response.data.body },
      ]);

      titleInputRef.current.value = "";
      bodyInputRef.current.value = "";

    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <button onClick={handleClick}>Blog</button>

      {isOpen && (
        <Modal 
          handlePost={handlePost}
          titleInputRef={titleInputRef}
          bodyInputRef={bodyInputRef}
        />  
      )}

    {blogs.map(blog => (
  <Faq key={blog.id} title={blog.title} body={blog.body} />  
))}

    </>
  );
}
;

const Modal = ({handlePost, titleInputRef, bodyInputRef}) => (
  <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter">
    <div className="h-96 w-1/2 bg-dro_yellow shadow-lg">

      <h2 className="text-2xl px-10 py-6 font-bold mb-1">
        Blog Here  
      </h2>

      <div className="w-96">

        <div className="relative px-10 py-3 h-52 w-full">

          <input 
            ref={titleInputRef}
            className="w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
            type="text" 
            placeholder="title"
          />

          <input
            ref={bodyInputRef} 
            className="h-full w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Write Your Blog Here" 
          />

        </div>

        <div className="px-28">

          <button
            onClick={handlePost}
            className="flex justify items-center px-10 w-32 h-10 bg-dro_green text-white"
          >
            POST
          </button>

        </div>

      </div>

    </div>
  </div>
)
