import React, { useState, useEffect } from "react";
import "./SolarSystemSearch.css"

const SolarSystemSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const result = await makeApiRequest(`/solar-system/search?q=${searchQuery}`);
        setSearchResults(result);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchQuery.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="solar-system-search">
      <h1>SEARCH!</h1>
      <h2>Solar System Search</h2>
      <label>
        Search Celestial Bodies:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <ul>
        {searchResults.map((body) => (
          <li key={body.id}>{body.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SolarSystemSearch;
