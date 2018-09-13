import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,  /**将导入的router路由实例注入到vue实例的入口文件*/
  store,  /**vue的实例中手动的注入store*/
  components: { App },
  template: '<App/>'
})
