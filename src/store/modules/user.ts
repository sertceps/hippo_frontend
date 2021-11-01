import { defineStore } from 'pinia';
import { setToken } from '../localStorage/token';
import { setExpires } from '../localStorage/expires';

export const useStore = defineStore('users', {
  state: () => ({
    token: '',
    jwt_expires_in: 0,
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
