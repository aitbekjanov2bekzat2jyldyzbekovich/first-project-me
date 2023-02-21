import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'

let user = localStorage.getItem('user') || null


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../views/People.vue'),
      redirect: user ? '' : '/auth/login'
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
      redirect: user ? '' : '/auth/login'
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
      redirect: user ? '' : '/auth/login'
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      path: '/auth/registration',
      name: 'registr',
      component: () => import('@/views/auth/Registr.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/auth/PrivateAcc.vue')
    },
    {
      path: '/person/:id',
      name: 'person',
      component: () => import('@/views/Person.vue')
    },
    {
      path: '/show/:id',
      name: 'showPage',
      component: () => import('@/views/ShowPage.vue')
    }

  ]
})

export default router
