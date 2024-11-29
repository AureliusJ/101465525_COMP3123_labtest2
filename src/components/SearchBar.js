import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ city, setCity }) => {
    const handleSearch = () => {
      // Add any logic here if you need to handle the search button click.
      console.log(`Searching for: ${city}`);
    };
  
    return (
      <div className="search-bar-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-bar"
          placeholder="Enter city"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  };
export default SearchBar;
