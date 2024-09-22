import { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Update the search term in state
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Submit the search term when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Enter GitHub Username" 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
