<template>
  <div class="cube-container">
    <div class="cube1"></div>
    <div class="cube2"></div>
    <div class="cube3"></div>
    <div class="cube4"></div>
    <div class="cube5"></div>
    <div class="cube6"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.cube-container {
  height: 100%;
  transform-style: preserve-3d;
  position: relative;
  animation: Rotate 10s infinite linear;
  > div {
    height: 100px;
    width: 100px;
    position: absolute;
    opacity: 0.7;
    transform-origin: 50% 50% -50px;
    background-size: cover;
  }
  .cube1 {
    background: url(~assets/img/1.jpg);
  }

  .cube2 {
    transform: rotateX(90deg);
    background: url(~assets/img/2.jpg);
  }
  .cube3 {
    transform: rotateX(180deg);
    background: url(~assets/img/3.png);
  }
  .cube4 {
    transform: rotateX(-90deg);
    background: url(~assets/img/4.jpg);
  }
  .cube5 {
    transform: rotateY(90deg);
    background: url(~assets/img/5.jpg);
  }
  .cube6 {
    transform: rotateY(-90deg);
    background: url(~assets/img/6.jpg);
  }
}
@keyframes Rotate {
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  75% {
    transform: rotateY(270deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>