<script setup>
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.');
const imgUrl = ref('');
const loading = ref(false);

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    loading.value = true;
    answer.value = '생각중...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      const body = await res.json();
      console.log(body);
      answer.value = body.answer === 'yes' ? '네' : '아니오';
      imgUrl.value = body.image;
    } catch (error) {
      answer.value = '에러! API에 연결할 수 없습니다. ' + error;
    } finally {
      loading.value = false;
    }
  }
});
</script>

<template>
  <div class="container">
    <h1>감시자</h1>
    <p>
      예/아니오 질문:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>대답: {{ answer }}</p>
    <img v-bind:src="imgUrl" />
  </div>
</template>
