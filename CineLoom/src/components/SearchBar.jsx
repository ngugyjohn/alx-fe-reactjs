import React from 'react';

const SearchBar = ({ query, setQuery, searchMovies }) => {
  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
        className="search-bar"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
