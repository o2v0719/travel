<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        //禁止自动播放
        autoplay: false
      },
      iconList: [{
        id: '0001',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0002',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0004',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0005',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店2'
      }, {
        id: '0006',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票2'
      }, {
        id: '0007',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票2'
      }, {
        id: '0008',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假2度假2度假2'
      }, {
        id: '0009',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = [] // 因为数组的每一项都是8个图标构成的数组。
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    height 0
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content // img 是行内元素，转换为块级元素设置居中
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.44rem
      height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>