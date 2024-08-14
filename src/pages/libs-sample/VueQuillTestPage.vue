<template>
  <h5>Vue Quill Test</h5>
  <div>
    <QuillEditor theme="snow" style="height: 400px" />
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>

<style scoped></style>
