import { defineStore } from 'pinia';
import { loginAccount, logout, registerAccount } from 'src/apis/auth.api';
import { AuthResponse, FormDataUser } from 'src/types/auth.type';
import { User } from 'src/types/user.type';
import {
  clearAccessTokenFromLS,
  clearProfileFromLS,
  getAccessTokenFromLS,
  getProfileFromLocalStorage,
  saveProfileToLS
} from 'src/utils/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as AuthResponse | null,
    profile: getProfileFromLocalStorage(),
    isLoading: false,
    isAuthenticated: Boolean(getAccessTokenFromLS())
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

        this.profile = response.data.data.user;

        saveProfileToLS(this.profile);

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

        this.profile = response.data.data.user;

        saveProfileToLS(this.profile);

        this.isLoading = false;
        return response;
      } catch (error) {
        throw error;
      }
    },
    async logoutUser() {
      try {
        this.isLoading = true;
        await logout(); // Assuming logout is a function that calls the logout API
        this.clearUserData();
        this.isLoading = false;
      } catch (error) {
        throw error;
      }
    },
    setIsAuthenticated(value: boolean): void {
      this.isAuthenticated = value;
    },
    setProfile(value: User | null): void {
      this.profile = value;
    },
    setIsLoading(value: boolean): void {
      this.isLoading = value;
    },
    clearUserData() {
      this.userData = null;
      this.profile = null;
      this.setIsAuthenticated(false);
      clearAccessTokenFromLS();
      clearProfileFromLS();
    }
  }
});
