<template>
<div>
 <a @click="goLink">inscar</a>

{{ this.$store.getters.getUId }}

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
 
      //this.$store.dispatch('setUId', 'test');

      this.$router.push({
        path: '/Hello',
        name: "Hello"
      })
    }
  }
}
</script>