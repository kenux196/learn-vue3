import axios from 'axios';
import boardApi from './board-api';
import commentApi from './comment-api';

const axiosInstanceWithAuth = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'user-name': 'kenux',
  },
});

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstanceWithAuth.interceptors.request.use(
  (config) => {
    console.log(`[axiosInstance.interceptors.request] (before) config = ${config.headers['user-name']}`);
    config.headers['user-name'] = 'kenux333';
    console.log(`[axiosInstance.interceptors.request] (after) config = ${config.headers['user-name']}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstanceWithAuth.interceptors.response.use(
  (response) => {
    console.log(`[axios interceptor response] status: ${response.status}`);
    return response;
  },
  (error) => {
    console.log(`[axios interceptor response] error: ${error}`);
    return Promise.reject(error);
  }
);

export const api = {
  board: boardApi(axiosInstanceWithAuth),
  comment: commentApi(axiosInstance),
};
