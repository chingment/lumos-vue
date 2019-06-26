<template>
  <div class="mb5" >
  FSFD
 <button  @click="goAsInsOffer"  class="lumos-button lumos-button-positive lumos-button-bottom" >下一步</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goAsInsOffer() {
       console.log("goAsInsOffer");
         this.$router.push({
         path: "/InsCar/As/InsOffer",
       });
    }
  }
  
};
</script>
