import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
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