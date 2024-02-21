<script setup>
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.');
const imgUrl = ref('');

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '생각중...';
    try {
      const body = await fetch('https://yesno.wtf/api').then((res) => {
        return res.json();
      });
      console.log(body);
      answer.value = body.answer === 'yes' ? '네' : '아니오';
      imgUrl.value = body.image;
    } catch (error) {
      answer.value = '에러! API에 연결할 수 없습니다. ' + error;
    }
  }
});
</script>

<template>
  <div class="container">
    <h1>감시자</h1>
    <p>
      예/아니오 질문:
      <span>
        <input v-model="question" />
      </span>
    </p>
    <p>대답: {{ answer }}</p>
    <img v-bind:src="imgUrl" />
  </div>
</template>
