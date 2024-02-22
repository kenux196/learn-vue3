<script setup>
const props = defineProps(['title']);
console.log(props);
defineEmits(['enlarge-text']);
</script>

<template>
  <div class="blog-post">
    <h6>{{ title }}</h6>
    <button @click="$emit('enlarge-text')">텍스트 확대</button>
  </div>
</template>
