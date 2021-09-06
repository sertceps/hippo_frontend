import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.setInterceptors()
  }

  /** 设置通用请求头 */
  setHeader(headers: any): void {
    if (!this.axiosInstance) return
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  /** 设置拦截器 */
  private setInterceptors() {
    /** 请求拦截器配置 */
    this.axiosInstance.interceptors.request.use(config => {
      config.headers['Authorization'] = '';
      return config;
    })

    /** 请求拦截器错误处理配置 */
    this.axiosInstance.interceptors.request.use(undefined, error => {
      // 统一捕获？
      return Promise.reject(error)
    })

    /** 响应拦截器配置 */
    this.axiosInstance.interceptors.response.use(response => {
      return response.data
    })

    /** 响应拦截器错误处理配置 */
    this.axiosInstance.interceptors.response.use(undefined, error => {
      if (!error.response) return Promise.reject(error.message)
      console.log(error);

      if (error.response.status === 401) return Promise.reject('请登陆后操作') // router/sotre
      if (error.response.status === 403) return Promise.reject('无权限')
      if (error.response.status === 404) return Promise.reject('API 不存在')
      if (typeof error.response.data === 'string' || error.response.data instanceof String) {
        return Promise.reject(error.response.data)
      } else if ('message' in error.response.data) return Promise.reject(error.response.data.message)
      // parseError(response.data.message)
      // console.log(error);
      return Promise.reject(error)
    })
  }

  /** 请求方法 */
  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(config)
  }
}

export const httpClient = new HttpClient({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
  timeout: 1000
})