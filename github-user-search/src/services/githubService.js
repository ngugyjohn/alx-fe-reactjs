import axios from 'axios';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
    try {
        let query = `${username}`;
        
        // Add location to the query if provided
        if (location) {
            query += `+location:${location}`;
        }

        // Add minRepos to the query if it's greater than 0
        if (minRepos > 0) {
            query += `+repos:>${minRepos}`;
        }

        // Make API request to GitHub
        const response = await axios.get(`${GITHUB_SEARCH_URL}${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
