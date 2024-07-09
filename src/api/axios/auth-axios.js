import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123123',
  },
});

authAxios.interceptors.request.use(
  (config) => {
    config.auth = {
      username: config.data.userId,
      password: config.data.userPassword,
    };
    config.data = '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;
