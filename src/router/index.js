import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

import AccountInformation from '../views/AccountInformation.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/account_information',
    name: 'AccountInformation',
    component: AccountInformation
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


