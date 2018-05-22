import Vue from 'vue'
import Vuex from 'vuex'
import	actions from './actions.js'
import mutations from './mutations.js'
Vue.use(Vuex)
//安装之后，创建一个store，需一个state对象和mutation
const state={
  notelist:[],    //note列表
  activenote:{}  //当前note对象
}
const getters={
     note:state=>state.notelist,
     Activenote:state=> state.activenote
}
export default new Vuex.Store({
	state,
  getters,
  mutations,
	actions

})