import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/main-layout/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/MainView.vue'),
        meta: {
          pageTitle: 'Home',
        }
      }
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
