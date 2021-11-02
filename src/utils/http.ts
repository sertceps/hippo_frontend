import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useUserStore } from '@/store/index';

class VAxios {
  private axiosInstance: AxiosInstance;

  private static VAxiosInstance: VAxios;

  private userStore = useUserStore();

  private constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.setRequestInterceptors();
    this.setResponseInterceptors();
  }

  /** 创建实例 */
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
      const customConfig = config;
      customConfig.headers!.Authorization = `Bearer ${this.userStore.token}`;

      return customConfig;
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
          return Promise.reject(new Error('请登陆后操作'));
        case 403:
          return Promise.reject(new Error('权限不足'));
        case 404:
          return Promise.reject(new Error('API 不存在'));
        default:
          return Promise.reject(error.response);
      }
    });
  }

  /** 请求 */
  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(config);
  }
}

export default VAxios.getInstance();
