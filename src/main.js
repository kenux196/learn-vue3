import { createPinia } from 'pinia';
import { createApp } from 'vue';
import piniaPersist from 'pinia-plugin-persist';
// import './assets/pico.min.css';

// import App from './App.vue';
import App from './test/Sample04.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

// app 레벨의 에러 핸들링 정의 예시
app.config.errorHandler = (err) => {
  // console.log(err);
};

app.use(pinia);
app.use(router);

// 컴포넌트 전역 등록 예시
// app.component('TodoDeleteButton', TodoDeleteButton);

app.mount('#app');
