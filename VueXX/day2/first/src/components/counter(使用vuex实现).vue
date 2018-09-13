<template>
  <div>
    <button @click="reduces"><strong>-</strong></button>
    <strong>{{$store.state.count}} </strong>
    <button @click="increase"><strong>+</strong></button>
  </div>
</template>

<script>
  export default {
    name: "comB",
    methods:{
      reduces(state)   /**在这个函数里面通过派发mutations来进行进行对数据进行更改*/
      {
          this.$store.commit("REDUCE"); /**参数是一个mutation的名字*/
      },
      increase(state)
      {
          this.$store.commit("ADD");
      }
    },
  }
</script>
<style scoped>
  button{
    width: 50px;
    font-size: 25px;
  }
</style>
