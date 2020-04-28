import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'dash',
        component: () => import('../views/Dash.vue')
      },
      {
        path: '/devlist',
        name: 'devli',
        component: () => import('../views/Devli.vue')
      },
      {
        path: '/devmap',
        name: 'devma',
        component: () => import('../views/Devma.vue')
      },
      {
        path: '/deptlist',
        name: 'depli',
        component: () => import('../views/Depli.vue')
      },
      {
        path: '/deptinfo',
        name: 'depin',
        component: () => import('../views/Depin.vue')
      },
      {
        path: '/userlist',
        name: 'usrli',
        component: () => import('../views/Usrli.vue')
      },
      {
        path: '/self',
        name: 'self',
        component: () => import('../views/Self.vue')
      },
      {
        path: 'logs',
        name: 'logs',
        component: () => import('../views/Logs.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
