import Vue from 'vue'
import Router from 'vue-router'
import MainInscar from '@/views/mainInscar'
import MainInscom from '@/views/mainInscom'
import MainOrder from '@/views/mainOrder'
import MainMy from '@/views/mainMy'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainInscar',
      component: MainInscar
    },
    {
      path: '/MainInscar',
      name: 'MainInscar',
      component: MainInscar
    },
    {
      path: '/MainInscom',
      name: 'MainInscom',
      component: MainInscom
    },
    {
      path: '/MainOrder',
      name: 'MainOrder',
      component: MainOrder
    },
    {
      path: '/MainMy',
      name: 'MainMy',
      component: MainMy
    }
  ]
})
