import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, SessionStorage, Notify } from 'quasar';

// import icon libs
import '@quasar/extras/material-icons/material-icons.css';
// import quasar css
import 'quasar/dist/quasar.css';
// import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './router';
import i18n from '@/locale/i18n';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { useAppStore } from './stores/appStore';
import { VueQueryPlugin } from 'vue-query';
// import { QuillEditor } from '@vueup/vue-quill';
// import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App);
app.use(router);

// pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);

const appStore = useAppStore();
console.log('🚀 ~ appStore:', appStore);
// app.config.globalProperties.$appStore = appStore;

app.use(i18n);

// quasar
app.use(Quasar, {
  plugins: { SessionStorage, Notify },
});

// vue query
app.use(VueQueryPlugin);

// vue quill
// app.component('QuillEditor', QuillEditor);

// app 레벨의 에러 핸들링 정의 예시
app.config.errorHandler = (err) => {
  console.log(err);
};

// app.config.globalProperties.$api = api;

// 컴포넌트 전역 등록 예시
// app.component('TodoDeleteButton', TodoDeleteButton);

app.mount('#app');
