import { App } from 'vue';
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

export function setupNaive(app: App<Element>) {
  app.use(naive);
}
