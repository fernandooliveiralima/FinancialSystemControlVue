import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Transactions from '@/pages/Transactions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name: 'Home', path: '/', component: Home},
    {name: 'Transactions', path: '/Transactions', component: Transactions}
  ]
})

export default router;
