<template>
  <div class="q-pa-md">
    <div class="q-guttoer-y-md">
      <q-tabs v-model="tab" inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="emit" label="Emit" to="/vue/emit" />
        <q-route-tab name="todo-list1" label="todo-list1" to="/vue/todo-list1" />
        <q-route-tab name="todo-list2" label="todo-list2" to="/vue/todo-list2" />
        <q-route-tab name="store" label="Store" to="/vue/store" />
        <q-route-tab name="utils" label="utils" to="/vue/utils" />
        <q-route-tab name="login" label="login" to="/vue/login" />
        <q-route-tab name="vue-query" label="vue-query" to="/vue/vue-query" />
      </q-tabs>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('utils');
</script>

<style lang="scss" scoped></style>
