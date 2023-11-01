'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Faq({ title, body }) {
  const cover = ["land.png", "news.png"];
  const [currentImage, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api1/posts/");
        console.log("API Response:", response.data);
        setPosts(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api1/posts/");
        setPosts(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cover.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h1 className="px-12 text-2xl font-semibold relative mb-12">Announcements and Blogs</h1>
      </div>

      <div className="ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
        <div className="flex lg:flex-row sm:flex-row justify-end">
          <div className="w-full h-72 relative">
            <div className="relative w-full h-full perspective-3d">
              <div className="relative w-full h-full transform transition-all duration-500 hover:scale-105 hover:opacity-50">
                {cover.map((image, index) => (
                  <div
                    key={index}
                    className={`image-container ${index === currentImage ? 'active' : ''}`}
                  >
                    <img
                      src={`/image/${image}`}
                      alt="Image"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-80">
            <div className="font-bold sm:mt-3 text-xl sm:text-lg">{title}</div>
            <div className="text-md sm:text-sm font-medium">
              {/* <h2>{title}</h2> */}
              
            </div>
            <div className="sm:mb-3">
              {!isOpen && (
                <button
                  className="rectangle-button float bg-dro_black inline-block px-4 py-2 mt-10 right-5 sm:mt-6 sm:py-2 text-dro_white"
                  onClick={handleClick}
                >
                  See More
                </button>
              )}
            </div>
            {isOpen && (
  <div>
    <p>{body}</p>
    {posts && posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id} className="mt-4">
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))
    ) : (
      <p></p>
    )}
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
}