import axios from "axios";
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
  console.log('axios interceptors request error');
  console.log(error);
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('axios interceptors response error');
  console.log(error);
  Promise.reject(error)
})

export default service