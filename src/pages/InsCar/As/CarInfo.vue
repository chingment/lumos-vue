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
             <button @click="searchCarModel" class="lumos-button lumos-button-private">选择车型</button>
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
         <div class="item-middle" @click="registerDateClick" ><input type="text" onfocus="this.blur();"  v-model="carPlateNoInfo.carInfo.registerDate" placeholder="选择日期" /></div>
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
          <lumos-switch v-model="carPlateNoInfo.carInfo.isCompanyCar" ></lumos-switch>
      </div>
    </div>

   <div class="field" >
      <div class="item" >
         <div class="item-left" ><span class="title">车主</span></div>
         <div class="item-middle" ><input type="text"  v-model="carPlateNoInfo.carOwner.name" placeholder="车主姓名" /></div>
         <div class="item-right" ></div>
      </div>
       <div class="item" v-show="carPlateNoInfo.carInfo.isCompanyCar" >
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
             <lumos-switch v-model="carPlateNoInfo.carInfo.isTransfer" ></lumos-switch>
      </div>
    </div>

   <div class="field" v-show="carPlateNoInfo.carInfo.isTransfer" >
      <div class="item" >
         <div class="item-left" ><span class="title">过户日期</span></div>
         <div class="item-middle" @click="transferDateClick" >
         
           
           <input type="text" onfocus="this.blur();" v-model="carPlateNoInfo.carInfo.transferDate" placeholder="选择日期" /></div>
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
    },
    registerDateClick() {
      var _this = this;
      var _val = this.carPlateNoInfo.carInfo.registerDate;
      this.$picker.show({
        type: "datePicker",
        date: _val,
        endTime: _this.getNowFormatDate(),
        startTime: "1930-01-01",
        onOk: date => {
          _this.carPlateNoInfo.carInfo.registerDate = date;
        }
      });
    },
    transferDateClick() {
      var _this = this;
      var _val = this.carPlateNoInfo.carInfo.transferDate;
      this.$picker.show({
        type: "datePicker",
        date: _val,
        endTime: _this.getNowFormatDate(),
        startTime: "1990-01-01",
        onOk: date => {
          _this.carPlateNoInfo.carInfo.transferDate = date;
        }
      });
    },
    searchCarModel ()   {
      this.toast('dasdadd');
      this.$router.push({
        path: "/InsCar/As/CarModelSearch"
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
