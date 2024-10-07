import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import  "./Search_Bar.css";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
     <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input 
        type="text" 
        placeholder="Search " 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
