<script>
export default {
  data() {
    return {
      count: 0,
      name: 'kenux',
    };
  },
  methods: {
    greet(event) {
      alert(`안녕 ${this.name}`);
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    },
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>
<template>
  <main class="container">
    <h1>이벤트 핸들링</h1>
    <p>인라인 핸들러: {{ count }}</p>
    <button @click="count++">+ 1</button>
    <p @click="greet">Method Handler</p>
    <button @click="greet">GREET</button>
    <button @click="say('Hello')">say Hello</button>
    <button @click="say('Good Bye')">say Good bye</button>
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">제출하기</button>
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">제출하기</button>
  </main>
</template>
