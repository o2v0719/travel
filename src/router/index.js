import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时，显示出来的页面始终回到最顶部
    return { x: 0, y: 0 }
  }
})
