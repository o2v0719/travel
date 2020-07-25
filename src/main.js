import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端个别浏览器0.3s点击延迟的问题
import fastClick from 'fastClick'

//此处路径在webpack.base.conf.js中配置过
import 'styles/reset.css'
// 解决移动端1像素边框的问题
import 'styles/border.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
