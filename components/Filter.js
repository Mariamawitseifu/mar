import { useState } from 'react';

async function searchHandler(req, res) {
  const { query } = req.query;

  try {
    const response = await fetch(`http://your-django-api/search/?query=${encodeURIComponent(query)}`);
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      console.error('Error:', response.status);
      res.status(500).json({ error: 'An error occurred' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`/your-app/search/?query=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
  <form className="flex flex-col md:flex-row" onSubmit={handleSearch}>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="md:mr-2"
  />
  <button type="submit" class="bg-dro_re hover:bg-dro_green text-dro_white font-bold py-2 px-2 md:py-2 md:px-2 lg:py-4 lg:px-4">
    {/* Search */}
  </button>
</form>

      <div>
        {results.map((result) => (
          <div key={result.title}>
            <h3>{result.title}</h3>
            <p>{result.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { searchHandler, SearchPage };