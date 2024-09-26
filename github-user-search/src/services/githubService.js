import axios from 'axios';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

// Function to fetch users based on advanced search criteria
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : '';  // Search by username
  
  // Add location to the query if provided
  if (location) {
    query += ` location:${location}`;
  }

  // Add minimum repositories to the query if provided
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(GITHUB_SEARCH_URL, {
    params: {
      q: query,  // GitHub search query
      per_page: 10,  // Limit results to 10 users per page (can add pagination later)
    },
  });
  return response.data;
};
