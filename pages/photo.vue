<template>
  <div>
    我是相册
  </div>
</template>

<script>
export default {
  layout:'blog',
   created() {
    this.getActiveRoute()
  },
  methods:{
     getActiveRoute() {
      console.log(this.$nuxt.$route.path)
      console.log('运行到这里了')
    },
  },

}
</script>

<style>

</style>