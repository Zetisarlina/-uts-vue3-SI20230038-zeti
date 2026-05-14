import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DonationView from '../views/DonationView.vue'
import ReportView from '../views/ReportView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/donation',
    component: DonationView
  },
  {
    path: '/report',
    component: ReportView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router