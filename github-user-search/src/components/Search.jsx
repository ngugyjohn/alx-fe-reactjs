import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle the form submission and API request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true before making the API call
    setError(false);   // Reset the error state before making a new request
    setUserData([]); // Clear previous user data

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos });
      setUserData(data.items); // Set user data if API call is successful
    } catch (err) {
      setError(true);  // Set error state if API call fails
    } finally {
      setLoading(false); // Always set loading to false when done
    }
  };

  return (
    <div className="search-container p-6 max-w-lg mx-auto">
      {/* Form for user input */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}  {/* Display Loading when request is in progress */}
      {error && <p>Looks like we can't find the user</p>}  {/* Error message */}

      {/* Displaying search results */}
      {userData.length > 0 && (
        <div className="mt-6 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow-md">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <p>{user.login}</p>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
