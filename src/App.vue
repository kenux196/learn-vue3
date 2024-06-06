<template>
  <div class="q-pa-md">
    <q-layout
      view="1Hh lpr 1Ff"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm"></q-btn>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <q-toolbar-title>Quasar Framework</q-toolbar-title>
          <q-btn flat round dense icon="whatshot"></q-btn>
        </q-toolbar>
        <q-tabs v-model="tab">
          <q-tab name="home" label="Home" router-link to >
            <router-link to="/book" />
          </q-tab>
          <q-tab name="book" label="Books"></q-tab>
          <q-tab name="todo-list" label="Todo-List"></q-tab>
        </q-tabs>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <RouterView />
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
  <header class="container">
    <nav>
      <ul>
        <li><h3>Learn Vue3</h3></li>
      </ul>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/book">Book</router-link>
        </li>
        <li>
          <router-link to="/todo-list">ToDo</router-link>
        </li>
        <!-- <li>
          <router-link to="/new-todo-list">New Todo</router-link>
        </li> -->
        <li><router-link to="/posts">Posts</router-link></li>
        <li><router-link to="/store-sample">Store-Test</router-link></li>
        <!-- <li><router-link to="/color">Color</router-link></li> -->
        <li><router-link to="/emit-test">Emit-Test</router-link></li>
        <li><router-link to="/utils">Utils</router-link></li>
        <!-- <li><router-link to="/test">Test</router-link></li> -->
        <!-- <li><router-link to="/json-test">Json file load test</router-link></li> -->
      </ul>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>
<script setup>
import { ref } from 'vue';

const tab = ref('home');
</script>
