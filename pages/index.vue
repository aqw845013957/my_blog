<template>
  <div id="index-container">
    <div class="enter-blog">
      <div class="cube-rotate-tag">
        <cube-rotate></cube-rotate>
      </div>
       <video src="~assets/video/bg.mp4" autoplay loop muted></video>
      <nuxt-link to="/article_list"><span class="enter-blog-text el-icon-star-on" >进入我的博客</span></nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import cubeRotate from '../components/cube_rotate'

export default {
  layout: 'blog',
  components: {
    cubeRotate,
  },
  data() {
    return {
      show: true,
    }
  },
  created() {
    // 改变当前激活路由
    this.changeActiveRoute(this.$nuxt.$route.path)
  },
  computed: {
    ...mapState('topMenu', ['activeRoute']),
  },
  methods: {
    // 监听当前激活路由
    ...mapMutations('topMenu', ['changeActiveRoute']),
  },
}
</script>

<style lang="less" scoped>
#index-container {
  // 文字居中
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .enter-blog {
    font: bold 20px '微软雅黑';
    color: rgb(63, 68, 141);
    position: relative;
    .enter-blog-text:hover{
      transition: color .5s;
      color: rgb(50, 187, 241);
    }
    video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -9999;
    }
  }
  .cube-rotate-tag{
    position: absolute;
    left: 50%;
    top: -120px;
  }
}
</style>
