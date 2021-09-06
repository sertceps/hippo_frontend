import { createStore } from "vuex";

export default createStore({
  state() {
    token: ''
  },
  mutations: {
    setToken(state, payload: { token: string }) {
      state.token = payload.token
    }
  },
})