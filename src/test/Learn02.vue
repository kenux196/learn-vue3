<script>
export default {
  data() {
    return {
      awesome: true,
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '윤상규',
        publishedAt: '2023-02-18',
      },
    };
  },
};
</script>
<template>
  <main class="container">
    <h1>조건부 렌더링</h1>
    <button @click="awesome = !awesome">전환</button>
    <h2 v-if="awesome">Vue는 정말 멋지죠!</h2>
    <h2 v-else>아닌가요?</h2>
    <li v-for="item in items">{{ item.message }}</li>
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <ul>
      <li v-for="value in myObject">{{ value }}</li>
      <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
      <li v-for="(value, key, index) in myObject">
        {{ index }}, {{ key }}: {{ value }}
      </li>
    </ul>
  </main>
</template>
