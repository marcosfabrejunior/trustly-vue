import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  
  {
    path: '/',
    name: 'Sneakers',
    component: Products
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
