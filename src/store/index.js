import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// select
let selectModule = {
  state: {
    title: 'hello',
    list: []
  },
  mutations: {
    changeTitle(state, payload) {
      state.title = payload.title
    },
    changeList(state, list) {
      state.list = list
    }
  },
  actions: {
    // 发送请求
    getlists({
      commit
    }) {
      axios.get('https://www.easy-mock.com/mock/5abda425597f2f6d4d73af2c/testLirsts/testUrl')
        .then((data) => {
          console.log(data.data)
          commit('changeList', data.data) //拿到数据后提交mutations改变状态
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
//定义一个容器
let store = new Vuex.Store({
  state: {
    count: 101,
  },
  getters: {
    filterCount(state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  // mutations必须为同步
  mutations: {
    addNumber(state, payload) {
      state.count += payload.n
    },

    minNumber(state, payload) {
      if (state.count < 100) {
        return false
      }
      state.count -= payload.de
    },
  },
  // actions为异步操作
  actions: {
    addAction(context) {
      console.log(context)
      setTimeout(() => {
        // 改变状态必须提交mutations
        context.commit('addNumber', {
          n: 5
        })
        context.dispatch('addAction2', {
          test: '测试'
        })
      }, 1000)
    },
    addAction2(context, obj) {
      console.log(obj)
    },

  },
  modules:{
    selectModule
  }
})

export default store
