<template>
  <div class="lumos-page">
    <div class="lumos-tabbody">
    <router-view/>
    </div>
  
     <lumos-tabbar :tabs="tabs"></lumos-tabbar> 
  </div>
</template>


<script>
 //import tabbar from "@/components/tabbar/src/tabbar";

export default {
  //  components: {
  //    tabbar: tabbar
  //  },
  data() {
    return {
      tabs: [
        {
          name: "HomeInsCar",
          text: "车险",
          pagePath: "/Home/InsCar",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "circle",
            text: ""
          },
          selected: true
        },
        {
          name: "HomeInsCom",
          text: "寿险",
          pagePath: "/Home/InsCom",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "circle",
            text: ""
          },
          selected: false
        },
        {
          name: "HomeOrder",
          text: "订单",
          pagePath: "/Home/Order",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "number",
            text: "20"
          },
          selected: false
        },
        {
          name: "HomeMy",
          text: "我的",
          pagePath: "/Home/My",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "circle",
            text: "2"
          },
          selected: false
        }
      ]
    };
  }
};
</script>



