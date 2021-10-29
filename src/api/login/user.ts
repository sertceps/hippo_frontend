import { http } from '@/utils/http'

interface LoginReturn {
  access_token: string,
  jwt_expires_in: number
}

export function loginApi(email: string, password: string) {
  return http.request<LoginReturn>({
    url: 'users/login',
    method: 'post',
    data: {
      email,
      password
    }
  })

}
