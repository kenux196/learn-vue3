<template>
  <h5>Login Test</h5>
  <div><label>ID: </label><input type="text" v-model="userId" /></div>
  <div><label>암호: </label><input type="password" v-model="userPassword" /></div>
  <button @click="loginProcess">로그인</button>
</template>

<script setup>
import { $api } from '@/api/api';
import { ref } from 'vue';

const userId = ref('kenux');
const userPassword = ref('password1004');

function loginProcess() {
  $api.auth.login(userId.value, userPassword.value);
}
</script>

<style lang="scss" scoped></style>
