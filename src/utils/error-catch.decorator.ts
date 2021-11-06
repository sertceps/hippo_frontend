import { AxiosRequestConfig } from 'axios';

/**
 * 请求方法错误捕获装饰器
 */
export function catchRequestError() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = async function (config: AxiosRequestConfig) {
      try {
        return await fn.call(this, config);
      } catch (error) {
        // 这里对错误进行弹出
        // console.log(error);
        Promise.reject(error);
      }
    };
  };
}
