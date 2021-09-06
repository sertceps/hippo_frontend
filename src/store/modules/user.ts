import { Module } from "vuex";
import UserState from "../interfaces/user.state";

const UserModule: Module<UserState, any> = {
  namespaced: true,
  state: {
    access_token: null,
    expires_at: null
  },
  mutations: {
    SET_TOKEN: (state, payload: { access_token: string }) => {
      state.access_token = payload.access_token
    }
  }
}

export default UserModule