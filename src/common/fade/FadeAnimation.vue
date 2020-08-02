<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
//import x from ''
export default {
  name: 'FadeAnimation',
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
// 渐隐渐现效果
.v-enter, .v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity 0.5s
</style>