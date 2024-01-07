import { defineStore } from 'pinia';
import { loginAccount, registerAccount } from 'src/apis/auth.api';
import { AuthResponse, FormDataUser } from 'src/types/auth.type';
import { User } from 'src/types/user.type';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as AuthResponse | null,
    user: null as User | null,
    token: null as string | null,
    isLoading: false
  }),
  getters: {
    isAuthenticated: (state) => {
      // Getter kiểm tra xem người dùng đã đăng nhập hay chưa
      return state.token !== null;
    }
  },
  actions: {
    async registerUser(formData: FormDataUser) {
      try {
        this.isLoading = true;
        //Send registration data to the server using Axios
        const response = await registerAccount(formData);

        //Save user information to the store
        this.userData = response.data;

        this.user = response.data.data.user;
        this.token = response.data.data.access_token;

        this.isLoading = false;
        return response;
      } catch (error) {
        throw error;
      }
    },
    async loginUser(formData: Omit<FormDataUser, 'confirm_password'>) {
      try {
        this.isLoading = true;
        //Send registration data to the server using Axios
        const response = await loginAccount(formData);

        //Save user information to the store
        this.userData = response.data;

        this.user = response.data.data.user;
        this.token = response.data.data.access_token;

        this.isLoading = false;
        return response;
      } catch (error) {
        throw error;
      }
    }
  }
});
