import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch user data from GitHub API
  const fetchUserData = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);  // Reset user data for each new search
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  // Handling the form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (username) {
      fetchUserData(username);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}  {/* Handle loading state */}

      {error && <p>{error}</p>}  {/* Display the error message */}

      {userData && (
        <div className="user-details">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="user-avatar" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
