import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Backend from '../views/backend/index.vue';

import Frontend from '../views/frontend/index.vue'
import Recommended from '../views/recommended/index.vue'
// const Home = { template: '<div>Home</div>' }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/backend',
    name: 'Backend',
    component: Backend
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: Frontend
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: Recommended
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router