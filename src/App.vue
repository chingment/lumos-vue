<template>
  <div id="app">
    {{ $route.meta.showFooter }}
    <router-view/>
    <tabbar :tabs='tabs'  v-show="$route.meta.showFooter" ></tabbar>
  </div>
</template>

<script>

import tabbar from './components/tabbar'

export default {
  name: 'App',
  components: {
      'tabbar': tabbar
  },
  data(){
        return{
            tabs:[
              {
                name:"HomeInsCar",
                text:"车险",
                iconPath:require("./assets/images/home/test.png"),
                selectedIconPath:require("./assets/images/home/test_fill.png"),
                pagePath:"Home/InsCar",
                vonBadge:{ 
                  type:"circle",
                  text:""
                },
                selected:true
              },
              { 
                name:"HomeInsCom",
                text:"寿险",
                iconPath:require("./assets/images/home/test.png"),
                selectedIconPath:require("./assets/images/home/test_fill.png"),
                pagePath:"Home/InsCom",
                vonBadge:{ 
                  type:"circle",
                  text:""
                },
                selected:false
              },
              {
                 name:"HomeOrder",
                 text:"订单",
                 iconPath:require("./assets/images/home/test.png"),
                 selectedIconPath:require("./assets/images/home/test_fill.png"),
                 pagePath:"Home/Order",
                 vonBadge:{ 
                  type:"number",
                  text:"20"
                 },
                 selected:false
              },
              {
                 name:"HomeMy",
                 text:"我的",
                 iconPath:require("./assets/images/home/test.png"),
                 selectedIconPath:require("./assets/images/home/test_fill.png"),
                 pagePath:"Home/My",
                 vonBadge:{ 
                  type:"circle",
                  text:"2"
                 },
                 selected:false
              }
            ]
          }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
