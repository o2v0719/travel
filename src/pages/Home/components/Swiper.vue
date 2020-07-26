<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }
      ]
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