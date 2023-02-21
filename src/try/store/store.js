import { reactive } from 'vue';
import { User } from '../js/user.js';

export const store = reactive({
  player: new User('player', 0),
  setUserName(name) {
    if (name != '') {
      this.player.changeName(name);
    }
  },
});
