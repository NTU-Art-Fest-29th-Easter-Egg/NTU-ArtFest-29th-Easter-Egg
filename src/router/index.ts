import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/shareWithQRCode',
      name: 'Share with QR Code',
      component: () => import('../views/ShareWithQRCodeView.vue')
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import('../views/ExploreView.vue'),
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('../views/ResultView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
