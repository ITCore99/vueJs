<template>
  <div>
    <h1>我是首页</h1>
    <router-link :to="{path:'/login',query:{userinfo:'username is sanmu'}}">跳转到登录里面携带了查询字符串</router-link>
    <br>
    <button @click="handleGetData">获取数据</button>
    <button @click="handleJsonp">使用jsonp来解决跨域问题</button>
    <button @click="getNoSimple">使用cors来解决非简单请求的问题</button>s
    <button @click="VueChange">使用vue脚手架进行代理跨域</button>
    <!--练习使用vuex来进行数据的管理-->
    <div style="border: 1px solid #000;display:flex;justify-content: space-between;width:600px;margin-top:10px;">
      <com-a ></com-a>
      <com-b ></com-b>
      <strong >单价：{{this.$store.state.price}}</strong>
      <input type="text" v-model="toCount"/>
      <button @click="changeCount(toCount)">改变</button>
      <button @click="asyncChange">异步操作</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import comA from "./comA";  /**要使用组件的话就先引入*/
  import comB from "./comB";
  import {mapMutations} from "vuex"; /**引入mutation辅助函数进行对代码的简化*/
    export default {
        name: "home",
        data(){
          return{
            toCount:'',
          }
        },
        methods: {
          handleGetData() {
            axios.get("http://localhost:4321/getMsg").then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          },
          handleJsonp()/*注意如果要使用jsonp的话我们主要在客户端进行相应的操作,且需要的是在服务器端返回的数据必须要是jsonp的其余一律不行**/ {
            let script = document.createElement("script");
            script.src = "http://localhost:4321/getJsonp?callback=getData()";
            let body = document.body;
            body.appendChild(script)

          },
          getNoSimple() {
            axios.post("http://localhost:4321/noSimple", {man: "F", wife: "Z"}, {withCredentials: true}).then(res => {
              /**注意axios post当带上数据时发送的是非简单请求，当不带数据时发送的简单请求*/
              console.log(res);
            })
          },
          VueChange() {
            axios.get("/api/getMsg").then(res => {
              console.log(res);
            });
          },
          change()
          {
              this.$store.commit("changeCount",this.toCount);
          },
          ...mapMutations(["changeCount"]), /**mapmutaions的一个应用实例*/
          asyncChange()
          {
              this.$store.dispatch("asyncChangeAction",this.toCount) /**使用dispatch触发一个action*/
          }
        },
      components:{    /**引入局部组件*/
          "com-a":comA,
          "com-b":comB,
      }
    }
</script>

<style>
*{
  padding:0;
  margin: 0;
}
</style>
