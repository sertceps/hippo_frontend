import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import article from "./modules/article";
import { AllState } from "./interface";


export default createStore({
  modules: {
    article
  }
})

export const key: InjectionKey<Store<any>> = Symbol('VUE_STORE_KEY')

export function useStore<T = AllState>() {
  return baseUseStore<T>(key)
}
// https://lost-dream.github.io/blog/2021/01/26/vuex4/
// https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy?file=/src/main.ts
