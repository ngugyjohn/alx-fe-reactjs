import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Looks like we cant find the user");
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url}>View GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
