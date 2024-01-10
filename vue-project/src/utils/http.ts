import axios, { AxiosError, AxiosInstance } from 'axios';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {
  clearAccessTokenFromLS,
  clearProfileFromLS,
  getAccessTokenFromLS,
  saveAccessTokenToLS,
  saveProfileToLS
} from './auth';
import { AuthResponse } from 'src/types/auth.type';
import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from 'src/apis/auth.api';

class Http {
  instance: AxiosInstance;
  accessToken = getAccessTokenFromLS();

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse;
          this.accessToken = data.data.access_token;
          //Lưu vào local Storange
          saveAccessTokenToLS(this.accessToken);
          saveProfileToLS(data.data.user);
        } else if (url === URL_LOGOUT) {
          this.accessToken = '';
          clearAccessTokenFromLS();
          clearProfileFromLS();
        }
        return response;
      },
      function (error: AxiosError) {
        console.log(error, 'uuuuuuuuuuuu');
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;

          toast(message, {
            theme: 'auto',
            type: 'error',
            dangerouslyHTMLString: true
          });
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
