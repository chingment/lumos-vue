// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


//单个组件导入
//import tabbar from "@/components/tabbar/src/tabbar";
//Vue.component("lumos-tabbar", tabbar);


//整套组件导入 通过components下的index.js文件导入组件,遍历 index.js 对象
import components from './components/index'

Object.keys(components).forEach((key) => {
	Vue.component(components[key].name, components[key])
});


// //方法挂靠全局
// Object.keys(global).forEach((key) => {
// 	Vue.prototype[key] = global[key];
// });


router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
  next({
    path: '/My',
    query: { redirect: to.fullPath }
  })
  }
  else {
    next();
  }

  //next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



