<template>
    <div>
      <button @click="reduces"><strong>-</strong></button>
      <strong>{{count}} </strong> <!--这就是mapstate函数的一个应用场景-->
      <button @click="increase"><strong>+</strong></button>
    </div>
</template>

<script>
    import {mapState} from "vuex";/**引入一个mapstate辅助函数解决可以省略this.$store.state进行代码的简化*/
    export default {
      name: "comB",
      methods:{
        reduces()
        {
          if(this.$store.state.count>0)
          {
            // this.$emit("handleReduce");
            this.$store.commit("REDUCE");
          }

        },
        increase()
        {
            // this.$emit("handleIncrease");
            this.$store.commit("ADD");
        }
      },
      computed:
        {
          ...mapState(["count"]) /**函数返回一个对象*/
        }
    }
</script>
<style scoped>
  button{
    width: 50px;
    font-size: 25px;
  }
</style>
