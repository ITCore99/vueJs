<template>
    <div>
      <counter></counter>
    </div>
</template>

<script>
  import comA from "./comA";    /**导入组件*/
  import counter from "./counter(使用vuex实现)"
    export default {
        name: "vuexDemo",
        components:{
          "com-a":comA,
          "counter":counter,
        },
    }
</script>

<style scoped>

</style>
