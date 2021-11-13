import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '../localStorage/token';
import { getExpires, setExpires } from '../localStorage/expires';

const useStore = defineStore('users', {
  /** vueuse useLocalStorage 怎么实现的 */
  state: () => ({
    token: getToken() || '',
    // 为什么要用 state 统一管理
    jwt_expires_in: getExpires() || 0,
  }),

  getters: {},

  actions: {
    setToken(token: string) {
      this.token = token;
      setToken(token);
    },
    setExpires(expires: number) {
      this.jwt_expires_in = expires;
      setExpires(expires);
    },
    removeToken() {
      this.token = '';
      removeToken();
    },
  },
});

export default useStore;
