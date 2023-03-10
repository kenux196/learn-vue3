import { createPinia } from 'pinia';
import { createApp } from 'vue';
import piniaPersist from 'pinia-plugin-persist';
import './assets/pico.min.css';

import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
