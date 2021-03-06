import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '้ฆ้กต',
      subtitle: '',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: 'ๆ็',
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
