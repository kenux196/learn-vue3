import { reactive } from 'vue';
import { User } from '../js/user.js';
import { bookList } from '../js/book.js';

export const store = reactive({
  player: null,
  setUser(user) {
    this.player = user;
  },
  books: bookList,
});
