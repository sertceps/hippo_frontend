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

export function createArticlesApi(title: string, content: string) {
  return http.request<{ id: string }>({
    url: 'articles',
    method: 'post',
    data: {
      title,
      content,
    },
  });
}
