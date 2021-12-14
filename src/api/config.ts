import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${
      localStorage.getItem('user-token') ||
      '652d6f18ce0f3c02bf115d87cb3f665cf6b57d14'
    }`,
  },
});

export default axiosInstance;
