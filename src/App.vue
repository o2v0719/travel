<template>
  <div id="app">
    <!-- 页面缓存机制 exclude 除了Detail页面其他的都会被缓存-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
