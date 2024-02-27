<template>
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
        <li><router-link to="/posts">Posts</router-link></li>
        <li><router-link to="/store-sample">Store-Test</router-link></li>
        <li><router-link to="/color">Color</router-link></li>
        <li><router-link to="/utils">Utils</router-link></li>
        <!-- <li><router-link to="/test">Test</router-link></li> -->
        <li><router-link to="/api-test">API TEST</router-link></li>
      </ul>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>
