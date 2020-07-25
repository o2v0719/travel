<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconarrow-left-bold"></span>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市/游玩/主题
    </div>
    <div class="header-right">
      城市<span class="iconfont iconjiantou"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
// 1rem = html font-size = 50px
// 在手机端2倍图。代码像素为真实像素的一半。
// vscode中使用cssrem插件自动转换rem，要先设置cssrem的fontsize，保存后重启vscode生效

// @import '../../../assets/styles/varibles.styl'
// 此处修改后重启项目生效
@import '~styles/varibles.styl'
.header
  display flex
  line-height 0.86rem
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .iconarrow-left-bold
      margin-left 0.2rem
      font-size 0.3rem
  .header-input
    flex 1 // 弹性增长因子1，宽度自然撑开
    height 0.64rem
    line-height 0.64rem
    margin-top 0.11rem
    margin-left 0.2rem
    background #ffffff
    padding-left 0.2rem
    border-radius 0.1rem
    color #cccccc
  .header-right
    width 1.24rem
    float right
    text-align center
    .iconjiantou
      font-size 0.2rem
</style>
