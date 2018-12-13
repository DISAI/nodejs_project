// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/mui/css/mui.min.css'
import './style/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$axios = axios
/*
Vue.prototype.$axios = axios.create({
  baseURL: 'https://c.y.qq.com',
  timeout: 0,
  withCredentials: true, // 允许跨域 cookie
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  maxContentLength: 2000,
  transformResponse: [function (data) {
    try {
      data = JSON.parse(data)
    } catch (e) {
      data = {}
    }
    return data
  }]
})
 */
Vue.use(VueResource)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false

/* 主入口 */
/* eslint-disable no-new */
// 2. 创建一个Vue的实例
// 当我们导入包之后，在浏览器的内存中，就多了一个 Vue 构造函数
//  注意：我们 new 出来的这个 vm 对象，就是我们 MVVM中的 VM调度者
new Vue({
  el: '#app', // 表示，当前我们 new 的这个 Vue 实例，要控制页面上的哪个区域
  router,
  components: { App },
  template: '<App/>'
})
