<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="showFlag">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      showFlag: false
    }
  },
  watch: {
    keyword () {
      // 为了保证性能，引入节流函数
      if (this.timer) {
        clearTimeout(this.timer)
        this.showFlag = false
      }
      // 先输入后删除的时候要清除屏幕上的内容
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            //由于搜索的时候，可能用的是拼音也可能是汉字
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        if (!this.list.length) {
          this.showFlag = true
        }
      }, 1000)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)

      this.changeCity(city)
      this.$router.push('/') // 编程式导航实现页面跳转
    },
    // 引入全局store中定义的函数
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  // 注意要配合better-scroll 插件
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #eeeeee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background-color #fff
    color #666666
</style>