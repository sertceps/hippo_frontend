import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store, { key } from './store'
import { create, NButton, NCol, NForm, NFormItem, NInput, NMessageProvider, NRow } from 'naive-ui'

const naive = create({
  components: [
    NMessageProvider, NButton, NForm, NFormItem, NInput, NRow, NCol
  ]
})

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(naive)
app.mount('#app')
