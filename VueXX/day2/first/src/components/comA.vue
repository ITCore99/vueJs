<template>
  <div>
    <h3>小计:{{$store.getters.totalPrice}}</h3>
  </div>
</template>

<script>
    export default {
      name: "comA",
      computed:{
          total(){
            return this.$store.state.count*this.$store.state.price;
          },
      }
    }
</script>

<style scoped>

</style>
