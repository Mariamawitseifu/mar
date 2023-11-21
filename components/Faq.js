'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Button from "../components/Button";
import "../components/animation.css";
import Image from 'next/image';
import moment from 'moment';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Faq({ title, body, author, image, publishedDate, visibleFaqs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isOppen, setIsOpenn] = useState([]);
  const [post, setPost] = useState([]);
  const [entry, setEntry] = useState();
  const [loadMoreFaqs, setLoadMoreFaqs] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [formattedDate, setFormattedDate] = useState('Invalid Date');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (publishedDate) {
      try {
        const date = moment(publishedDate).format('LL');   
        setFormattedDate(date);
      } catch (error) {
        setFormattedDate('Invalid Date');
      }
    } else {
      setFormattedDate('Invalid Date');
    }
  }, [publishedDate]);
  
  const lastCardRef = useRef();
  const observer = useRef();

  useEffect(() => {
    let currentObserver;

    if (!observer.current) {
      currentObserver = new IntersectionObserver(handleIntersect);
      observer.current = currentObserver;
    } else {
      currentObserver = observer.current;
    }

    if (lastCardRef.current) {
      currentObserver.observe(lastCardRef.current);
    }
  }, []);

  const handleLoadMore = async () => {
    setFilteredPosts(prev => [
      ...prev,
      ...posts.slice(prev.length, prev.length + 5)
    ]);
    setLoadMoreFaqs(prev => !prev); // Toggle the loadMoreFaqs state
  };

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api1/posts/", {
        });
        setPosts(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(0);
  },);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api1/posts/");
    setPosts(response.data.results);
  }

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClickload = () => {
    setIsOpenn(true);
  };

  const handleIntersect = async (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      await handleLoadMore();
    }
  };

console.log(`The image  ${image}`);

  return (
    <div
      data-aos="fade-up"
      data-te-animation-init
      data-te-animation-reset="true"
      data-te-animation="[slide-right_1s_ease-in-out]"
      className="animate-slide-right_1s_ease-in-out"
    >
      <div className="flex flex-col ">
        <div className="mb-12 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
          <div className="flex lg:flex-row sm:flex-row justify-end">
          <div className="w-full h-80 relative">
          <img src={`http://127.0.0.1:8000/${image}`} style={{objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%'}} />
</div>
            <div className="flex flex-col justify-center ml-24 w-full">
              <div className="font-bold sm:mt-3 text-xl sm:text-lg">{title}</div>
              <div className="text-md sm:text-sm font-medium"></div>
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
              <div>{formattedDate}</div>
              <div className=' font-bold text-lg'>
                {author.username}
              </div>
            </div>
          </div>
        </div>

        {posts && posts.length > 0 && (
          <div>
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                // className=" sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg mt-4"
                data-blog-id={post.id}
                ref={index === filteredPosts.length - 1 ? lastCardRef : null}
              >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>
                  Author: {post.author.username}
                </p>
                <p>Published Date: {post.publishedDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
