export default (instance) => ({
  fetchPosts() {
    return instance.get('/posts');
  },
  fetchComments() {
    return instance.get('/comments');
  },
});
