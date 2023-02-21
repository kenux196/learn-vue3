<script setup>
import { inject } from 'vue';
import { store } from '../store/store.js';
// const user = inject('user');
const userName = store.player.name;
</script>

<template>
  <p>
    반갑습니다. {{ store.player.name }} <br />
    vue3 놀이터입니다.<br />
    여러분의 도전을 환영합니다. 마음껏 놀아보세요.<br />
    이름을 입력해주세요:
    <input type="text" v-model="userName" /><button
      @click="store.setUserName(userName)"
    >
      확인
    </button>
  </p>
</template>
