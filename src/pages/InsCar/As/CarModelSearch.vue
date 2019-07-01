<template>
  <div>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: {
        name: "'我是父级组件的内容'"
      }
    };
  },
  methods: {
    onChange() {
      this.text.name = "我是由父级组件触发改变了内容";
    },
    search(type,key) {

    
       this.$http
        .get("/InsCar/SearchModelInfo", { type: type,key:key })
        .then(res => {
          console.log(res);
          
        });

    }
  },
  mounted: function() {
    this.search('1','TV');
  }
};
</script>
<style scoped>
</style>
