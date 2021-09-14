import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from "../components/Hello";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>import('../views/Home.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
