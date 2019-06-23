<template>
  <div>
    <lumos-header
      :title="header.title"
      :rightButton="header.rightButton"
      v-on:rightButtonVonBadgeChange="myTest"
    ></lumos-header>


   <div class="block-rules" >
    <div class="titlebar">
      <div class="bar-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">保险公司</span>
      </div>
      <div class="bar-right"></div>
    </div>

    <ul class="rules">
      <template v-for="(rule,index) in this.rules">
        <li class="item" :key="index">
          <div class="item-left">
            <span class="icon">
              <img :src="rule.imgUrl">
            </span>
            <span class="name">{{ rule.name }}</span>
          </div>
          <div class="item-right">
            <span class="rate">{{ rule.rate }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
   <div class="space"></div>

  <div class="block-serarch" >
  <!-- <a @click="goLink" >点击</a>  -->


    <div class="lumos-lnav" >
     <plateNumber @getPlateLicense="getPlateLicense" ></plateNumber>
    
     <div class="item" >
      <div class="item-lefticon lumos-hid"></div>
      <div class="item-content" >  
      <div class="title" > 投保城市  </div>
      <div class="note" >广州市</div>
      </div>  
      <div class="item-righticon" >
           <img 
            src="@/assets/images/icon_right.png"
            alt="">
      </div>      
     </div>
    
    </div>


   <button class="lumos-button lumos-button-positive lumos-button-block" >立即询价</button>

   
      <div class="manr">

       <span >人工报价</span>
       <img src="@/assets/images/icon_right.png" alt="">


      </div>

  </div>
<div class="block-hisPlateNumbers"  >
    <div class="titlebar">
      <div class="bar-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">历史记录</span>
      </div>
      <div class="bar-right"></div>
    </div>

   <div class="hisPlateNumbers"  >
      <template v-for="(hisPlateNumber,index) in this.hisPlateNumbers">
        <div class="item" :key="index">
            <span>{{ hisPlateNumber.plateNumber }}</span>
        </div>
      </template>
   </div>

</div>
  

    <!-- {{ this.$store.getters.getUId }} -->
  </div>
</template>

<style scoped>


.block-rules, .block-hisPlateNumbers{
  background-color: #fff;
  padding: 1rem;
}
.block-serarch{
  background-color: #fff;
   padding:0 1rem;
}

.titlebar {
  display: flex;
  align-items: center;
  background-color: #fff;
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
  margin-left: 0.3rem;
}

.titlebar .bar-right {
  flex: 1;
  justify-content: flex-end;
  display: flex;
}

.rules {

}
.rules > .item {
  display: flex;
  align-content: center;
  border-bottom: 1px solid #f8f8f8;
  padding: 0.5rem 0;
}

.rules > .item:last-child {
  border-bottom-width: 0px;
}

.rules > .item .item-left {
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
}

.rules > .item .item-left .icon {
  width: 5rem;
  height: 3rem;
  display: inline-block;
}
.rules > .item .item-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.rules .name{
  font-size: 1.1rem;
  padding-left: .2rem;
}

.rules .rate {
  color: #006dee;
  font-size: 1.2rem;
  font-weight: 800;
}

.hisPlateNumbers{
 display: block;
 text-align: left;
 margin-top: .8rem;
}
.hisPlateNumbers > .item{
  background-color: #f8f8f8;
  padding: .5rem .5rem;
  margin: .2rem;
  border-radius: 6px;
  display: inline-block;
  color: #b7b7b7
}

.manr span{
  color: #006dee;
  font-size: .8rem;
}
.manr img{
   width: .3rem;
  height: .6rem;
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
          rate: "20"
        },
        {
          name: "人保保险",
          imgUrl: require("@/assets/images/home/company2.png"),
          rate: "18"
        },
        {
          name: "太平洋保险",
          imgUrl: require("@/assets/images/home/company3.png"),
          rate: "21"
        }
      ],
      hisPlateNumbers: [
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        },
        {
          plateNumber: "粤AT810P"
        }
      ]
    };
  },
  methods: {
    getPlateLicense(data) {
      console.log("组件传出的data", data);
    },
    goLink() {
     // document.body.scrollTop = '300px';
      //this.header.title.text = "ssss"
      //this.header.rightButton.vonBadge.text = "12";
     


// this.$nextTick(() => {
//      document.body.scrollTop =1000
// });
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