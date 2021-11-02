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
