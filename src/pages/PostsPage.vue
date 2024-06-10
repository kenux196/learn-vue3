<template>
  <div class="text-h3 text-center">Posts Page</div>
  <div class="q-ma-md">
    <q-table title="Quasar QTable" :rows="rows" :columns="columns" row-key="id" separator="cell" />
  </div>
  <div class="q-ma-md q-pa-md bg-grey-10 row justify-center">
    <table style="width: 100%">
      <caption class="text-h5 q-mb-md" style="text-align: start">
        Pure HTML Table
      </caption>
      <thead>
        <tr class="bg-green-5">
          <th style="width: 10%">#</th>
          <th>title</th>
          <th style="width: 20%">date</th>
          <th style="width: 20%">writer</th>
        </tr>
      </thead>
      <tbody v-for="r in rows" :key="r.id">
        <tr>
          <td class="bg-orange-5">{{ r.id }}</td>
          <td style="text-align: start">{{ r.title }}</td>
          <td>{{ r.date }}</td>
          <td>{{ r.writer }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">여기는 footer</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { data } from 'autoprefixer';
import { onMounted, reactive } from 'vue';

const columns = [
  {
    name: 'id',
    required: true,
    label: '#',
    align: 'left',
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: 'title', align: 'left', label: 'title', field: 'title', sortable: false },
  { name: 'date', align: 'center', label: 'date', field: 'date', sortable: true },
  { name: 'writer', align: 'center', label: 'writer', field: 'writer', sortable: false },
];

const rows = reactive([]);

const createSampleRows = () => {
  for (let i = 1; i < 10; i++) {
    const data = {
      id: i,
      title: `샘플 ${i} 제목이에요~~`,
      date: new Date().toLocaleString(),
      writer: 'kenux',
    };
    rows.push(data);
  }
};

onMounted(() => {
  createSampleRows();
});
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
th,
td {
  width: 100px;
  height: 50px;
  text-align: center;
  border: 1px solid green;

  vertical-align: middle;
}
</style>
