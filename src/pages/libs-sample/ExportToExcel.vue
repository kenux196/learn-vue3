<template>
  <h5>액셀 내보내기 실습</h5>
  <table style="border: 2px; border-style: solid">
    <thead>
      <tr>
        <th>품목명</th>
        <th>분류</th>
        <th>재고</th>
        <th>가격</th>
        <th>할인비율</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in datas" :key="data.id">
        <td>{{ data.title }}</td>
        <td>{{ data.category }}</td>
        <td>{{ data.amount }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.discountRate }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="download" style="width: 100px; margin-top: 1rem">download</button>
  <button @click="download2" style="width: 100px; margin-top: 1rem">download2</button>
</template>

<script setup>
import { ref } from 'vue';
import { exportToExcel } from '@/utils/export-excel';

const datas = ref([
  {
    id: 1,
    title: '사과',
    category: '과일류',
    amount: 100,
    price: 10000,
    discountRate: 0,
  },
  {
    id: 2,
    title: '삼겹살',
    category: '고기류',
    amount: 200,
    price: 12000,
    discountRate: 10,
  },
  {
    id: 3,
    title: '딸기',
    category: '과일류',
    amount: 10,
    price: 5000,
    discountRate: 0,
  },
  {
    id: 4,
    title: '새우깡',
    category: '과자류',
    amount: 200,
    price: 1000,
    discountRate: 0,
  },
]);

function download() {
  exportToExcel('example', 'example.xlsx', datas.value);
}

const jsonData = {
  header: [['품목', '종류', '재고', '가격', '할인비율']],
  body: datas.value.map((data) => {
    return {
      title: data.title,
      category: data.category,
      amount: data.amount,
      price: data.price,
      discountRate: data.discountRate,
    };
  }),
};

function download2() {
  exportToExcel('example2', 'example2.xlsx', jsonData.body, jsonData.header);
}
</script>
