import './style.css';
import 'src/assets/css/global.scss';

import App from './App.vue';
import router from './router';
import { createApp } from 'vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
