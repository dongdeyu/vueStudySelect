/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
let local = {
  // 存值
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 取值
  fetch (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  }
}

export default {
  install: function (vm) {
    vm.prototype.$local = local
  }
}
