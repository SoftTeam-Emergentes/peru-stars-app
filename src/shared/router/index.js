import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/accountManagement/pages/welcome.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/accountManagement/pages/about.component.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/accountManagement/pages/sign-in.component.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/accountManagement/pages/sign-up.component.vue')
    },
    {
      path: '/hobbyist',
      name: 'hobbyist',
      component: () => import('@/profileManagement/pages/hobbyist.component.vue'),
      children: [
        {
          path: 'home',
          name: 'home-hobbyist',
          component: () => import('@/profileManagement/pages/home-hobbyist.component.vue'),
        },
        {
          path: 'profile',
          name: 'profile-hobbyist',
          component: () => import('@/profileManagement/pages/profile-hobbyist.component.vue'),
        },

      ]
    },
    {
      path: '/artist',
      name: 'artist',
      component: () => import('@/profileManagement/pages/artist.component.vue'),
      children: [
        {
          path: 'home',
          name: 'home-artist',
          component: () => import('@/profileManagement/pages/home-artist.component.vue'),
        },
      ]
    },

  ]
})

export default router
