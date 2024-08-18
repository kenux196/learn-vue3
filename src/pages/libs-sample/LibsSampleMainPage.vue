<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="export" label="export" to="/libs/export" />
        <q-route-tab name="vue-query" label="vue-query" to="/libs/vue-query" />
        <q-route-tab name="language" label="language" to="/libs/i18n" />
        <q-route-tab name="quill" label="vue-quill" to="/libs/quill"></q-route-tab>
        <q-route-tab name="tiptap" label="tiptap" to="/libs/tiptap"></q-route-tab>
      </q-tabs>
    </div>
    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped></style>
