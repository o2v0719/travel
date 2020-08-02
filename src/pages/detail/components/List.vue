<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class='item-title border-bottom'>
        <span class="iconfont iconpiaofang item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <!-- 递归组件：使用自身组件 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>

  </div>
</template>

<script>
//import x from ''
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0 0.2rem
  .item-title-icon
    display inline-block
    width 0.36rem
    height 0.36rem
.item-children
  padding 0 0.2rem
</style>