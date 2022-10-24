import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes = [

  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
}
)

export default router
