import { defineStore } from 'pinia';
import { setToken } from '../localStorage/token';

export const useStore = defineStore('useers', {
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
  },
});
