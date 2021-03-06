import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/Index'
import about from '../views/About'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: index,
    name: 'index'
  },
  {
    path: '/about',
    component: about,
    name: 'about'
  },

  {
    path: '*',
    redirect: {
      name: 'index'
    }
  } //重定向至首页
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router