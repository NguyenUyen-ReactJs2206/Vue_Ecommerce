import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../Layout/MainLayout/MainLayout.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';
import path from 'src/constants/path';

const routes = [
  { name: 'main', path: `${path.home}`, component: MainLayout },
  { name: 'login', path: `${path.login}`, component: Login },
  { name: 'register', path: `${path.register}`, component: Register }
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});
export default router;
