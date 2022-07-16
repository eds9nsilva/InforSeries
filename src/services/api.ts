import axios from 'axios';

const baseURL = 'https://api.tvmaze.com/';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
