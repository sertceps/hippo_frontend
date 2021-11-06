import { createApp } from 'vue';
import {
  create,
  NButton,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NMessageProvider,
  NRow,
  NCard,
  NAvatar,
  NBackTop,
  NDropdown,
  NMenu,
  NSpace,
  useMessage,
} from 'naive-ui';
import { createPinia } from 'pinia';
import MasonryWall from '@yeger/vue-masonry-wall';
import router from './router/index';
import App from './App.vue';

const naive = create({
  components: [
    NMessageProvider,
    NButton,
    NForm,
    NFormItem,
    NInput,
    NRow,
    NCol,
    NCard,
    NAvatar,
    NBackTop,
    NDropdown,
    NMenu,
    NSpace,
  ],
});

const app = createApp(App);
app.use(createPinia());
app.use(naive);
app.use(MasonryWall);
app.use(router);
app.mount('#app');

/** 捕获与 vue 无关的 JS 错误 */
window.addEventListener('error', function (event: ErrorEvent) {
  window.$message.error(event.message);
});

/** 捕获异未处理常错误 */
window.addEventListener('unhandledrejection', function (event: PromiseRejectionEvent) {
  window.$message.error(event.reason);
  event.preventDefault();
});
