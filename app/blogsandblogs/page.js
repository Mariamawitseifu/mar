'use client';
import { useState, useEffect ,useRef} from "react";
import Cookies from "js-cookie"
import axios from 'axios';


export default function blogsandblogs(){
 const [user, setUser] = useState(null)
 const [isOpen, setIsOpen] = useState(false);
 const cardRef = useRef(null);
 const blurRef = useRef(null);
 const [isBlurred, setIsBlurred] = useState(false);
 const handleToggle = () => {
   setIsOpen((prevState) => !prevState);
 };


 
 const [isSmallScreen, setIsSmallScreen] = useState(false);

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
   const handleClickOutside = (event) => {
     if (blurRef.current && !blurRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   };

   document.addEventListener('mousedown', handleClickOutside);

   return () => {
     document.removeEventListener('mousedown', handleClickOutside);
   };
 }, []);
 useEffect(() => {
   const mediaQuery = window.matchMedia("(max-width: 640px)");
   setIsSmallScreen(mediaQuery.matches);

   const handleResize = () => {
     setIsSmallScreen(mediaQuery.matches);
   };

   mediaQuery.addEventListener("change", handleResize);

   return () => {
     mediaQuery.removeEventListener("change", handleResize);
   };
 }, []);

 const popupRef = useRef(null);

 useEffect(() => {

   const user = Cookies.get("user");
if (user !== undefined) {
 setUser(JSON.parse(user));
}


   const handleOutsideClick = (event) => {
     if (popupRef.current && !popupRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   };

   document.addEventListener('mousedown', handleOutsideClick);
   return () => {
     document.removeEventListener('mousedown', handleOutsideClick);
   };
 }, []);

 function Popupview() {
   const [isOpen, setIsOpen] = useState(false);
   const popupRef = useRef(null);
   const popupRef1 = useRef1(null);
 
   useEffect(() => {
     const handleOutsideClick = (event) => {
       if (popupRef.current && !popupRef.current.contains(event.target)) {
         setIsOpen(false);
       }
     };
 
     document.addEventListener('mousedown', handleOutsideClick);
 
     return () => {
       document.removeEventListener('mousedown', handleOutsideClick);
     };
   }, []);
 }
   const handleClickM = () => {
     setIsOpen(!isOpen);
     // setIsBlurred(!isBlurred);
   };
   function Buttons({ children }) {
    return (
      <button className="hover:bg-dro_yellow border bg-dro_white py-3 md:py-4 lg:py-5 px-4 md:px-8">
        {children}
      </button>
    );
  }
  const handleClickOutside = (event) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target) &&
      !event.target.classList.contains("font-semibold")
    ) {
      setIsOpen(false);
    }
  };
  
  const handleClick = () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    axios.post('api1/posts/', { title, content })
      .then(response => {
        console.log(response.data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error(error);
        // Handle the error as needed
      });
  };


  return(
<>
<div>
  {/* <Units/> */}
</div>
             <div>
  <button className="font-semibold text-lg" onClick={handleClickM}>
  Blog
</button>
      {isOpen &&
       (
        
        <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter" ref={popupRef}>
          <div ref={cardRef}  className="h-96 w-1/2 bg-dro_yellow shadow-lg">
            <h2 className="text-2xl px-10 py-6 font-bold mb-1">Blog Here</h2>
            <div class="w-96">
        <div class="relative px-10 py-3 h-52 w-full">
        <input
            class=" w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="title"
          />
          <input
            class="h-full w-full rounded border border-dro_gray px-4 text-md text-dro_black focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Write Your Blog Here"
          />
        </div>
      
      <div className=" px-28">
        <button className=" flex justify items-center px-10 w-32 h-10 bg-dro_green text-white " onClick={handleClick}>POST</button>
      </div>
          </div>
        </div>
      </div>
      )
      }
      {/* {isBlurred && <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>} */}
</div>



</>





  )

}


// 'use client'
// import { useState, useEffect, useRef } from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import Faq from "@/components/Faq";


// export default function Blogs({ title, body }) {
//   const cardRef = useRef(null);
//   const popupRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [newPostData, setNewPostData] = useState({ title: '', body: '' });
//   const [post, setPost] = useState({ title: '', body: '' });
//   const [posts,setPosts]=useState([]);
  
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

//   const handleClickM = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOutsideClick = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cardRef.current && !cardRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // useEffect(() => {
//   //   axios.get('http://localhost:8000/api/api/blog/')
//   //     .then(response => setPost(response.data))
//   //     .catch(error => console.error(error));
//   // }, []);

// //   const history = useHistory();

// // const handlePostButtonClick = () => {
// //   // Send the POST request to the server
// //   axios.post('http://localhost:8000/api/api/blog/create/', newPostData)
// //     .then(response => {
// //       console.log(response.data.title);
// //       console.log(response.data.body);
// //       console.log('Post created successfully!');

// //       // Create a new post object with the response data
// //       const newPost = {
// //         id: response.data.id,
// //         title: response.data.title,
// //         body: response.data.body,
// //         image: response.data.image,
// //       };

// //       // Update the posts state by adding the new post
// //       setPosts(prevPosts => [...prevPosts, newPost]);

// //       // Reset the input fields
// //       setNewPostData({ title: '', body: '' });

// //       // Navigate to the "/home" route
// //       // history.push("/home");
// //       window.location.href = '/Faq';
// //     })
// //     .catch(error => console.error(error));
// // };

//   // const handleInputChange = (event) => {
//   //   const { name, value } = event.target;
//   //   setNewPostData(prevData => ({
//   //     ...prevData,
//   //     [name]: value
//   //   }));
//   // };

//   // useEffect(() => {
//   //   console.log(post.title); // Log the post title whenever the post state changes
//   // }, [post]);

//   // import axios from 'axios';

//   const createBlogPost = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/api/blog/create/', {
//         // Add the data you want to send in the request body
//       });
//       console.log(response.data);
//       // Handle the response data
//     } catch (error) {
//       console.log(error);
//       // Handle any errors
//     }
//   };
  
//   // Call the function to make the POST request
//   createBlogPost();
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPostData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handlePostButtonClick = () => {
//     axios.post('http://localhost:8000/api/api/blog/create/', newPostData)
//       .then(response => {
//         console.log(response.data);
//         // Handle the response data as needed
  
//         // Reset the input fields
//         setNewPostData({ title: '', body: '' });
  
//         // Navigate to the "/Faq" route
//         // history.push("/Faq");
//         window.location.href = '/Faq';
//       })
//       .catch(error => {
//         console.error(error);
//         // Handle the error
//       });
//   };

  
  
  

//   return (
// <div>
//   <button className="font-semibold text-lg" onClick={handleClickM}>
//     Blog
//   </button>
//   {isOpen && (
//     <div className="fixed inset-0 grid place-items-center p-16 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-10" ref={popupRef}>
//  <div ref={cardRef} className="md:w-full w-2/3 lg:w-2/3 bg-dro_yellow shadow-lg flex flex-col justify-between">
//     <div>
//       <div className="flex flex-col md:flex-row justify-between">
//         <h2 className="text-2xl px-10 py-6 font-bold">Blog Here</h2>
//         <div className="relative">
//           <div className="card py-6 px-16">
//             <label htmlFor="image-upload" className="upload-button bg-dro_white px-8 py-2 md:px-4 md:py-1">
//               Choose Image
//               <input
//                 id="image-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//             {selectedImage && (
//               <img
//                 className="absolute top-2 right-2"
//                 src={selectedImage}
//                 alt="Selected"
//                 style={{ maxWidth: '40px' }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
        
//         <div className="px-10 py-3 md:h-52 w-full">
//           <div className="px-10 h-11 w-full">
//             <textarea
//               id="title"
//               className="h-10 w-full border py-3 border-dro_gray px-4 text-md text-dro_black resize-none"
//               type="text"
//               placeholder="Title"
//               name="title"
//               value={newPostData.title}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="px-10 h-52 w-full">
//             <textarea
//               id="content"
//               className="h-full w-full border border-dro_gray px-4 text-md text-dro_black resize-none"
//               placeholder="Write Your Blog Here"
//               name="body"
//               value={newPostData.body}
//               onChange={handleInputChange}
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//     <div className="grid place-items-center mt-16 pb-12 sm:flex-col md:flex-row lg:flex-row lg:pb-10">
//     <button
//   className="bg-dro_green text-dro_white p-4 px-6 py-2"
//   onClick={handlePostButtonClick}
// >
//   Post
// </button>
//     </div>
    
//   </div>
//   <div className="flex flex-col mt-4 md:mt-0 md:w-1/2 lg:w-2/3">
//   {posts.map(post => (
//     <div key={post.id}>
//       <h1 className="p-5 ml-5">{post.title}</h1>
//       <div className="px-5 md:px-10">{post.body}</div>
//     </div>
//   ))}
// </div>
// </div>
//   )}
// </div>

//   );
// }