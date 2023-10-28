"use client"
// import axios from 'axios';

// const MyComponent = () => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/blog/create/', {
//         image: '/blog_images/ceO.JPG',
//         title: 'good news',
//         description: 'as the title says it is good',
//         user: 5,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = response.data;
//       console.log(data);
//       // Handle the response data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();

//   return (
//     // Your component content
//     <></>
//   );

// };

// export default MyComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [blogData, setBlogData] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!selectedImage) return;

//         const formData = new FormData();
//         formData.append('image', selectedImage);
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('user', '5');

//         const response = await axios.post('http://127.0.0.1:8000/api/blog/create/', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         const data = response.data;
//         setBlogData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [selectedImage, title, description]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
//       <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
//       {blogData && (
//         <div>
//           <h1>{blogData.title}</h1>
//           <p>{blogData.description}</p>
//           <img src={`http://127.0.0.1:8000${blogData.image}`} alt="Blog Image" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyComponent;


import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append the image, title, and description
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/blog/create/', formData);

      // Update the response state with the received data
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <img src={response.image} alt="Blog Post" />
          <h3>{response.title}</h3>
          <p>{response.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPostForm;