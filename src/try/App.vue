<script setup>
const today = new Date();
</script>

<template>
  <main class="container">
    <div class="grid">
      <h1 class="page-title">Vue3 Playground</h1>
      <p>
        KOREA - {{ today.toLocaleString() }}<br />
        UTC - {{ today.toUTCString() }}
      </p>
    </div>
  </main>
</template>

<style scoped>
.page-title {
  color: gray;
}
</style>
