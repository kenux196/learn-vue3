import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, SessionStorage, Notify } from 'quasar';

// import icon libs
import '@quasar/extras/material-icons/material-icons.css';
// import quasar css
// import 'quasar/dist/quasar.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import messages from '@/i18n';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { useAppStore } from './stores/appStore';
import { VueQueryPlugin } from 'vue-query';
import { datetimeFormats, numberFormats } from './i18n/i18nFormats';

const app = createApp(App);
app.use(router);

// pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);
const appStore = useAppStore();
console.log('🚀 ~ appStore:', appStore);
// app.config.globalProperties.$appStore = appStore;

// i18n
const i18n = createI18n({
  legacy: false, // composition api이면 legacy는 false
  locale: appStore.locale,
  globalInjection: true,
  fallbackLocale: 'ko-KR',
  messages: messages,
  datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
});
app.use(i18n);

// quasar
app.use(Quasar, {
  plugins: { SessionStorage, Notify },
});

// vue query
app.use(VueQueryPlugin);

// app 레벨의 에러 핸들링 정의 예시
app.config.errorHandler = (err) => {
  // console.log(err);
};

// app.config.globalProperties.$api = api;

// 컴포넌트 전역 등록 예시
// app.component('TodoDeleteButton', TodoDeleteButton);

app.mount('#app');
