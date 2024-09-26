import axios from 'axios';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/users?q=';

// Function to search for users based on username, location, and repo count
export const fetchUserData = async (username, location = '', repos = 0) => {
    try {
        let query = `${username}`;

        if (location) {
            query += `+location:${location}`;
        }

        if (repos > 0) {
            query += `+repos:>${repos}`;
        }

        const response = await axios.get(`${GITHUB_SEARCH_URL}${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
