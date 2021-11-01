import { Article } from '@/types/api/articles';
import http from '@/utils/http';

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

/** 获取单篇文章
 * @param {id} 文章 objectId
 * @returns Article 返回文章
 */
export function getArticleApi(id: string) {
  return http.request<Article>({
    url: 'articles/' + id,
    method: 'GET',
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
