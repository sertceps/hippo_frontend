import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setupNaive } from './plugins/naiveui';
import MasonryWall from '@yeger/vue-masonry-wall';
import router from './router/index';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
/** 全局引入常用 naive ui组件 */
setupNaive(app);
app.use(MasonryWall);
app.use(router);
app.mount('#app');

/** 捕获与 vue 无关的 JS 错误 */
// window.addEventListener('error', function (event: ErrorEvent) {
//   window.$message.error(event.message);
// });

/** 捕获异未处理常错误 */
window.addEventListener('unhandledrejection', function (event: PromiseRejectionEvent) {
  window.$message.error(event.reason);
  event.preventDefault();
});
