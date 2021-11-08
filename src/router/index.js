import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Porfolio from '../components/portfolio/Portfolio.vue';
import Stocks from '../components/stocks/Stocks.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Porfolio
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
