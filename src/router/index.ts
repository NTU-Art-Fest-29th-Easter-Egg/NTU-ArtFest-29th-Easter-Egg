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
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/voice',
      name: 'Voice',
      component: () => import('../views/VoiceView.vue')
    },
    {
      path: '/point',
      name: 'Point',
      component: () => import('../views/PointView.vue')
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: () => import('../views/ExchangeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
