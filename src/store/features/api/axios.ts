import axios from 'axios';

const API_BASE_URL = 'https://ergast.com/api/';
const ApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiClient;
