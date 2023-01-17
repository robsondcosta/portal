import { responseInterceptor, errorInterceptor } from './interceptors';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:7070',
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('APP_ACCESS_TOKEN')}`,
    // Authorization: `Bearer ${sessionStorage.getItem('APP_ACCESS_TOKEN')}`,
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };