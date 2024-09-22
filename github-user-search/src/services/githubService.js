import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const searchGitHubUser = (username) => {
    return axios.get(`${BASE_URL}/${username}`);
};
