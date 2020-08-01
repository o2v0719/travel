<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconarrow-left-bold"></span>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}<span class="iconfont iconjiantou"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    // 将全局的数据映射为当前组件的计算属性
    ...mapState(['city'])
  }
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
  line-height $headerHeight
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
    // width 1.8rem
    padding 0 0.2rem
    // css3 实现宽度自适应文字
    // width fit-content
    min-width 1.04rem
    float right
    text-align center
    color #fff
    .iconjiantou
      font-size 0.2rem
</style>
