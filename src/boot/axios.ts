import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const __axios = axios.create({ baseURL: 'https://api.example.com' });

export { __axios };
