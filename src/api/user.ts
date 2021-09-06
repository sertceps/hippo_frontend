import { httpClient } from '@/utils/http'


interface LoginReturn {
  access_token: string,
  expires_at: number
}

export function login(email: string, password: string) {
  return httpClient.request<LoginReturn>({
    url: 'users/login',
    method: 'post',
    data: {
      email,
      password
    }
  })

}