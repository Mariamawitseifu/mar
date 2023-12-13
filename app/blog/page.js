
'use client'
import React, { useState, useEffect } from 'react';
import Test from "../test/page"
export default function blog (){
    const [visiblePosts, setVisiblePosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api1/posts?page=${currentPage}`);
        const data = await response.json();
        
        if (currentPage === 1) {
          setVisiblePosts(data);
        } else {
          setVisiblePosts(prevVisiblePosts => {
            const lastFetchedPage = prevVisiblePosts.length / numVisiblePosts;
            if (lastFetchedPage === currentPage - 1) {
              const uniqueIds = new Set(prevVisiblePosts.map(post => post.id));
              const newPosts = data.filter(post => !uniqueIds.has(post.id));
              return [...prevVisiblePosts, ...newPosts];
            } else {
              return data;
            }
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, [currentPage]);
  
    const handleLoadMoreClick = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    return<>
    <Test visiblePosts={[...visiblePosts].reverse()} />
    </>
}