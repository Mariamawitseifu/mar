'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import Button from "./Button";

export default function Faq({ title, body, author,image }) {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [blogs1, setBlogs1] = useState([]);
  const [page1, setPage1] = useState(1);
  const [blogs2, setBlogs2] = useState([]);
  const [page2, setPage2] = useState(1);

  const handleLoadMore1 = async () => {
    setLoading(true);
    const response = await axios.get(`/blogs1?page=${page1}`);
    setBlogs1(prev => [...prev, ...response.data]);
    setPage1(prev => prev + 1);
    setLoading(false);
  }

  const handleLoadMore2 = async () => {
    setLoading(true);
    const response = await axios.get(`/blogs2?page=${page2}`);
    setBlogs2(prev => [...prev, ...response.data]);
    setPage2(prev => prev + 1);
    setLoading(false);
  }

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api1/posts/", {
          params: {
            limit: 3, 
            offset: page * 3
          }
        });
        setPosts(response.data.results);
        setTotalPosts(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(0);
  }, []);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api1/posts/", {
          params: {
            limit: 3, 
            offset: page * 3
          }
        });
        setPosts(response.data.results);
        setTotalPosts(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };
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
            {/* Display the announcement image here */}
            {image}
          </div>

          <div className="flex flex-col justify-center px-80">
            {/* <div>{published_date}</div> */}
            <div className="font-bold sm:mt-3 text-xl sm:text-lg">{title}</div>
            <div className="text-md sm:text-sm font-medium">
              {/* Display the announcement body here */}
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
              </div>
            )}
          </div>
        </div>
      </div>

      {posts && posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg mt-4">
              <div className="flex flex-col justify-center px-80">
                <div className="font-bold sm:mt-3 text-xl sm:text-lg">{post.title}</div>
                <div className="text-md sm:text-sm font-medium">
                  {post.body}
                  {post.author}
                </div>
                {/* <div>{published_date}</div> */}
              </div>
            </div>
          ))}
          {posts.length < totalPosts && (
            <div>
              <Button onClick={handleLoadMore1}>Load More Blogs 1</Button>
              <Button onClick={handleLoadMore2}>Load More Blogs 2</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
