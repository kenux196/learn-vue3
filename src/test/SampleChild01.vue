<script setup>
const props = defineProps({
  messageTitle: String,
  number: Number,
  state: {
    validator(value, props) {
      return ['normal', 'warning', 'error'].includes(value);
    },
  },
});
console.log(props);
</script>
<template>
  <h2>{{ messageTitle }} {{ number }} / status: {{ state }}</h2>
</template>
