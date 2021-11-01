import http from '@/utils/http';
import { LoginReturn } from '@/types/api/login';

export const loginApi = (email: string, password: string) =>
  http.request<LoginReturn>({
    url: 'users/login',
    method: 'post',
    data: {
      email,
      password,
    },
  });
