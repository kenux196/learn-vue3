import { reactive } from 'vue';
import { bookMemoryRepository } from '../js/BookRepository.js';

export const store = reactive({
  player: null,
  setUser(user) {
    this.player = user;
  },
  bookRepository: bookMemoryRepository,
});
