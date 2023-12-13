// 'use client'
// import { Component, useState } from 'react';
// import axios from 'axios';
// import filter from 'Components/filter.css';
// import Highlighter from 'react-highlight-words';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, Typography } from '@material-ui/core';


// export default function Filter() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const router = useRouter();

//   // const handleSearch = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.get('http://127.0.0.1:8000/api/api/record/search/', {
//   //       params: {
//   //         query: query,
//   //       },
//   //     });
//   //     // Set the search results in the state
//   //     setResults(response.data.results);
//   //   } catch (error) {
//   //     // Handle any errors here
//   //     console.error('Error:', error);
//   //   }
//   // };
//   const [searchQuery, setSearchQuery] = useState('');
//   // const [results, setResults] = useState([]);
 
// //   const handleSearch = async () => {
// //     console.log('handleSearch called');
// //     try {
// //       const response = await axios.get('http://127.0.0.1:8000/api1/search/', {
// //         params: { query: searchQuery },
// //       });
// //       setResults(response.data.posts);
// //  console.log('Results:', results);
// //     } catch (error) {
// //       console.error('Error searching:', error);
// //     }
// //   };
// const handleSearch = async () => {
//   console.log('handleSearch called');
//   try {
//     const [response1, response2] = await Promise.all([
//       axios.get('http://127.0.0.1:8000/api/api/record/search/', {
//         params: { query: searchQuery },
//       }),
//       axios.get('http://127.0.0.1:8000/api1/search/', {
//         params: { query: searchQuery },
//       })
//     ]);
 
//     // Combine the results from both endpoints
//     const combinedResults = [...response1.data.results, ...response2.data.posts];
 
//     setResults(combinedResults);
//     console.log('Results:', combinedResults);
//   } catch (error) {
//     console.error('Error searching:', error);
//   }
//  };
 
 
//   const handleChange = (event) => {
//     setQuery(event.target.value);
//     if (event.target.value.length) {
//       fetch(`/api1/search?q=${event.target.value}`)
//         .then(response => response.json())
//         .then(data => {
//           setResults(data.posts);
//         });
//     } else {
//       setResults([]);
//     }
//   };
  
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch(e);
//     }
//   };
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//    // Fetch posts from your API
//    const fetchPosts = async () => {
//      try {
//        const response = await axios.get('http://127.0.0.1:8000/api1/posts');
//        setPosts(response.data);
//      } catch (error) {
//        console.error('Error fetching posts:', error);
//      }
//    };
  
//   //  fetchPosts();
//   }, []);
  
//   const handleResultClick = (id) => {
//     // Navigate to the location of the search result when clicked
//     const element = document.getElementById(`result-${id}`);
//     if (element) {
//       element.scrollIntoView();
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Search..."
//           className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//       <div className="results-container">
//         {/* {results.map((result) => (
//           <div
//             key={result.id}
//             id={`result-${result.id}`}
//             onClick={() => handleResultClick(result.id)}
//             style={{ cursor: 'pointer' }}
//             className="result-item"
//           >
//             <p>{result.name}</p>
//             <p>{result.internal_links}</p>
//             <p>{result.external_links}</p>
//           </div>
//         ))} */}
//         {/* {results.map((result) => (
//  <div
//   key={result.id}
//   id={`result-${result.id}`}
//   onClick={() => handleResultClick(result.id)}
//   style={{ cursor: 'pointer' }}
//   className="result-item"
//  >
//   <Highlighter
//     highlightClassName="YourHighlightClass"
//     searchWords={[searchQuery]}
//     autoEscape={true}
//     textToHighlight={result.title}
//   />
//   <Highlighter
//     highlightClassName="YourHighlightClass"
//     searchWords={[searchQuery]}
//     autoEscape={true}
//     textToHighlight={result.body}
//   />
//  </div>
// ))} */}
// {posts.map((post) => (
//  <Card key={post.id} style={{ margin: '10px' }}>
//    <CardContent>
//      <Typography variant="h5" component="h2">
//        <Highlighter
//          highlightClassName="YourHighlightClass"
//          searchWords={[searchQuery]}
//          autoEscape={true}
//          textToHighlight={post.title}
//          highlightStyle={{ backgroundColor: 'white', color: 'black' }}
//        />
//      </Typography>
//      <Typography variant="body2" component="p">
//        <Highlighter
//          highlightClassName="YourHighlightClass"
//          searchWords={[searchQuery]}
//          autoEscape={true}
//          textToHighlight={post.body}
//          highlightStyle={{ backgroundColor: 'white', color: 'black' }}
//        />
//      </Typography>
//    </CardContent>
//  </Card>
// ))}

// {results.map((post) => (
//  <Card key={post.id} style={{ margin: '10px' }}>
//    <CardContent>
//      <Typography variant="h5" component="h2">
//        <Highlighter
//          highlightClassName="YourHighlightClass"
//          searchWords={[searchQuery]}
//          autoEscape={true}
//          textToHighlight={post.title}
//          highlightStyle={{ backgroundColor: 'white', color: 'black' }}
//        />
//      </Typography>
//      <Typography variant="body2" component="p">
//        <Highlighter
//          highlightClassName="YourHighlightClass"
//          searchWords={[searchQuery]}
//          autoEscape={true}
//          textToHighlight={post.body}
//          highlightStyle={{ backgroundColor: 'white', color: 'black' }}
//        />
//      </Typography>
//    </CardContent>
//  </Card>
// ))}


//       </div>
//     </div>
//   );
// }
// "use client"
// import { Component, useState } from 'react';
// import axios from 'axios';
// import "../components/wide-popup.css";
// import Quicklinks from '@/app/quicklinks/page';
// import { useRouter } from 'next/navigation';
// import filter from 'Components/filter.css'
// import filter from 'Components/filter.css';
// import Popup from 'reactjs-popup';
// export default function Filter() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/api/record/search/', {
//         params: {
//           query: query,
//         },
//       });
//       // Set the search results in the state
//       setResults(response.data.results);
//       // Show the search results in a pop-up
//       setOpen(true);
//     } catch (error) {
//       // Handle any errors here
//       console.error('Error:', error);
//     }
//    };
   
//    const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch(e);
//       setOpen(true);
//     }
//    };
   
//   const handleResultClick = (id) => {
//     // Navigate to the location of the search result when clicked
//     const element = document.getElementById(`result-${id}`);
//     if (element) {
//       element.scrollIntoView();
//     }
//     router.push(`/quicklinks?openPopup=true`);
//     // setTimeout(() => {
//     //   router.push('/home');
//     // }, 1000);
//   };
//   return (
//     <div>

// <Popup
//  className="wide-popup"
//  position="bottom left"
//  trigger={
//  <input
//   type="text"
//   value={query}
//   onChange={(e) => setQuery(e.target.value)}
//   onKeyPress={(e) => {
//     if (e.key === 'Enter') {
//       handleSearch(e);
//       setOpen(true);
//     }
//   }}
//   placeholder="Search..."
//   className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//  />
//  }
//  open={open}
//  onClose={() => setOpen(false)}
// >
//  {results.length > 0 ? (
//  results.map((result) => (
//    <div
//      key={result.id}
//      id={`result-${result.id}`}
//      onClick={() => handleResultClick(result.id)}
//      style={{ cursor: 'pointer' }}
//      className="result-item"
//    >
//      {/* Render the search result data */}
//      <div className=' bg-dro_white w-auto h-auto'>
//       <thead>
//      <th className="border-2 border-black w-10">{result.name}</th>
//      <th className="border-2 border-black w-10">{result.internal_links}</th>
//      <th className="border-2 border-black w-10">{result.external_links}</th></thead>
//    </div>
//    </div>
//  ))
//  ) : (
//  <p>No results found</p>
//  )}
// </Popup>

//     </div>
//   );
// }

'use client'
import { useState, useEffect, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import Popup from 'reactjs-popup';
import Link from 'next/link';
import Detail from '@/app/detail/[id].js';
import Blog from '@/app/blog/page';
import { useRouter } from 'next/navigation';

const filter = () => {
 const [query, setQuery] = useState('');
 const [results, setResults] = useState({post_results: [], record_results: []});
 const router = useRouter();
 const isHighlighted = useRef(false);

 

 useEffect(() => {
  if (router.isReady) {
  if (router.query) {
   const blogID = router.query.id;
   localStorage.setItem('blogID', blogID);
  }
  }
 }, [router.isReady]);
 
 useEffect(() => {
  // console.log('Query:', query);
 if (query.trim() !== '') {
  // Fetch search results from the API
  fetch(`http://127.0.0.1:8000/api1/search/?query=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching search results');
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data); // Log the data to inspect its structure
      if (data && data.post_results && data.record_results) {
        setResults({post_results: data.post_results, record_results: data.record_results});
      } else {
        console.error('Invalid data structure in the API response');
        setResults({post_results: [], record_results: []});
      }
    })
    .catch((error) => {
      console.error('Error fetching search results:', error);
      setResults({post_results: [], record_results: []});
    });
 } else {
  setResults({post_results: [], record_results: []});
 }
 }, [query]);

 const handleInputChange = (event) => {
 setQuery(event.target.value);
 };

 const handleKeyPress = (event) => {
 if (event.key === 'Enter') {
  // Start search when Enter key is pressed
  search();
 }
 };

 const search = () => {
 if (query.trim() !== '') {
  // Fetch search results from the API
  fetch(`http://127.0.0.1:8000/api1/search/?query=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching search results');
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data); // Log the data to inspect its structure
      if (data && data.post_results && data.record_results) {
        setResults({post_results: data.post_results, record_results: data.record_results});
      } else {
        console.error('Invalid data structure in the API response');
        setResults({post_results: [], record_results: []});
      }
    })
    .catch((error) => {
      console.error('Error fetching search results:', error);
      setResults({post_results: [], record_results: []});
    });
 } else {
  setResults({post_results: [], record_results: []});
 }
 };

 return (
  <div>
  <Popup
    className="wide-popup"
    position="bottom left"
    trigger={
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="py-2 px-4 rounded-md border focus:outline-none bg-dro_white"
      />
    }
  >
    <div className=' bg-dro_white'>
      <ul>
        {results.post_results && results.post_results.map((result) => (
          <div style={{marginBottom: '1rem'}}>
        <li key={result.id}>
            {/* Display the relevant data from the search results */}
            <Link href="/blog" as={`/blog`} onClick={() => localStorage.setItem('blogID', result.id)}>
              <Highlighter
                highlightClassName="Highlight"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={result.title}
              />
              <Highlighter
                highlightClassName="Highlight"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={result.body}
              />
            </Link>
          </li>
          </div>
        ))}
      </ul>
      <div style={{marginBottom: '1rem'}}></div>
      <ul>
        {results.record_results && results.record_results.map((result) => (
             <div style={{marginBottom: '1rem'}}>
<li key={result.id} onClick={() => isHighlighted.current = true} className={isHighlighted.current ? 'highlight' : ''}>
            {/* Display the relevant data from the search results */}
            <Link href={`/quicklinks?openPopup=true`}>
              <Highlighter
                highlightClassName="Highlight"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={result.name}
              />
              <Highlighter
                highlightClassName="Highlight"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={result.internal_links}
              />
              <Highlighter
                highlightClassName="Highlight"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={result.external_links}
              />
            </Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  </Popup>
  </div>
  );
 };
 
 export default filter;