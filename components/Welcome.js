"use client"
import { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";

export default function Welcome() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const blurRef = useRef(null);
  const cardRef = useRef(null);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const popupRef = useRef(null);

  useEffect(() => {
    // const user = Cookies.get("user");
    // if (user !== undefined) {
    //   setUser(JSON.parse(user));
    // }

    const user = Cookies.get("user");
    // console.log("User value:", user);
    if (user !== undefined) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        // Handle the case where the value is not valid JSON
        console.error("Invalid JSON:", error);
      }
    }

    const handleOutsideClick = (event) => {
      if (blurRef.current && event.target === blurRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Quick Links
      </button>
      {isOpen && (
        <div
          className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter z-20"
          ref={blurRef}
        >
          <div
            ref={cardRef}
            className="fixed top-1/4 inset-0 bg-background/80 blur-background bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-filter backdrop-blur-sm data-click-close"
          >
            <div className="flex items-center justify-center h-full">
              <table className="shadow-lg border-collapse border-spacing-0 bg-dro_white">
                <thead>
                  <tr>
                    <th className="border text-left px-6 py-4">No.</th>
                    <th className="border text-left px-6 py-4">Name</th>
                    <th className="border text-left px-6 py-4">Internal Network</th>
                    <th className="border text-left px-6 py-4">External Network</th>
                    <th className="border text-left px-6 py-4">
                      Actions{" "}
                      <button
                        className="ml-2 bg-dro_white px-2 py-1"
                        onClick={handleToggle}
                      >
                        X
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-8 py-4">1</td>
                    <td className="border px-8 py-4">PMS</td>
                    <td className="border px-8 py-4">www.pms.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                    <td className="border px-8 py-4">
                      <div>
                        <button className="mb-2">Delete</button>
                      </div>
                      <div>
                        <button>Edit</button>
                      </div>
                    </td>
                  </tr>
                  {/* Rest of the table rows */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}             {/* <div>
<button  className="font-semibold text-lg" onClick={handleClickM}>
Blog
</button>
    {isOpen &&
     (
      
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
      style={{ maxWidth:'40px' }}
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
              />
            </div>
            <div className="px-10 h-52 w-full">
              <textarea
                id="content"
                className=" h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
                placeholder="Write Your Blog Here"
              ></textarea>
              <div className="flex justify-center items-center">
                <button className="flex justify-center items-center px-10 w-32 h-10 bg-dro_green text-white"  onClick={handlePostBlog}>
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
    }
</div> */}