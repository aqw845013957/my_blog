<template>
  <div>我是demo</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'blog',
  created() {
    // 改变当前激活路由
    this.changeActiveRoute(this.$nuxt.$route.path)
  },
  methods: {
    // 监听当前激活路由
    ...mapMutations('topMenu', ['changeActiveRoute']),
  },
}
</script>

<style>
</style>