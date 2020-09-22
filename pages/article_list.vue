<template>
  <el-row>
    <el-col :span="12" :offset="3" class="text">我是文章展示</el-col>
    <!-- 侧边栏 -->
    <el-col :span="4" :offset="1" class="selection">
      <!-- 分类标签 -->
      <el-row class="catalog-tag">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>分类标签</span>
            <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
          </div>
        </el-card>
      </el-row>
      <!-- 最近文章 -->
      <el-row class="recent-artical">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>最近文章</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
        </el-card>
      </el-row>
      <!-- 个人联系方式 -->
      <el-row class="contact-way">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>个人联系方式</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  layout:'blog',
  
}
</script>

<style lang="less" scoped>
.el-row,
.el-col {
  height: 100%;
}
.text {
  background-color: pink;
}
.selection {
  margin-left: 20px;
  .catalog-tag,
  .recent-artical,
  .contact-way {
    height: 30%;
    margin-bottom: 15px;
  }
}
</style>