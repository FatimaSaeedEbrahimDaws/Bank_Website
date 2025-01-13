import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homepage.vue'
import Careers from '../views/careers.vue'
import About from '../views/about.vue'
import Security from '../views/security.vue'
import SignUp from '../views/signUp.vue'
import Login from '../views/login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/about.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: Security
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
