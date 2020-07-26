<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 1像素边框只需要class里面添加 border-bottom -->
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
        title: '大连圣亚海洋公园',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
        title: '大连圣亚海洋公园',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
        title: '大连圣亚海洋公园',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }

      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 32.96%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #bbb
    ellipsis()
</style>