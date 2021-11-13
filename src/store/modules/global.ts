import { defineStore } from 'pinia';

const useGlobal = defineStore('global', {
  state: () => ({
    isLoginButtonShow: false,
  }),
});

export default useGlobal;
