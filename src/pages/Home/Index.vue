<template>
  <div class="lumos-page">
    <button @click="clickParent">点击</button>
    <div class="lumos-tabbody">
    <router-view/>
    </div>
     <lumos-tabbar :tabs="tabs" ref="mychild"  ></lumos-tabbar> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "InsCar",
          text: "车险",
          pagePath: "/InsCar",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "circle",
            text: ""
          },
          selected: true
        },
        {
          name: "InsMarket",
          text: "意外险",
          pagePath: "/InsMarket",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "circle",
            text: ""
          },
          selected: false
        },
        {
          name: "InsClaim",
          text: "理赔",
          pagePath: "/InsClaim",
          iconPath: require("@/assets/images/home/test.png"),
          selectedIconPath: require("@/assets/images/home/test_fill.png"),
          vonBadge: {
            type: "number",
            text: "20"
          },
          selected: false
        },
        {
          name: "My",
          text: "我的",
          pagePath: "/My",
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
  },
  methods: {
    clickParent() {
      this.$refs.mychild.setVonbadgeText(1, "嘿嘿嘿");
    }
  }
  
};
</script>



