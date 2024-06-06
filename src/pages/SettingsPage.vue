<template>
  <div>Settings Page</div>
  <div class="flex q-mx-md">
    <div class="text-h6 q-mr-md" style="width: 100px">region</div>
    <q-select v-model="region" :options="regionOptions" dense style="width: 400px" />
  </div>
  <!-- <div class="flex q-mx-md">
    <div class="text-h6 q-mr-md" style="width: 100px">관리국가</div>
    <q-select v-model="country" :options="countryOptions" dense style="width: 400px">
      <template v-slot:append>
        <q-icon name="close" @click.stop.prevent="model = ''" class="cursor-pointer" />
      </template>
    </q-select>
  </div> -->
</template>

<script setup>
import { ref } from 'vue';

const region = ref('Asia/Pacific - KR');
const regionOptions = ['Asia/Pacific - KR', 'Europe - EU', 'North America/ Latin America - US'];

const country = ref('한국');
const countryOptions = ['한국', '베트남', '태국', '필리핀', '인도네시아', '독일', '프랑스'];
</script>
