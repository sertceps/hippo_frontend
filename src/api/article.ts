import { http } from '@/utils/http';

export function getArticlesApi(page = 1, size = 10, orderBy = 'createdAt') {
  return http.request<{ count: number; articles: any[] }>({
    url: 'articles',
    method: 'GET',
    params: {
      page,
      size,
      orderBy,
    },
  });
}

export function createArticlesApi() {
  return http.request({});
}
