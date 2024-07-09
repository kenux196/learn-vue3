const url = 'https://jsonplaceholder.typicode.com';

function getUrl(path) {
  return url + path;
}

export default (instance) => ({
  getComments() {
    return instance.get(getUrl('/comments'));
  },
});
