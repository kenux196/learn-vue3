<script>
export default {
  props: ['title'],
};
</script>

<template>
  <div class="blog-post">
    <h6>{{ title }}</h6>
    <button @click="$emit('enlarge-text')">텍스트확대</button>
  </div>
</template>
