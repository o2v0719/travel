<template>
  <div class="wrapper">
    <!-- v-if="list.length": 当list数组还是空的时候，不要渲染，以防干扰轮播图的原始顺序 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      }
    }
  },
  computed: {
    // 避免在结构里面出现过多逻辑代码，可以使用计算属性替代
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  // 父级高度随子级内容高度自适应
  overflow hidden
  width 100%
  height 0
  padding-bottom 30.475%
  background #eee
  .swiper-img
    width 100%
</style>