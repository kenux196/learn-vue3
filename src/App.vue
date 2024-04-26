<template>
  <header class="container mx-auto">
    <div class="bg-slate-200">
      <h1 class="text-3xl font-bold underline text-center">Learn Vue3</h1>
    </div>
    <nav>
      <div class="flex justify-around bg-slate-200">
        <div class="text-sl font-bold underline">
          <router-link to="/">Home</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/book">Book</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/todo-list">ToDo</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/new-todo-list">New Todo</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/posts">Posts</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/store-sample">Store-Test</router-link>
        </div>
        <!-- <li><router-link to="/color">Color</router-link></li> -->
        <div class="text-sl font-bold underline">
          <router-link to="/emit-test">Emit-Test</router-link>
        </div>
        <div class="text-sl font-bold underline">
          <router-link to="/utils">Utils</router-link>
        </div>
        <!-- <li><router-link to="/test">Test</router-link></li> -->
        <!-- <li><router-link to="/json-test">Json file load test</router-link></li> -->
      </div>
    </nav>
  </header>
  <main class="container mx-auto bg-slate-300">
    <RouterView />
  </main>
</template>
