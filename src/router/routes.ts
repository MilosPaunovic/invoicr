import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/Public.vue'),
    children: [{ path: '', component: () => import('pages/Error.vue') }],
  },
];

export default routes;
