<template>
  <div class="lumos-header">
       <div class="lumos-header-button">

       </div>
       <div class="lumos-header-title">
          <span>{{ atitle }}</span>
       </div>
       <div class="lumos-header-button">

       </div>
  </div>
</template>
 
<style lang='less' scoped>

  .lumos-header{
      background:  @themeColor;
      height: 2.4rem;
      color: #fff;
      display: flex;
       align-items: center; 
  }

  .lumos-header .lumos-header-button{
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
  }

  .lumos-header .lumos-header-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

</style>

<script>
export default {
  name: "lumos-header",
  data() {
    return {
         atitle: this.title
    };
  },
  props: {
     title: String
  }
};
</script>
