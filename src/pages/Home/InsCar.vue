<template>
<div>
 <a @click="goLink">inscar</a>

{{ this.$store.state.testStatus.helloWorld }}

</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '哈哈'
    }
  },
  methods: {
    goLink() {
 
      this.$store.commit('updateTestStatus', {
            name: 'helloWorld',
            val: "hello,chingment"
      });

      this.$router.push({
        path: '/Hello',
        name: "Hello"
      })
    }
  }
}
</script>