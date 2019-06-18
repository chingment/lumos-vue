import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/pages/Home/Index'
import InsCarIndex from '@/pages/InsCar/Index'
import InsMarketIndex from '@/pages/InsMarket/Index'
import InsClaimIndex from '@/pages/InsClaim/Index'
import MyIndex from '@/pages/My/Index'
import Hello from '@/pages/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home/Index', name: 'HomeIndex', component: HomeIndex, children: [
        { path: '/InsCar', name: 'InsCar', component: InsCarIndex,meta: {requireAuth: true} },
        { path: '/InsMarket', name: 'InsMarket', component: InsMarketIndex,meta: {requireAuth: true} },
        { path: '/InsClaim', name: 'InsClaim', component: InsClaimIndex,meta: {requireAuth: true} },
        { path: '/My', name: 'My', component: MyIndex,meta: {requireAuth: false} }
      ]
    },
    {
      path: '/Hello', name: 'Hello', component: Hello
    }
  ]
})
