import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      subtitle: '',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '主页',
      subtitle: '',
    },
    component: () => import('@/views/Profile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
