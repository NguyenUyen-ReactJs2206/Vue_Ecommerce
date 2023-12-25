import { createRouter, createWebHistory } from 'vue-router';
import Register from '../pages/Auth/Register.vue';
import Login from '../pages/Auth/Login.vue';
import path from 'src/constants/path';
import MainLayoutVue from '../Layout/MainLayout/MainLayout.vue';
import ProductList from 'src/pages/ProductList/ProductList.vue';

const routes = [
  {
    path: `${path.home}`,
    component: MainLayoutVue,
    children: [
      {
        name: 'main',
        path: '', // Child route path is empty to render inside the parent's <router-view>
        component: ProductList
      }
    ]
  },
  { name: 'login', path: `${path.login}`, component: Login },
  { name: 'register', path: `${path.register}`, component: Register }
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});
export default router;
