import { Module } from "vuex";
import UserState from "../interfaces/user.state";
import { setToken } from "../localStorage/token";

const UserModule: Module<UserState, any> = {
  namespaced: true,
  state: {
    access_token: null,
    expires_at: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.access_token = token
      setToken(token)
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
}

export default UserModule