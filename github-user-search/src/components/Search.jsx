import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle the form submission and API request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the API call
    setError(false);  // Reset error state before making a new request
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set user data if API call is successful
    } catch (err) {
      setError(true);  // Set error state if API call fails
    } finally {
      setLoading(false); // Always set loading to false when done
    }
  };

  return (
    <div className="search-container">
      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}  {/* Display Loading when request is being processed */}

      {error && <p>"Looks like we can't find the user"</p>}  {/* Display Error if request fails */}

      {userData && (  {/* Display user data once successfully fetched */}
        <div>
          <img src={userData.avatar_url} alt={userData.login} />  {/* Avatar */}
          <p>{userData.login}</p>  {/* Username */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
