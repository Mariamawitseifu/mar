'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Search() {
 const [query, setQuery] = useState('');
 const [results, setResults] = useState([]);

 const search = async () => {
 const response = await fetch(`http://127.0.0.1:8000/api1/api/search/?query=${query}`);
 const data = await response.json();
 const slicedResults = data.results.map(result => {
   const words = result.body.split(' ');
   const index = words.indexOf(query);
   const start = Math.max(0, index - 15);
   const end = Math.min(words.length, index + 15);
   result.body = words.slice(start, end).join(' ');
   return result;
 });
 setResults(slicedResults);
 };

 return (
 <div>
   <input
     type="text"
     value={query}
     onChange={(e) => setQuery(e.target.value)}
   />
   <button onClick={search}>Search</button>
   {results.map((result, index) => (
     <div key={index}>
       <Link href={`http://127.0.0.1:8000/api1/posts/${result.id}`}>
         <h2>{result.title}</h2>
       </Link>
       <Link href={`http://127.0.0.1:8000/api1/posts/${result.id}`}>
       <p>{result.body}</p>
       </Link>
     </div>
   ))}
 </div>
 );
}

