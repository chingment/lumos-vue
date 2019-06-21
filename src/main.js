// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//import lumosui from 'lumos-ui'

import './assets/css/base.css'

//Vue.use(lumosui)

//单个组件导入
//import tabbar from "@/components/tabbar/src/tabbar";
//Vue.component("lumos-tabbar", tabbar);


//整套组件导入 通过components下的index.js文件导入组件,遍历 index.js 对象
import components from './lib/index'

Object.keys(components).forEach((key) => {
	Vue.component(components[key].name, components[key])
});

import VueScrollTo from "vue-scrollto";


//https://github.om/rigor789/vue-scrollto

let options = {
  container: "body", //滚动的容器
  duration: 500, //滚动时间
  easing: "ease", //缓动类型
  offset: 0, //滚动时应应用的偏移量。此选项接受回调函数
  force: true, //是否应执行滚动
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
};

Vue.use(VueScrollTo, options);

// //方法挂靠全局
// Object.keys(global).forEach((key) => {
// 	Vue.prototype[key] = global[key];
// });


router.beforeEach((to, from, next) => {
  
  // if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
  // next({
  //   path: '/My',
  //   query: { redirect: to.fullPath }
  // })
  // }
  // else {
  //   next();
  // }

   next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



