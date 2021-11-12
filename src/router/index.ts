import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';

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
        path: 'show/:id',
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
  { path: '/404', name: 'ExceptionNotFound', component: () => import('@/views/exception/404/index.vue') },
  { path: '/:w+', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const WHITE_LIST = ['/', '/login'];
const BLACK_LIST = ['/login', '/register'];

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const { $message: Message } = window;
  // https://pinia.esm.dev/core-concepts/outside-component-usage.html#single-page-applications
  if (!WHITE_LIST.includes(to.path) && (!userStore.token || !userStore.jwt_expires_in)) {
    Message.info('请先登录');
    return next(`/login?redirect=${to.fullPath}`);
  }
  if (BLACK_LIST.includes(to.path) && userStore.token && userStore.jwt_expires_in) return next({ path: from.fullPath });

  return next();
});

export default router;
