import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// const Nav = () => import('@/components/nav/index.vue');
const Layout = () => import('@/layout/index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  // 前端路由命名设计？
  {
    path: '/articles',
    name: 'Article',
    component: Layout,
    children: [
      {
        path: 'create',
        component: () => import('@/views/article/create/index.vue'),
      },
      {
        path: ':id',
        component: () => import('@/views/article/show/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
  { path: '/404', name: 'NotFound', component: () => import('@/views/404/index.vue') },
  { path: '/:w+', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
