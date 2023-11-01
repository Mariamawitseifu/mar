"use client"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Popupview({ postTitle, postBody }) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Blog
      </button>

      {isOpen && (
        <div
          className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-10"
          ref={popupRef}
        >
          <div className="h-1/2 w-1/2 bg-dro_yellow shadow-lg">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl px-10 py-6 font-bold animate-bounce">Blog Here</h2>
              <div className="relative">
                <div className="card py-6 px-16"></div>
              </div>
            </div>
            <div>
              <div className="px-10 py-3 h-52 w-full">
                <div className="px-10 h-11 w-full">
                  <textarea
                    id="title"
                    className="h-10 w-full border py-3 border-dro_gray px-4 text-md text-dro_black resize-none"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={postTitle}
                    onChange={() => {}}
                  />
                </div>
                <div className="px-10 h-52 w-full">
                  <textarea
                    id="content"
                    className=" h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
                    placeholder="Write Your Blog Here"
                    name="body"
                    value={postBody}
                    onChange={() => {}}
                  />
                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center px-10 w-32 h-10 bg-dro_green text-white">
                      POST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col">
            <h1 className="bg-dro_yellow p-5 ml-5">{postTitle}</h1>
            <div>{postBody}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const BlogPost = () => {
  const [post, setPost] = useState({ title: '', body: '' });
  const [newPostData, setNewPostData] = useState({ title: '', body: '' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/api/blog/')
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handlePostButtonClick = () => {
    axios
      .post('http://localhost:8000/api/api/blog/', newPostData)
      .then((response) => {
        console.log(response.data.title);
        console.log(response.data.body);
        console.log('Post created successfully!');

        setPost(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(post.title);
  }, [post]);

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Blog
      </button>

      {isOpen && (
        <Popupview postTitle={post.title} postBody={post.body} />
      )}

      {/* Rest of your component code */}
    </div>
  );
};

export default BlogPost;