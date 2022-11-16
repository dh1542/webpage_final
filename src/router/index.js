import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ProjectsView from '../view/ProjectsView.vue'
import ExchangeRateTool from '../view/ExchangeRateTool.vue'

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
    name: 'exhangeRate',
    component: ExchangeRateTool
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
