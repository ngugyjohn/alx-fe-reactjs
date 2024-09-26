import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [repos, setRepos] = useState(0);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username, location, repos);
            setUserData(data.items); // GitHub search returns items array
        } catch (err) {
            setError('Looks like we can’t find the user');
        } finally {
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
                    placeholder="GitHub Username"
                    required
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                />
                <input
                    type="number"
                    value={repos}
                    onChange={(e) => setRepos(e.target.value)}
                    placeholder="Minimum Repositories"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            
            {userData && (
                <div>
                    {userData.map((user) => (
                        <div key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <p>Location: {user.location || 'Not specified'}</p>
                            <p>Public Repositories: {user.public_repos}</p>

                            <p>{user.login}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                Visit Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
