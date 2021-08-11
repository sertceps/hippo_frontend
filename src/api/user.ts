import request from '@/utils/request'


export function login(data: { email: string, password: string }) {
  return request({
    url: 'users/login',
    method: 'POST',
    data
  })
}