import Vue from 'vue'
import VueRouter from 'vue-router'
import Drop from "../components/drop";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>import('../views/Home.vue')
  },
  {
    path: '/reservoirInfo',
    name: 'ReservoirInfo',
    component: () => import('../components/reservoirInfoDemo.vue')
  },
  {
    path: '/drop',
    name: 'Drop',
    component: Drop
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
