import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
/*
import Layout from '@/views/Layout'
import Project from '@/views/default/project'
import Workbench from '@/views/default/workbench'
import Doc from '@/views/default/doc'
import Login from '@/components/login'
*/
// 懒加载  abc 相同自动打包成一个js文件
let Layout = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/Layout'))
  })
}
let Project = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/default/project'))
  })
}
let Workbench = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/default/workbench'))
  }, 'abc')
}
let Doc = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/default/doc'))
  }, 'abc')
}
let Login = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login'))
  })
}
//另一种写法 import 但是import只能加一个参数
/*
let Login = (resolve) => {
  return import('@/components/login')
}
*/
Vue.use(Router)
let router = new Router({
  linkActiveClass: "is-active",
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Layout',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/project',
        name: 'Project',
        component: Project,
        meta: {
          login: true
        }
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: Workbench,
        meta: {
          login: true
        }
      },
      {
        path: '/doc',
        name: 'Doc',
        component: Doc,
        meta: {
          login: false
        }
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: "*",
    redirect: "/"
  }]
})
router.beforeEach(function (to, from, next) {
  // console.log(to);
  // 正常方法
  /* let b1 = to.matched.some(function (item) {
     return item.meta.login;
   })
   */
  // matched 数组 [0]父集 [1]子集 循环遍历 some 有一项为true 则返回true 
  if (to.matched.some((item) => item.meta.login)) {
    // 想要根实例的this
    let info = router.app.$local.fetch('userName')
    if (info.login) {
      next();
    } else {
      router.push({
        path: "/login",
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next();

  }
})
export default router
