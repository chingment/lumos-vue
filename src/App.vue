<template>
  <div id="app">
    <router-view/>
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>

import tabbar from './components/TabBar'

export default {
  name: 'App',
  components: {
      'tabbar': tabbar
  },
  data(){
        return{
            selected:"mainInscar",
            tabs:[require("./assets/images/home/test.png"),require("./assets/images/home/test.png"),
                  require("./assets/images/home/test.png"),require("./assets/images/home/test.png")],
 
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
