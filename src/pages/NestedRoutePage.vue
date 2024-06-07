<template>
  <div class="q-pa-md">
    <div class="q-my-md">중첩된 라우팅 연습</div>
    <div class="q-gutter-md row">
      <q-btn color="primary" to="/nested-route/sub-page1">Page1</q-btn>
      <q-btn color="primary" to="/nested-route/sub-page2">Page2</q-btn>
      <q-btn color="primary" to="/nested-route/sub-page3">Page3</q-btn>
      <q-btn color="primary" to="/nested-route/sub-page4">Page4</q-btn>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-guttoer-y-md">
      <q-tabs v-model="tab" inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="mails" icon="mail" label="메일" to="/nested-route/sub-page1" />
        <q-route-tab name="alarms" icon="alarm" label="알람" to="/nested-route/sub-page2" />
        <q-route-tab name="movies" icon="movie" label="영화" to="/nested-route/sub-page3" />
        <q-route-tab name="photo" icon="photo" label="사진" to="/nested-route/sub-page4" />
        <q-route-tab name="book" icon="book" label="책" to="/nested-route/books" />
      </q-tabs>
    </div>
  </div>
  <RouterView class="q-pa-md" />
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped></style>
