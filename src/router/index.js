import Vue from 'vue'
import Router from 'vue-router'
import HomeInsCar from '@/pages/Home/InsCar'
import HomeInsCom from '@/pages/Home/Inscom'
import HomeOrder from '@/pages/Home/Order'
import HomeMy from '@/pages/Home/My'
import Hello from '@/pages/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeInsCar',
      component: HomeInsCar,
      meta: {
        index: 1,
        showFooter: true
      }
    },
    {
      path: '/Home/InsCar',
      name: 'HomeInsCar',
      component: HomeInsCar,
      meta: {
        index: 1,
        showFooter: true
      }
    },
    {
      path: '/Home/InsCom',
      name: 'HomeInsCom',
      component: HomeInsCom,
      meta: {
        index: 1,
        showFooter: true
      }
    },
    {
      path: '/Home/Order',
      name: 'HomeOrder',
      component: HomeOrder,
      meta: {
        index: 1,
        showFooter: true
      }
    },
    {
      path: '/Home/My',
      name: 'HomeMy',
      component: HomeMy,
      meta: {
        index: 1,
        showFooter: true
      }
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      meta: {
        index: 1,
        showFooter: false
      }
    }
  ]
})
