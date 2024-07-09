const url = 'https://jsonplaceholder.typicode.com';

function getUrl(path) {
  return url + path;
}

export default (axios) => ({
  getPosts() {
    return axios.get(getUrl('/posts'));
  },
  getComments() {
    return axios.get(getUrl('/comments'));
  },
  getTodos() {
    return axios.get(getUrl('/todos'));
  },
});
