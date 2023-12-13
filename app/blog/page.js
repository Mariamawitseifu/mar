'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import format from 'date-fns/format';
import Image from 'next/image';

export default function Blog() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [post, setPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const deletePost = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");

    setIsDeleteClicked(true);
    if(confirmDelete){
    try {
     const response = await axios.delete(`http://127.0.0.1:8000/api1/deleteposts/${postId}`);
     if (response.status === 204) {
       // If the server returns a 204 status, the post was deleted successfully
       // You can then update your state to remove the post from the list
       setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
     }
     window.location.reload();
    } catch (error) {
     console.error('Error:', error);
    } finally {
     setIsDeleteClicked(false);
    }
   };
  }
  function formatPublished_date(dateString) {
    const date = new Date(dateString)
    return format(date, 'dd MMM yyyy') 
  }
  
  // Usage
  
  const formattedDate = post ? post.published_date.slice(0,10) : null;
  
  // usage
  <p>{formattedDate}</p>
  function formatDate(date) {
    return date.slice(0, 10);
  }
  
  // Fetch the id from local storage
  useEffect(() => {
   const blogId = localStorage.getItem('blogID');
   setId(blogId);
  }, []);
 
  useEffect(() => {
   const fetchPost = async () => {
     try {
       const response = await fetch(`http://127.0.0.1:8000/api1/posts/${id}/`);
       const data = await response.json();
       setPost(data);
     } catch (error) {
       console.error('Error fetching post:', error);
     }
   };
 
   if (id) {
     fetchPost();
   }
  }, [id]);
 
  if (!post) {
   return <div>Loading...</div>;
  }
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
   <div>
     {/* <h1>{post.title}</h1>
     <p>{post.body}</p>
     <p>Published at: {post.published_date}</p>
     <p>Author: {post.author.username} ({post.author.role})</p>
     {post.image && <img src={post.image} alt={post.title} />} */}
     <div className="mb-12 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
          <div className="flex lg:flex-row sm:flex-row justify-end">
          <div className="w-full h-80 relative overflow-auto">
          <img src={`http://127.0.0.1:8000/${post.image}`} style={{objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%'}} />
</div>
            <div className="flex flex-col justify-center ml-24 w-full">
              <div className="font-bold sm:mt-3 text-xl sm:text-lg">{post.title}</div>
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
                <div style={{overflow: 'auto', maxHeight: '200px'}}>
                  <p>{post.body}</p>
                </div>
              )}
               {/* <p>{published_date}</p> 
                 */}
                 <p>{formatDate(post.published_date)}</p>
                 {/* <p>{formatPublished_date(published_date)}</p> */}
              <div className=' font-bold text-lg'>
                {post.author.username}
              </div>
              <div className="flex px-10 justify-end">
  <div className="flex-1"></div>

  <FiTrash2
    className="text-red-500 w-6 h-6"
    onClick={deletePost} 
  />
</div>   </div>
          </div>
        </div>
   </div>
  );
 }
 
