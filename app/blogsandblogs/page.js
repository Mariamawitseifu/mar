'use client'
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default function Blogs({ title, body }) {
  const cardRef = useRef(null);
  const popupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newPostData, setNewPostData] = useState({ title: '', body: '' });
  const [post, setPost] = useState({ title: '', body: '' });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    axios.get('http://localhost:8000/api/api/blog/')
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, []);

//   const history = useHistory();

  const handlePostButtonClick = () => {
    // Send the POST request to the server
    axios.post('http://localhost:8000/api/api/blog/', newPostData)
      .then(response => {
        console.log(response.data.title);
        console.log(response.data.body);
        console.log('Post created successfully!');
  
        // Optionally, you can update the post data in the state with the response data
        setPost(response.data);
  
        // Navigate to the "/home" route
        // history.push("/home");
        window.location.href = '/home';
      })
      .catch(error => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPostData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log(post.title); // Log the post title whenever the post state changes
  }, [post]);

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Blog12
      </button>
      {isOpen && (
        <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter z-10" ref={popupRef}>
          <div ref={cardRef} className="h-1/2 w-1/2 bg-dro_yellow shadow-lg">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl px-10 py-6 font-bold animate-bounce">Blog Here</h2>
              <div className="relative">
                <div className="card py-6 px-16">
                  <label htmlFor="image-upload" className="upload-button bg-dro_white px-8 py-2">
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
            <div>
              <div className="px-10 py-3 h-52 w-full">
                <div className="px-10 h-11 w-full">
                  <textarea
                    id="title"
                    className="h-10 w-full border py-3 border-dro_gray px-4 text-md text-dro_black resize-none"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newPostData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-10 h-52 w-full">
                  <textarea
                    id="content"
                    className=" h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
                    placeholder="Write Your Blog Here"
                    name="body"
                    value={newPostData.body}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex justify-end px-10">
                <button
                  className="bg-dro_green text-dro_white px-6 py-2 mt-4"
                  onClick={handlePostButtonClick}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
          <h1 className='bg-dro_yellow p-5 ml-5'>{post.title}</h1>

         <div>{post.body}
</div>
          </div>
        </div>
      )}
    </div>
  );
}