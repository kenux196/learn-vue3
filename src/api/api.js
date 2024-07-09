import axios from 'axios';
import boardApi from './board-api';

const axiosInstance = axios.create();

export const api = {
  board: boardApi(axiosInstance),
};
