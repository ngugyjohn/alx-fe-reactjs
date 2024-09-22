import { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search GitHub Username"
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default Search;
