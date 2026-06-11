
import { getCookie } from '@/helpers/getCookie';
import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_URL;

export const backendPath = axios.create({
    baseURL: `${BASE_URL}/api/Disclone/`
});

backendPath.interceptors.request.use((config) => {
  
    const token = getCookie('token'); // Setting Key

    if (token) {
        config.headers['x-token'] = token;
    }

    return config;
});