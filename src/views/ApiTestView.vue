<script setup>
// const jsonData = require('../json/test.json');
// console.log(jsonData);
fetch('../json/test.json')
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => console.log(jsonData));
</script>
<template>
  <h1>API Test App</h1>
</template>
