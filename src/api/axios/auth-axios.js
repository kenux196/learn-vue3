import useAppStore from '@/stores/appStore';
import axios from 'axios';

const authAxios = axios.create();

authAxios.interceptors.request.use(
  (config) => {
    config.auth = {
      username: config.data.userId,
      password: config.data.userPassword,
    };
    config.data = '';
    const appStore = useAppStore();
    console.log(appStore.counter);
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
