<template>
  <div id="wrap">
    <!-- 主体 -->
      <el-container>
      <!-- 头部 -->
      <el-header v-show="activeRoute === '1' ? false : true">
        <el-row>
          <el-col :span="12" :offset="3" class="text">
            <!-- 头部菜单 -->
            <el-menu mode="horizontal" class="top-menu" :default-active="activeRoute">
              <el-menu-item index="1">
                <nuxt-link to="/">
                  <template>
                    <div class="home">
                      <i class="el-icon-guide"></i>
                      <span>首页</span>
                    </div>
                  </template>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="2">
                <nuxt-link to="/article_list">
                  <template>
                    <div class="article-list">
                      <i class="el-icon-notebook-2"></i>
                      <span>文章列表</span>
                    </div>
                  </template>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="3">
                <nuxt-link to="/demo">
                  <template>
                    <div class="demo">
                      <i class="el-icon-mobile"></i>
                      <span>demo</span>
                    </div>
                  </template>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="4">
                <nuxt-link to="/photo">
                  <template>
                    <div class="photo">
                      <i class="el-icon-picture"></i>
                      <span>相册</span>
                    </div>
                  </template>
                </nuxt-link>
              </el-menu-item>
            </el-menu>
          </el-col>
          <!-- 搜索栏 -->
          <el-col :span="4" :offset="1" class="top-search">
            <el-input
              placeholder="Search......"
              suffix-icon="el-icon-search"
              v-model="searchInfo"
              class="search-input"
            ></el-input>
          </el-col>
        </el-row>
      </el-header>
      <!-- 中间体 -->
      <el-main>
        <nuxt />
      </el-main>
      <!-- 尾部 -->
      <el-footer v-show="activeRoute === '1' ? false : true">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchInfo: '',
    }
  },
   computed: {
    ...mapState('topMenu', ['activeRoute']),
  },
}
</script>

<style lang="less">
#__nuxt,
#__layout,
#wrap {
  height: 100%;
}
.el-header {
  background-color: rgb(0, 0, 0);
  > .el-row,
  .el-col {
    height: 100%;
  }
  .top-menu {
    display: flex;
    background-color: rgb(0, 0, 0);
    justify-content: space-between;
    .home,
    .article-list,
    .demo,
    .photo {
      height: 100%;
      width: 100%;
    }
  }
  .top-search {
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    .search-input .el-input__inner {
      background-color: rgba(0, 0, 0, 0.8);
      border: 0;
    }
  }
}

.el-footer {
  background-color: rgb(0, 0, 0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
