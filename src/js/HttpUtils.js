import axios from 'axios';

async function axiosGet(url) {
  const data = await axios(url).then((res) => res.data);
  return data;
}

export default axiosGet;
