export default (instance) => ({
  fetchPosts() {
    return instance.get('/posts');
  },
  fetchTodos() {
    return instance.get('/todos');
  },
  fetchTodoById(id) {
    return instance.get(`/todos/${id}`);
  },
  fetchComments() {
    return instance.get('/comments');
  },
});
