<template>
  <div class="mb5" >
   <div class="frmgrid" >
    <div class="title">
      <div class="title-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">行驶证信息</span>
      </div>
      <div class="title-right">
      </div>
    </div>

   <div class="field" >
      <div class="item" >
         <div class="item-left" ><span class="title">车牌号</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.plateNo" /></div>
         <div class="item-right" ></div>
      </div>
      <div class="item" >
         <div class="item-left" ><span class="title">车架号</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.vin" /></div>
         <div class="item-right" ></div>
      </div>
       <div class="item" >
         <div class="item-left" ><span class="title">发动机号</span></div>
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.engineNo" /></div>
         <div class="item-right" ></div>
      </div>
      <div class="item" >
         <div class="item-left" ><span class="title">车型</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.modelName" /></div>
         <div class="item-right" ></div>
      </div>
      <div class="item" >
         <div class="item-left" ><span class="title">注册日期</span></div>
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.registerDate" /></div>
         <div class="item-right" ></div>
      </div>
   </div>
   </div>
  <div class="space"></div>

   <div class="frmgrid" >
    <div class="title">
      <div class="title-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">是否公司车</span>
      </div>
      <div class="title-right">
      </div>
    </div>

   <div class="field" >
      <div class="item" >
         <div class="item-left" ><span class="title">车主</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carOwner.name" /></div>
         <div class="item-right" ></div>
      </div>
       <div class="item" >
         <div class="item-left" ><span class="title">证件号码</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carOwner.certNo" /></div>
         <div class="item-right" ></div>
      </div>
   </div>

   </div>

 <div class="space"></div>

   <div class="frmgrid" >
   
    <div class="title">
      <div class="title-left">
        <span class="icon">
          <img src="@/assets/images/home/titlebar_icon.png">
        </span>
        <span class="title">是否过户车</span>
      </div>
      <div class="title-right">
      </div>
    </div>

   <div class="field" >
      <div class="item" >
         <div class="item-left" ><span class="title">过户日期</span></div>
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.transferDate" /></div>
         <div class="item-right" ></div>
      </div>
   </div>


   </div>


 <button  @click="goAsChooseKind"  class="lumos-button lumos-button-positive lumos-button-bottom" >下一步</button>

  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      carPlateNoInfo: {
        carInfo: {
          plateNo: "",
          vin: "",
          engineNo: "",
          registerDate: "",
          modelCode: "",
          modelName: "",
          displacement: "",
          marketYear: "",
          passengerNumber: "",
          purchasePrice: "",
          tonnage: "",
          wholeWeight: "",
          isTransfer: false,
          transferDate: "",
          isCompanyCar: false
        },
        carOwner: {
          name: "",
          certNo: "",
          mobile: "",
          address: ""
        }
      }
    };
  },
  methods: {
    goAsChooseKind() {
      console.log("goAsChooseKind");
      this.$router.push({
        path: "/InsCar/As/ChooseKind"
      });
    }
  },
  mounted: function() {
    var carPlateNoInfo = this.$route.params.carPlateNoInfo;
    //console.log(carPlateNoInfo);
    //this.carPlateNoInfo=carPlateNoInfo;
    //this.carPlateNoInfo.carInfo.plateNo = "DASDADS";
    this.carPlateNoInfo = Object.assign({}, carPlateNoInfo);
    //Vue.set(carPlateNoInfo,'carInfo',carPlateNoInfo.carInfo);
  }
};
</script>

