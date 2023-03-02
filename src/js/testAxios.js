import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/posts';

async function getData() {
  const data = await axios.get(url).then((res) => {
    return res.data;
  });

  console.log(data);
}

getData();
