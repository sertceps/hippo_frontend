import { defineStore } from 'pinia';
import { getToken, setToken } from '../localStorage/token';
import { getExpires, setExpires } from '../localStorage/expires';

const useStore = defineStore('users', {
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
  },
});

export default useStore;
