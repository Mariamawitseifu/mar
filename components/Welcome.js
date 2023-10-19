"use client"
import { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";

export default function Welcome() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const blurRef = useRef(null);
  // const cardRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  // const handleOutsideClick = (event) => {
  //   if (cardRef.current && !cardRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  const popupRef = useRef(null);

  useEffect(() => {

    const user = Cookies.get("user");
    
    if (user !== undefined) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
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
       
        
   <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-20" ref={blurRef}>
  
  {/* <div className="fixed top-0 left-0 right-0 bottom-0 bg-dro_white bg-opacity-75 backdrop-filter backdrop-blur-md" onClick={handleToggle}></div> */}
 
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full w-11/12 md:max-w-3xl md:w-auto">
    
    <div className="bg-dro_white shadow-lg rounded-lg  h-screen w-screen ">

<div className="p-8 h-full">


      <div className="h-full overflow-x-auto overflow-y-auto">
        <table className="border-collapse border-spacing-0">
          <thead className="sticky top-0 bg-dro_white border" >
            <tr >
              <th className="border text-left px-4 py-3 md:px-6 md:py-4">No.</th>
              <th className="border text-left px-4 py-3 md:px-6 md:py-4">Name</th>
              <th className="border text-left px-4 py-3 md:px-6 md:py-4">Internal Network</th>
              <th className="border text-left px-4 py-3 md:px-6 md:py-4">External Network</th>
              <th className="border text-left px-4 py-3 md:px-6 md:py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 md:px-6 md:py-4">1</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">PMS</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">www.pms.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">https//:drogapharma.com</td>
              <td className="border px-4 py-3 md:px-6 md:py-4">
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
     {/* <div className="">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  className=" w-14 sm:w-32 h-5 sm:h-10 placeholder:text-dro_black  border border-dro_black text-dro_black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
              </div> */}
                  {/* <div className="flex flex-row mr-24 ml-3 items-center justify-center">
          <Image src={log} height={20} width={20}/>
          <button className="hover:bg-dro_gray font-medium py-2 px-4">
            Log Out
          </button>
          </div> */}
