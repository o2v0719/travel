<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconarrow-left-bold header-back"></div>
    </router-link>

  </div>
</template>

<script>

export default {
  name: 'CityHeader',
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  overflow hidden
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-back
    position absolute
    top 0
    lef 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>