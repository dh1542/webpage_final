import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ProjectsView from '../view/ProjectsView.vue'
import ExchangeRateCalculatorView from '../view/ExchangeRateCalculatorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/exchangeRate',
    name: 'exchangeRateCalculatorView',
    component: ExchangeRateCalculatorView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
