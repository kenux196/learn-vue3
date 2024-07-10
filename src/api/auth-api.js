export default (instance) => ({
  login(id, password) {
    return instance.post('/login', {
      userId: id,
      userPassword: password,
    });
  },
});
