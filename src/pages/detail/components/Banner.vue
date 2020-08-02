<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icontupian1 banner-icon"></span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- co-ga 作为插槽插入fa-an 组件中 -->
      <common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClose">
      </common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false
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