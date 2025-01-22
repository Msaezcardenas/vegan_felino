import axios from 'axios';

const url = 'https://backend-ecommerce-production-4fe0.up.railway.app/api';

export const customFetch = axios.create({
  baseURL: url,
});
