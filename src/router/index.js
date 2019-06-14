import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/pages/Home/Index'
import HomeInsCar from '@/pages/Home/InsCar'
import HomeInsCom from '@/pages/Home/Inscom'
import HomeOrder from '@/pages/Home/Order'
import HomeMy from '@/pages/Home/My'
import Hello from '@/pages/hello'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex,
      children: [
        {
          path: '/Home/InsCar',
          name: 'HomeInsCar',
          component: HomeInsCar
        },
        {
          path: '/Home/InsCom',
          name: 'HomeInsCom',
          component: HomeInsCom
        },
        {
          path: '/Home/Order',
          name: 'HomeOrder',
          component: HomeOrder
        },
        {
          path: '/Home/My',
          name: 'HomeMy',
          component: HomeMy
        },
      ]
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
