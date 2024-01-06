import './style.css';
import 'src/assets/css/global.scss';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000
} as ToastContainerOptions);

app.use(router);
app.use(pinia);
app.mount('#app');
