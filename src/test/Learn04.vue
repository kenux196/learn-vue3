<script>
export default {
  data() {
    return {
      text: 'test',
      message: '',
      messageMultiLine: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selectedName: '',
      selected: '1',
      options: [
        { text: '하나', value: '1' },
        { text: '둘', value: '2' },
        { text: '셋', value: '3' },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Form 입력 바인딩</h1>
    <input :value="text" @input="(event) => event.target.value" />
    <input v-model="text" />
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
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames" />
    <label for="jack">JACK</label>
    <input type="checkbox" id="jane" value="jane" v-model="checkedNames" />
    <labe for="jane">JANE</labe>
    <input
      type="checkbox"
      id="mi-jung"
      value="mi-jung"
      v-model="checkedNames"
    />
    <label for="mi-jung">Mi-Jung</label>
    <div>선택한 것: {{ picked }}</div>
    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>
    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
    <div>선택됨: {{ selectedName }}</div>
    <select v-model="selectedName">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>지원</option>
      <option>아준</option>
      <option>상규</option>
    </select>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div>선택됨: {{ selected }}</div>
  </div>
</template>
