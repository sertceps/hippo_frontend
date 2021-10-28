import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
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
} from 'naive-ui';
import { createPinia } from 'pinia';
import MasonryWall from '@yeger/vue-masonry-wall';

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
app.use(router);
app.use(naive);
app.use(createPinia());
app.use(MasonryWall);
app.mount('#app');
