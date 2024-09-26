import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data; // Ensure that the returned data structure matches the expected format
};
