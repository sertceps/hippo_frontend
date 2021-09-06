import axios from '@/utils/request'
import { httpClient } from '@/utils/htpp'


interface LoginReturn {
  access_token: string,
  expires_at: number
}

export function login(email: string, password: string) {
  return axios.request<LoginReturn>({
    url: 'users/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}

export function login2(email: string, password: string) {
  return httpClient.request<LoginReturn>({
    url: 'users/login',
    method: 'post',
    data: {
      email,
      password
    }
  })

}