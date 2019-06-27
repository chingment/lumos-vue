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
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.plateNo" placeholder="请输入车牌号" /></div>
         <div class="item-right" ></div>
      </div>
      <div class="item" >
         <div class="item-left" ><span class="title">车架号</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.vin" placeholder="请输入车架号" /></div>
         <div class="item-right" ></div>
      </div>
       <div class="item" >
         <div class="item-left" ><span class="title">发动机号</span></div>
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.engineNo" placeholder="请输入发动机号" /></div>
         <div class="item-right" ></div>
      </div>
      <div class="item bdb0" style="border-bottom-width: 0px;" >
         <div class="item-left" ><span class="title">车型</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carInfo.modelName" placeholder="请选择车型" /></div>
         <div class="item-right" >
                
                     <button class="lumos-button lumos-button-private">选择车型</button>
         </div>
      </div>
       <div class="item" id="item_carmodel" >
         <div class="item-left" ><span class="title">&nbsp;</span></div>
         <div class="item-middle" style="display:block" >
           <div class="tt1">{{ carPlateNoInfo.carInfo.marketYear }} 款；{{ carPlateNoInfo.carInfo.passengerNumber }} 座；排量 {{ carPlateNoInfo.carInfo.displacement }}；车价 {{ carPlateNoInfo.carInfo.purchasePrice }} 元</div>
           <div class="tt2" >* 以上是自动匹配车型，如有错误请重新选择</div>
         </div>
         <div class="item-right" ></div>
      </div>
      <div class="item" >
         <div class="item-left" ><span class="title">注册日期</span></div>
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.registerDate" placeholder="选择日期" /></div>
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

    <div class="radiobox">
        <label class="item">
          <img v-if="carPlateNoInfo.carInfo.isCompanyCar"
            src="@/assets/images/icon_chose_s@2x.png"
            alt="">
          <img v-else
            src="@/assets/images/icon_chose_n@2x.png"
            alt="">
          <input type="radio"
            v-model="carPlateNoInfo.carInfo.isCompanyCar"
             />是
        </label>
        <label class="item">
          <img v-if="carPlateNoInfo.carInfo.isCompanyCar==false"
            src="@/assets/images/icon_chose_s@2x.png"
            alt="">
          <img v-else
            src="@/assets/images/icon_chose_n@2x.png"
            alt="">
          <input type="radio"
            v-model="carPlateNoInfo.carInfo.isCompanyCar"
             />否
        </label>
      </div>

      </div>
    </div>

   <div class="field" >
      <div class="item" >
         <div class="item-left" ><span class="title">车主</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carOwner.name" placeholder="车主姓名" /></div>
         <div class="item-right" ></div>
      </div>
       <div class="item" >
         <div class="item-left" ><span class="title">证件号码</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carOwner.certNo"   placeholder="请输入证件号码"/></div>
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
         <div class="item-middle" ><input type="text" v-model="carPlateNoInfo.carInfo.transferDate" placeholder="选择日期" /></div>
         <div class="item-right" ></div>
      </div>
   </div>


   </div>


 <button  @click="goAsChooseKind"  class="lumos-button lumos-button-bottom" >下一步</button>

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

<style lang="less" scoped>
#item_carmodel {
  line-height: 1.6rem;
  font-size: 0.8rem;
  padding-top: 0px;
}

#item_carmodel .tt1 {
  color: #858585;
}

#item_carmodel .tt2 {
  color: #bf1b1c;
}
</style>
