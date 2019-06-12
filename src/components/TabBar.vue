<template>
  <mt-tabbar v-model="aselected" fixed>
      <template v-for="(tab) in this.atabs">
         <mt-tab-item :id="tab.id" :key="tab.id" >
           <img slot="icon" v-if="!(aselected===tab.id)" :src="tab.iconPath">
           <img slot="icon" v-if="aselected=== tab.id" :src="tab.selectedIconPath">
             {{ tab.text }}
        </mt-tab-item>
     </template>
    </mt-tabbar>
</template>
 
<script>
export default {
    data(){
        return{
        //选中的tabbar值message为外面页面传入的值selected
            aselected:this.selected,
        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
            atabs:this.tabs,
        }
    },
    props:{
        selected: String,
        tabs:Array,
    },
    watch: {
        aselected: function (val, oldVal) {
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

