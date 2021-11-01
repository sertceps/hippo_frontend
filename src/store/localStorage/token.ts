const TOKEN_KEY = 'token';

/** 从localStorage中获取token */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

/** 将token信息存入local storage */
export function setToken(token: string) {
  return localStorage.setItem(TOKEN_KEY, token);
}

/** 清除本地存储中的token信息 */
export function removeToken() {
  return localStorage.removeItem(TOKEN_KEY);
}
