import axios from 'axios';

async function axiosGet(url) {
  return await axios(url).then((res) => res.data);
}

export default axiosGet;
