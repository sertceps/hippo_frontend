const TokenKey = 'token';

/** 从localStorage中获取token */
export function getToken(): string | null {
  return localStorage.getItem(TokenKey);
}

/** 将token信息存入local storage */
export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token);
}

/** 清除本地存储中的token信息 */
export function removeToken(): void {
  return localStorage.removeItem(TokenKey);
}
