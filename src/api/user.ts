import request from '@/utils/request'


export function login(email: string, password: string) {
  return request({
    url: 'users/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}