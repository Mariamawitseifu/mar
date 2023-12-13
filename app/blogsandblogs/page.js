'use client'
import { useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import Popup from 'reactjs-popup';
import Link from 'next/link';
import Detail from '@/app/detail/[id].js';

const blogsandblogs = () => {
 const [query, setQuery] = useState('');
 const [results, setResults] = useState({post_results: [], record_results: []});
 useEffect(() => {
  console.log('Query:', query);
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
      console.log(data); // Log the data to inspect its structure
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
      console.log(data); // Log the data to inspect its structure
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
      />
    }
  >
    <div>
      <ul>
        {results.post_results && results.post_results.map((result) => (
          <li key={result.id}>
            {/* Display the relevant data from the search results */}
            <Link href={`/detail/${result.id}`}>
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
        ))}
      </ul>
      <ul>
        {results.record_results && results.record_results.map((result) => (
          <li key={result.id}>
            {/* Display the relevant data from the search results */}
            <Link href={`/details/${result.id}`}>
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
        ))}
      </ul>
    </div>
  </Popup>
  </div>
  );
 };
 
 export default blogsandblogs;