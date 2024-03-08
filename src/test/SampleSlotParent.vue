<script setup>
import FancyList from './FancyList.vue';
</script>
<template>
  <FancyList>
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>
</template>
<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
