import { defineStore } from 'pinia';
import { registerAccount } from 'src/apis/auth.api';
import { AuthResponse, FormDataUser } from 'src/types/auth.type';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as AuthResponse | null
  }),
  getters: {},
  actions: {
    async registerUser(formData: Omit<FormDataUser, 'confirm_password'>) {
      try {
        // Gửi dữ liệu đăng ký lên server sử dụng Axios
        const response = await registerAccount(formData);

        // Lưu thông tin người dùng vào store
        this.userData = response.data;
        return response;
      } catch (error) {
        console.log(error, 'errrrrrr');
      }
    }
  }
});
