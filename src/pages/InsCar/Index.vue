<template>
<div>


<lumos-header :title="header.title" :rightButton="header.rightButton" v-on:rightButtonVonBadgeChange="myTest"></lumos-header>



    <div class="titlebar">
      <div class="bar-left" >
       <span class="icon" > 
        <img src="@/assets/images/home/titlebar_icon.png">
       </span>
      <span class="title" >
        保险积分
        </span>
      </div>
      <div class="bar-right">
      </div>
    </div>

    <ul class="rule" >
        <li>
          <div class="rule-left" >
            <div class="icon">
            <img  src=""/>
            </div>
            <span class="name">

            </span>
          </div>
          <div class="rule-right">
              <span class="rate" ></span>
          </div>
        </li>  
    </ul>




 <a @click="goLink">点击</a> 





<!-- {{ this.$store.getters.getUId }} -->

</div>
</template>

<style scoped>
.titlebar {
  display: flex;
  align-items: center;
  margin: 1rem;
}

.titlebar .bar-left {
  flex: 1;
  justify-content: flex-start;
  display: flex;
  align-items: center;
}

.titlebar .bar-left .icon {
  width: 0.4rem;
  height: 2rem;
}

.titlebar .bar-left .title {
  font-weight: 600;
  font-size: 1.6rem;
}

.titlebar .bar-right {
  flex: 1;
  justify-content: flex-end;
  display: flex;
}

</style>


<script>
export default {
  data() {
    return {
      header: {
        title: { text: "车险询价" },
        leftButton: {
          iconPath: require("@/assets/images/home/icon_order.png"),
          vonBadge: {
            type: "number",
            text: "10"
          }
        },
        rightButton: {
          iconPath: require("@/assets/images/home/icon_order.png"),
          vonBadge: {
            type: "number",
            text: "10"
          }
        }
      }
    };
  },
  methods: {
    goLink() {
      //this.header.title.text = "ssss"
      this.header.rightButton.vonBadge.text = "12";

      //this.$store.dispatch('setUId', 'test');

      // this.$router.push({
      //   path: "/Hello",
      //   name: "Hello"
      // });
    },
    myTest() {
      console.log("dsads");
    }
  }
};
</script>