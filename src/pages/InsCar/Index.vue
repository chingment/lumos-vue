<template>
  <div>
    <lumos-header
      :title="header.title"
      :rightButton="header.rightButton"
      v-on:rightButtonVonBadgeChange="myTest"
    ></lumos-header>

    <div class="titlebar">
      <div class="bar-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">保险积分</span>
      </div>
      <div class="bar-right"></div>
    </div>

    <ul class="rules">
      <template v-for="(rule) in this.rules">
        <li class="rule-item" :key="rule.name">
          <div class="rule-left">
            <span class="icon">
              <img :src="rule.imgUrl">
            </span>
            <span class="name">{{ rule.name }}</span>
          </div>
          <div class="rule-right">
            <span class="rate">{{ rule.rate }}</span>
          </div>
        </li>
      </template>
    </ul>

    <a @click="goLink">点击</a>

    <!-- {{ this.$store.getters.getUId }} -->
  </div>
</template>

<style scoped>
.titlebar {
  display: flex;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
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
  margin-left: .3rem;
}

.titlebar .bar-right {
  flex: 1;
  justify-content: flex-end;
  display: flex;
}

.rules{
  margin: 0rem 1rem;
}
.rule-item {
  display: flex;
  align-content: center;
  border-bottom: 1px solid #f8f8f8;
  padding: .5rem 0;
}

.rule-item:last-child{
  border-bottom-width:0px;
}

.rule-item .rule-left {
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
}

.rule-item .rule-left .icon {
  width: 5rem;
  height: 3rem;
  display: inline-block;
}
.rule-item .rule-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.rule-item .rate{
 color: #006dee;
 font-size: 1.2rem;
 font-weight: 800;
}

</style>


<script>
export default {
  data() {
    return {
      header: {
        title: {
          text: "车险询价"
        },
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
      },
      rules: [
        {
          name: "平安保险",
          imgUrl: require("@/assets/images/home/company1.png"),
          rate: "20%"
        },
        {
          name: "人保保险",
          imgUrl: require("@/assets/images/home/company2.png"),
          rate: "20%"
        },
        {
          name: "太平洋保险",
          imgUrl: require("@/assets/images/home/company3.png"),
          rate: "20%"
        }
      ]
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