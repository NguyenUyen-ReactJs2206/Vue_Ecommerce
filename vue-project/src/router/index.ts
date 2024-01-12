import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Register from '../pages/Auth/Register.vue';
import Login from '../pages/Auth/Login.vue';
import path from 'src/constants/path';
import MainLayoutVue from '../Layout/MainLayout/MainLayout.vue';
import ProductList from 'src/pages/ProductList/ProductList.vue';
import ProductDetail from 'src/pages/ProductDetail/ProductDetail.vue';
import { useUserStore } from 'src/stores/user.store';

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: `${path.login}`,
    component: Login,
    beforeEnter: (to, from, next) => {
      const { isAuthenticated } = useUserStore();
      // Nếu người dùng đã đăng nhập,muốn chuyển hướng đến trang login => quay về trang home
      if (isAuthenticated) {
        next({ name: 'main' });
      } else {
        // Nếu chưa có token => vào được login
        next();
      }
    }
  },
  {
    name: 'register',
    path: `${path.register}`,
    component: Register,
    beforeEnter: (to, from, next) => {
      const { isAuthenticated } = useUserStore();
      // Nếu người dùng đã đăng nhập,muốn chuyển hướng đến trang login => quay về trang home
      if (isAuthenticated) {
        next({ name: 'main' });
      } else {
        // Nếu chưa có token
        next();
      }
    }
  },
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
  {
    // path: `${path.productDetail}`,
    path: '/product-detail',
    component: MainLayoutVue,
    children: [
      {
        name: 'productDetail',
        path: '',
        component: ProductDetail
      }
    ]
  }
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});
export default router;
