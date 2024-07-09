import axios from 'axios';
import boardApi from './board-api';

export const api = {
  board: boardApi(axios),
};
