<script setup>
import { User } from '../js/user';
import { store } from '../stores/store.js';
// const user = inject('user');
function createUser() {
  const name = 'player ' + Math.floor(Math.random() * 100);
  const user = new User(name, 10);
  store.setUser(user);
  return user;
}

createUser();
</script>

<template>
  <p>
    반갑습니다. {{ store.player.name }} 님!<br />
    vue3 놀이터입니다.<br />
    여러분의 도전을 환영합니다. 마음껏 놀아보세요.<br />
    이름을 입력해주세요:
    <!-- <input type="text" v-model="user.name" /><button
      @click="store.setUser(userName)"
    >
      확인
    </button> -->
  </p>
</template>
