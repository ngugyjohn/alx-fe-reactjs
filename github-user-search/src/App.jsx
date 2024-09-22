import { useState } from 'react';
import Search from './components/Search';  // Import the Search component
import { fetchUserData } from './services/githubService';  // API call logic

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle the search process
  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);  // Reset user data when a new search starts

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* Render the Search form */}
      <Search onSearch={handleSearch} />

      {/* Render loading message */}
      {loading && <p>Loading...</p>}

      {/* Render error message if user is not found */}
      {error && <p>{error}</p>}

      {/* Render user data if available */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" className="avatar" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
