import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//vuex
import store from './store'

//此处路径在webpack.base.conf.js中配置过
import 'styles/reset.css'
// 解决移动端1像素边框的问题
import 'styles/border.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
