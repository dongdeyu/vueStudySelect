// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/app.css'
import store from './store'
Vue.config.productionTip = false

import Axios from 'axios'
import VueAxios from 'vue-axios'
/* eslint-disable no-new */


// let obj = {
//   install: function (Vue, options) {
//     Vue.prototype.$custom = '自定义的属性';
//     // console.log(Vue)
//     // console.log(options)
//   }
// };
// Vue.use(obj)


// 引用utils.js插件
import Utils from './lib/utils'
import $ from 'jquery'
Vue.use(Utils)
Vue.use(VueAxios, Axios)
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
