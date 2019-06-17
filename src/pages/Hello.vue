<template>
	<div>我是aaa {{ this.$store.state.testStatus.helloWorld }}
	<button @click="back">点我返回</button>
	</div>
	
</template>
 
<script>
export default {
  name: 'aaa',
  data () {
    return {
      msg: '哈哈'
    }
  },
  methods:{
  	back(){

      this.$store.commit('updateTestStatus', {
            name: 'helloWorld',
            val: "hello,chingment333"
      });

  		this.$router.push('/Home/InsCar')
  	}
  }
}
</script>