<template>
 <a @click="goLink">inscar</a>
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
      this.global.setname("hello,chingment")
      this.$router.push({
        path: '/Hello',
        name: "Hello"
      })
    }
  }
}
</script>