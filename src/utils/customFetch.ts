import axios from 'axios';

const url = 'http://localhost:8080/api';

export const customFetch = axios.create({
  baseURL: url,
});
