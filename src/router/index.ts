import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import FreezerForm from '../views/FreezerForm.vue'
import FreezerView from '../views/FreezerView.vue'
import Home from '../views/Home.vue'
import ItemFreezerDetail from '../views/ItemFreezerDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/freezer',
    name: 'freezer',
    component: FreezerView
  },
  {
    path: '/freezer/:drawerId',
    name: 'freezerForm',
    component: FreezerForm
  },
  {
    path: '/item',
    name: 'item',
    component: ItemFreezerDetail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
