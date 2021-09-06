import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { cloneDeep } from "lodash";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL as string

const service = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
})

service.interceptors.request.use(config => {
  config.headers['Authorization'] = '';
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['Accept'] = '*/*';
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
}, error => {
  console.log(error);

  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  // if(!error.response) return Promise.reject()
  if (error.response.status === 401) return Promise.reject('请登陆后操作') // router/sotre
  if (error.response.status === 403) return Promise.reject('无权限')
  if (error.response.status === 404) return Promise.reject('API 不存在')
  if (typeof error.response.data === 'string' || error.response.data instanceof String) {
    return Promise.reject(error.response.data)
  } else if ('message' in error.response.data) return Promise.reject(error.response.data.message)
  // parseError(response.data.message)
  console.log(error);

  return Promise.reject(error)
})


interface Result<T = any> {
  code: number,
  type?: 'success' | 'error' | 'warning',
  message: string,
  result?: T
}


async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  let conf: AxiosRequestConfig = cloneDeep(config)
  return new Promise((resolve, reject) => {
    service.request<any, AxiosResponse<Result>>(conf)
  })
}


export default service

// 为什么不做统一拦截？