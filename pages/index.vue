<template>
  <div id="index-container">
    <div class="enter-blog">
      <nuxt-link to="/article_list">进入我的博客</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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

<style lang="less" scoped>
#index-container {
  background: url('~assets/img/03.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
