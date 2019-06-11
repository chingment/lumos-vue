<template>
  <mt-tabbar v-model="message" fixed>
        <mt-tab-item id="mainInscar">
            <img slot="icon" :src="this.atabs[0]">
            车险
        </mt-tab-item>
        <mt-tab-item id="mainInscom">
            <img slot="icon" v-bind:src="this.atabs[1]">
            寿险
        </mt-tab-item>
        <mt-tab-item id="mainOrder">
            <img slot="icon" v-bind:src="this.atabs[2]">
            订单
        </mt-tab-item>
        <mt-tab-item id="mainMy">
            <img slot="icon" v-bind:src="this.atabs[3]">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
 
 
<script>
export default {
    data(){
        return{
        //选中的tabbar值message为外面页面传入的值selected
            message:this.selected,
        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
            atabs:this.tabs,
        }
    },
    props:{
        selected: String,
        tabs:Array,
    },
    watch: {
        message: function (val, oldVal) {
            console.log(val)
            // 这里就可以通过 val 的值变更来确定去向
            switch(val){
                case 'mainInscar':
                    this.$router.push('/mainInscar');
                break;
                case 'mainInscom':
                    this.$router.push('/mainInscom');
                break;
                case 'mainOrder':
                    this.$router.push('/mainOrder');
                break;
                case 'mainMy':
                    this.$router.push('/mainMy');
                break;
            }
        }
    },
}
</script>

