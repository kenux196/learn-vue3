<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      grid
      title="기술 스택"
      dense
      :rows="techStacks"
      :columns="headers"
      row-key="name"
      :rows-per-page-options="[0]"
      hide-bottom
      hide-header
    ></q-table>
  </div>
  <img
    alt="Quasar logo"
    src="@/assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
  />
</template>

<script setup>
const headers = [
  {
    name: 'name',
    label: '기술명',
    field: (row) => row.name,
    format: (val) => `${val}`,
    align: 'left',
  },
  { name: 'link', label: '링크', field: 'link', align: 'left' },
  { name: 'description', label: '설명', field: 'description', align: 'left' },
];
const techStacks = [
  {
    name: 'Vue3',
    link: 'aaaa',
    description: 'aaaa',
  },
  {
    name: 'Vue Router',
    link: 'bbbb',
    description: 'bbbb',
  },
  {
    name: 'Pinia',
    link: 'cccc',
    description: 'cccc',
  },
  {
    name: 'Vite',
    link: 'dddd',
    description: 'dddd',
  },
  {
    name: 'Axios',
    link: 'zxxxxx',
    description: 'xxxx',
  },
  {
    name: 'Quasar UI Framework',
    link: 'qqqq',
    description: 'qqqq',
  },
  {
    name: 'Vue i18n',
    link: 'iiiii',
    description: 'iiiii',
  },
  {
    name: 'Vue Query',
    link: 'ddddssss',
    description: 'sdfsdfsdf',
  },
];
</script>
