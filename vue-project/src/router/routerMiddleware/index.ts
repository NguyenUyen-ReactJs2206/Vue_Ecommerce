import { useUserStore } from 'src/stores/user.store';

const authStore = useUserStore();

// Hàm middleware để kiểm tra token
const checkTokenMiddleware = (to: any, from: any, next: any) => {
  // Nếu đang truy cập trang login hoặc register
  if (to.name === 'login' || to.name === 'register') {
    // Nếu đã đăng nhập, chuyển hướng đến trang profile
    authStore.isAuthenticated ? next({ name: 'main' }) : next();
  } else if (to.name === 'profile') {
    // Nếu chưa đăng nhập, chuyển hướng đến trang login
    authStore.isAuthenticated ? next() : next({ name: 'login' });
  } else {
    // Xử lý cho các trang khác nếu cần
    next();
  }
};
