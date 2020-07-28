<template>
  <ul class="list">
    <li class="item" v-for="item in letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart"
      @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 当向alphabet组件传入的数据发生变化的时候，alphabet组件就会重新渲染，重新渲染后就会执行updated这个生命周期函数
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      // 兄弟组件之间传值：先由子组件传给父组件，再由父组件传递给另一个子组件
      // 子传父：使用$emit 自定义一个事件，同时携带参数信息，传值给父组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流: 在time存在值的以后 又又触发了事件，则清除该事件。直到16.67ms周期以后
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16.67)
        // console.log(startY) // A元素顶部到绿色底部距离
        // console.log(touchY) // 触摸到的元素到绿色底部的距离
        // console.log(index)  // 触摸到的元素到A元素的距离除以每个元素的高度并向下取整，得到触摸到的元素的序号
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>