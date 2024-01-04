import { defineStore } from 'pinia';
import { loginAccount, registerAccount } from 'src/apis/auth.api';
import { AuthResponse, FormDataUser } from 'src/types/auth.type';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as AuthResponse | null,
    isLoading: false
  }),
  getters: {},
  actions: {
    async registerUser(formData: FormDataUser) {
      try {
        this.isLoading = true;
        //Send registration data to the server using Axios
        const response = await registerAccount(formData);

        //Save user information to the store
        this.userData = response.data;

        this.isLoading = false;
        return response;
      } catch (error) {
        console.log(error, 'errrrrrr');
      }
    },
    async loginUser(formData: Omit<FormDataUser, 'confirm_password'>) {
      try {
        this.isLoading = true;
        //Send registration data to the server using Axios
        const response = await loginAccount(formData);

        //Save user information to the store
        this.userData = response.data;

        this.isLoading = false;
        return response;
      } catch (error) {
        console.log(error, 'errrrrrr');
      }
    }
  }
});
