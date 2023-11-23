import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/accounts/pages/welcome.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/about',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/accounts/pages/about.component.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/accounts/pages/sign-in.component.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/accounts/pages/sign-up.component.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: () => import('@/agreements/terms-and-conditions.component.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/agreements/privacy-policy.component.vue')
    },
    {
      path: '/hobbyist',
      name: 'hobbyist',
      component: () => import('@/profiles/pages/hobbyist.component.vue'),
      children: [
        {
          path: 'home',
          name: 'home-hobbyist',
          component: () => import('@/profiles/pages/home-hobbyist.component.vue'),
        },
        {
          path: 'profile',
          name: 'profile-hobbyist',
          component: () => import('@/profiles/pages/profile-hobbyist.component.vue'),
        },

      ]
    },
    {
      path: '/artist',
      name: 'artist',
      component: () => import('@/profiles/pages/artist.component.vue'),
      children: [
        {
          path: 'home',
          name: 'home-artist',
          component: () => import('@/profiles/pages/home-artist.component.vue'),
        },
        {
          path: 'profile',
          name: 'profile-artist',
          component: () => import('@/profiles/pages/profile-artist.component.vue'),
        },
        {
          path: 'gallery',
          name: 'artist-gallery',
          component: () => import('@/profiles/pages/artist-gallery.component.vue'),
        },
      ]
    },

  ]
})

export default router
