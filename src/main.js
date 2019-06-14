// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//单个组件导入
//import tabbar from "@/components/tabbar/src/tabbar";
//Vue.component("lumos-tabbar", tabbar);


//整套组件导入 通过components下的index.js文件导入组件,遍历 index.js 对象
import components from './components/index'

Object.keys(components).forEach((key) => {
	Vue.component(components[key].name, components[key])
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



