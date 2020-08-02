<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_600x330_2285872d.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAAA景区）</div>
        <div class="banner-number">
          <span class="iconfont icontupian1 banner-icon"></span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose">
    </common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: ["https://imgs.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_r_800x800_51ae7c16.jpg", "https://imgs.qunarzz.com/sight/p0/201405/27/de4b29c8f5f8f111877074062064862b.jpg_r_800x800_242458ec.jpg"]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    // 背景线性渐变
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      line-height 0.32rem
      height 0.32rem
      padding 0 0.4rem
      margin-top 0.14rem
      border-radius 0.2rem
      font-size 0.24rem
      background rgba(0, 0, 0, 0.8)
      .banner-icon
        font-size 0.24rem
</style>