import { responseInterceptor, errorInterceptor } from './interceptors';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://172.16.100.21:8081',
  headers: {
    Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('APP_ACCESS_TOKEN') || '')}`,
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };