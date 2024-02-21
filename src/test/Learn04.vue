<script setup>
import { ref } from 'vue';

const text = ref('');
const message = ref('');
const messageMultiLine = ref('');
const checked = ref(false);
const checkedNames = ref([]);
const picked = ref('');
const selectedName = ref('');
const selected = ref([]);
const options = ref([
  { text: '하나', value: '장원영' },
  { text: '둘', value: '안유진' },
  { text: '셋', value: '최미정' },
]);
</script>

<template>
  <div class="container">
    <h1>Form 입력 바인딩</h1>
    <input
      :value="text"
      @input="(event) => event.target.value"
      placeholder="input your message"
    />
    <!-- 위 @input 부분을 v-model 디렉티브 하나로 끝낼 수 있다. -->
    <input v-model="text" placeholder="input your message" />
    <p>message: {{ message }}</p>
    <input v-model="message" placeholder="input your message" />
    <span>여러 줄 메시지: </span>
    <p style="white-space: pre-line">{{ messageMultiLine }}</p>
    <textarea
      v-model="messageMultiLine"
      placeholder="Input multi line text"
    ></textarea>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <div>체크된 이름: {{ checkedNames }}</div>
    <input type="checkbox" id="yujin" value="안유진" v-model="checkedNames" />
    <label for="yujin">안유진</label>
    <input
      type="checkbox"
      id="wonyoung"
      value="장원영"
      v-model="checkedNames"
    />
    <labe for="wonyoung">장원영</labe>
    <input type="checkbox" id="mijung" value="최미정" v-model="checkedNames" />
    <label for="mijung">최미정</label>
    <div>선택한 것: {{ picked }}</div>
    <input type="radio" id="one" value="아이유" v-model="picked" />
    <label for="one">아이유</label>
    <input type="radio" id="two" value="하지원" v-model="picked" />
    <label for="two">하지원</label>
    <div>선택됨: {{ selectedName }}</div>
    <select v-model="selectedName">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>지원</option>
      <option>아준</option>
      <option>상규</option>
    </select>
    <div>선택됨: {{ selected }}</div>
    <select v-model="selected" multiple>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
