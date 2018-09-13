import Vue from "vue";
import Vuex from "vuex";
/**实例化vuex实例*/

Vue.use(Vuex);

/**初始化一个store*/

const store=new Vuex.Store({
  state:{
    count:0,
    price:22,
  },
  mutations:{   /**对状态值值的修改都要通过mutations来进行操作,名称一般约定大写*/
    ADD(state)
    {
        state.count++;
    },
    REDUCE(state)
    {
        state.count--;
    },
    changeCount(state,palyLoad)
    {
      state.count=palyLoad;
    },
  },
  getters:{   /**getters类似一个computed的,申明在getters里面可以在其他的组件中应用，而使用computed是局限在当前的的组件*/
      totalPrice(state){
        return state.count*state.price;
    },
  },
  actions:{   /**action类似于mutation只不过是专门做异步的这是vue的官网推荐我们使用的方法将异步代码写在action中*/
    asyncChangeAction(store,playload)
    {
        setTimeout(()=>{
          store.commit("changeCount",playload);
        },2000)
    }
  }
});
export  default  store;

