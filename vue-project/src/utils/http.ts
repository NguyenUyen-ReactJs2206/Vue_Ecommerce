import axios, { AxiosError, AxiosInstance } from 'axios';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.instance.interceptors.response.use(
      function (response) {
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
