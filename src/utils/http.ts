import { getToken } from '@/store/localStorage/token';
import axios, { Axios, AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class VAxios {
  private axiosInstance: AxiosInstance;
  private static VAxiosInstance: VAxios;

  private constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.setRequestInterceptors();
    this.setResponseInterceptors();
  }

  /** 创建实例*/
  static getInstance() {
    if (!this.VAxiosInstance) {
      this.VAxiosInstance = new this({
        baseURL: import.meta.env.VITE_BASE_API_URL as string,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: '*/*',
        },
      });
    }

    return this.VAxiosInstance;
  }

  /** 设置请求拦截器 */
  private setRequestInterceptors() {
    // 配置
    this.axiosInstance.interceptors.request.use((config) => {
      config.headers!['Authorization'] = 'Bearer ' + getToken();

      return config;
    });

    // 错误处理
    this.axiosInstance.interceptors.request.use(undefined, (error) => {
      return Promise.reject(error);
    });
  }

  /** 设置响应拦截器 */
  private setResponseInterceptors() {
    // 配置
    this.axiosInstance.interceptors.response.use((response) => {
      return response.data;
    });

    // 错误处理
    this.axiosInstance.interceptors.response.use(undefined, (error) => {
      if (!error.response) return Promise.reject(error.message);

      switch (error.response.status) {
        case 401:
          return Promise.reject('请登陆后操作');
        case 403:
          return Promise.reject('权限不足');
        case 404:
          return Promise.reject('API 不存在');
      }

      if (typeof error.response.data === 'string' || error.response.data instanceof String) {
        return Promise.reject(error.response.data);
      } else if ('message' in error.response.data) return Promise.reject(error.response.data.message);

      return Promise.reject(error);
    });
  }

  /** 请求 */
  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(config);
  }
}

export default VAxios.getInstance();
