import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import LoginPage from '../views/LoginPage.vue'

import AccountInformation from '../views/AccountInformation.vue'
const routes = [
  {
    path: '/home',
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
  }, 
  {
    path: '/', 
    name: 'LoginPage',
    component: LoginPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


