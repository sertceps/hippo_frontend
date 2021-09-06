import { createLogger, createStore } from "vuex";
import article from "./modules/article";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    article
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// https://lost-dream.github.io/blog/2021/01/26/vuex4/
// https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy?file=/src/main.ts
