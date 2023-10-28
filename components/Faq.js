'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./NavBar";
import Blogs from "/app/blogsandblogs/page";

export default function Faq() {
  const cover = ["land.png", "news.png"];
  const [currentImage, setCurrentImageIndex] = useState(0);
  const [post, setPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [blogPost, setBlogPost] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % cover.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };


  // console.log(`This is the ${posts}`);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blog-posts/92/')
      .then(response => response.json())
      .then(data => setBlogPost(data))
      .catch(error => console.log(error));

  }, []);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  const { image, title, description } = blogPost || {};






  

  return (
    <div className="flex flex-col">
      {/* <Navbar post={post} /> */}

      <div className="flex items-center justify-center">
        <h1 className="px-12 text-2xl font-semibold relative mb-12">Announcements and Blogs</h1>
      </div>

      <div className="ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
        <div className="flex lg:flex-row sm:flex-row justify-end">
          <div className="w-full h-72 relative">
            <div className="relative w-full h-full perspective-3d">
              <div className="relative w-full h-full transform transition-all duration-500 hover:scale-105 hover:opacity-50">
                
                
                {/* {cover.map((image, index) => (
                  <div
                    key={index}
                    className={`image-container ${index === currentImage ? 'active' : ''}`}
                  >
                    <Image
                      src={`/image/${image}`}
                      alt="Image"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
                  </div>
            
                ))} */}

 <div>
  <Image
    src={`data:image/jpeg;base64,${image}`}
    alt="Blog Post"
    width={520} // Specify the desired width
    height={20} // Specify the desired height
  />
  {/* <h2>{title}</h2>
  <p>{description}</p> */}
</div>

              </div>
            </div>
          </div>       
          <div className="flex flex-col justify-center px-80">
            <div className="font-bold sm:mt-3 text-xl sm:text-lg">{post.title}</div>
            <div className="text-md sm:text-sm font-medium">  <h2>{title}</h2>
      <p>{description}</p>
            
            {/* <div>
      <img src={`data:image/jpeg;base64,${image}`} alt="Blog Post" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div> */}
            
            
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
  posts.map((post) => (
    <div key={post.id} className="mt-4">
      <p>test this now123 {post.title}</p>
      <p>{post.body}</p>
      {/* Additional content to display when "See More" is clicked */}
      <p className="mt-4">Additional content here...</p>
    </div>
  ))
)}
          </div>
        </div>
      </div>
    </div>
  );
}