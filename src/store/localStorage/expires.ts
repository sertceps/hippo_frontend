const EXPIRES_KEY = 'expires_key';

/** 从 localStorage 获取过期时间 */
export function getExpires(): number {
  return parseInt(localStorage.getItem(EXPIRES_KEY) ?? '0', 10);
}

/** 将过期时间存入 local storage */
export function setExpires(expires: number) {
  return localStorage.setItem(EXPIRES_KEY, expires.toString());
}

/** 清除 local storage 中的过期时间 */
export function removeExpires() {
  return localStorage.removeItem(EXPIRES_KEY);
}
