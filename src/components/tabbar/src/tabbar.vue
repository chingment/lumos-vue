<template>
   <div class="lumos-tabbar fixed" >
      <template v-for="(tab) in this.atabs">

         <router-link  class="lumos-tab-item" :key="tab.name" :to="tab.pagePath" >
             <div class="lumos-tab-icon"  >
                 <img v-if="!tab.selected" :src="tab.iconPath">
                 <img v-if="tab.selected" :src="tab.selectedIconPath">
             </div> 
             <div class="lumos-tab-text" >
                 <span>{{ tab.text }}</span>
             </div>
             <div class="lumos-tab-vonbadge" >
                 <span :class="tab.vonBadge.type" >{{ tab.vonBadge.text }}</span>
            </div>
         </router-link>

     </template>
   </div>
</template>
 
<style>
.lumos-tabbar {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  z-index: 10;
  background-color: #fff;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
}
.lumos-tabbar.fixed {
  position: fixed;
}
.lumos-tabbar .lumos-tab-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  text-decoration: none;
}

.lumos-tabbar .lumos-tab-icon {
  flex: none;
  height: 32px;
  width: 32px;
  text-align: center;
  margin: auto;
}

.lumos-tabbar .lumos-tab-icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.lumos-tabbar .lumos-tab-text {
  font-size: 32px;
}

.lumos-tabbar .lumos-tab-vonbadge {
  position: absolute;
  top: 2px;
  left: 50%;
  margin-left: 6px;
}
</style>

<script>
export default {
  name: "lumos-tabbar",
  data() {
    return {
      //选中的tabbar值message为外面页面传入的值selected
      aselected: this.selected,
      //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
      atabs: this.tabs
    };
  },
  props: {
    selected: String,
    tabs: Array
  },
  methods: {
    tabclick(index) {
      //console.log("pagePath:"+name	);
      this.setTab(index);
    },
    setTab(index) {
      console.log("pagePath:" + index);
      //var m_pagePath=pagePath.toLowerCase();
      var m_index = -1;

      for (var i = 0; i < this.atabs.length; i++) {
        this.atabs[i].selected = false;
        // var l_index=this.atabs[i].pagePath.toLowerCase();
        if (i == index) {
          m_index = i;
        }
      }

      if (m_index > -1) {
        this.atabs[m_index].selected = true;
        this.$router.push(this.atabs[m_index].pagePath);
      }
    },
    setVonbadgeText(index, text) {
      this.atabs[index].vonBadge.text = text;
    }
  },
  mounted: function() {


    var m_cur_route_name = this.$route.name;

    for (var i = 0; i < this.atabs.length; i++) {
      var l_name = this.atabs[i].name;

       this.atabs[i].selected=false;
       
      if (l_name == m_cur_route_name) {
           this.atabs[i].selected = true;
      }
    }


  }
};
</script>

