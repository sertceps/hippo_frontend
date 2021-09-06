import { http } from "@/utils/http";

export function getArticlesApi(page = 1, size = 10) {
  return http.request({
    url: 'articles',
    method: 'GET',
    params: {
      page,
      size
    }
  })
}