import { useState } from 'react';
import axios from 'axios';

export default function Filter() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleResultClick = (id) => {
    // Navigate to the location of the search result when clicked
    const element = document.getElementById(`result-${id}`);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search..."
          className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="results-container">
        {results.map((result) => (
          <div
            key={result.id}
            id={`result-${result.id}`}
            onClick={() => handleResultClick(result.id)}
            style={{ cursor: 'pointer' }}
            className="result-item"
          >
            {/* Render the search result data */}
            <p>{result.name}</p>
            <p>{result.internal_links}</p>
            <p>{result.external_links}</p>
          </div>
        ))}
      </div>
    </div>
  );
}