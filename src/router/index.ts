import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: import("../views/home/index.vue") },
  { path: '/articles', name: 'Article', component: import("../views/article/index.vue") },
  { path: '/login', name: 'login', component: import("../views/login/index.vue") },
  { path: '/404', name: 'NotFound', component: import("../views/404/index.vue") }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


