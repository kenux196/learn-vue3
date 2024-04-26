import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import { Quasar, SessionStorage, Notify } from 'quasar';

// import icon libs
import '@quasar/extras/material-icons/material-icons.css';
// import quasar css
import 'quasar/dist/quasar.css';

// import './assets/pico.min.css';

import App from './App.vue';
// import App from './test/SampleSlotParent.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

// app 레벨의 에러 핸들링 정의 예시
app.config.errorHandler = (err) => {
  // console.log(err);
};

app.use(pinia).use(router).use(Quasar, {
  plugins: { SessionStorage, Notify },
});

// 컴포넌트 전역 등록 예시
// app.component('TodoDeleteButton', TodoDeleteButton);

app.mount('#app');
