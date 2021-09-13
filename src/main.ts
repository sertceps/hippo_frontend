import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { create, NButton, NCol, NForm, NFormItem, NInput, NMessageProvider, NRow } from 'naive-ui'
import { createPinia } from 'pinia'

const naive = create({
  components: [
    NMessageProvider, NButton, NForm, NFormItem, NInput, NRow, NCol
  ]
})

const app = createApp(App)
app.use(router)
app.use(naive)
app.use(createPinia())
app.mount('#app')
