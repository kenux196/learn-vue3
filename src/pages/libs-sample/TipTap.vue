<template>
  <div>component</div>
  <button
    @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
  >
    H1
  </button>
  <div class="editor_container">
    <EditorContent :editor="editor" />
  </div>
</template>

<script setup>
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/vue-3';

const editor = useEditor({
  extensions: [StarterKit],
  constent: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
});
</script>

<style scoped>
.editor_container {
  height: 300px;
  width: 100%;
  background-color: beige;
  border: 1px;
  border-radius: 8px;
  border-style: solid;
}
</style>
