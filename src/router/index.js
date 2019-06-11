import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainInscar from '@/views/mainInscar'
import MainInscom from '@/views/mainInscom'
Vue.use(Router)

export default new Router({
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
    }
  ]
})
