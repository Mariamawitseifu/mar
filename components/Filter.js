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
"use client"
import { Component, useState } from 'react';
import axios from 'axios';
import "../components/wide-popup.css";
import Quicklinks from '@/app/quicklinks/page';
import { useRouter } from 'next/navigation';
// import filter from 'Components/filter.css'
// import filter from 'Components/filter.css';
import Popup from 'reactjs-popup';
export default function Filter() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/api/record/search/', {
        params: {
          query: query,
        },
      });
      // Set the search results in the state
      setResults(response.data.results);
      // Show the search results in a pop-up
      setOpen(true);
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
   };
   
   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
      setOpen(true);
    }
   };
   
  const handleResultClick = (id) => {
    // Navigate to the location of the search result when clicked
    const element = document.getElementById(`result-${id}`);
    if (element) {
      element.scrollIntoView();
    }
    router.push(`/quicklinks?openPopup=true`);
    // setTimeout(() => {
    //   router.push('/home');
    // }, 1000);
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
  onChange={(e) => setQuery(e.target.value)}
  onKeyPress={(e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
      setOpen(true);
    }
  }}
  placeholder="Search..."
  className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
 />
 }
 open={open}
 onClose={() => setOpen(false)}
>
 {results.length > 0 ? (
 results.map((result) => (
   <div
     key={result.id}
     id={`result-${result.id}`}
     onClick={() => handleResultClick(result.id)}
     style={{ cursor: 'pointer' }}
     className="result-item"
   >
     {/* Render the search result data */}
     <div className=' bg-dro_white w-auto h-auto'>
      <thead>
     <th className="border-2 border-black w-10">{result.name}</th>
     <th className="border-2 border-black w-10">{result.internal_links}</th>
     <th className="border-2 border-black w-10">{result.external_links}</th></thead>
   </div>
   </div>
 ))
 ) : (
 <p>No results found</p>
 )}
</Popup>

    </div>
  );
}