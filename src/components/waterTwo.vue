<template>
  <div class="container">
    <div class="wave"></div>
    <div class="wave-mask"></div>
  </div>
</template>

<script>
export default {
  name: "waterTwo"
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #e787e7;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;

  overflow: hidden;
}
.wave {
  position: relative;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(-180deg, #3b7bdb 13%, #4d6fdf 91%);
  border-radius: 50%;
}
.wave-mask {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 50%;
  border-radius: 40%;
  background-color: rgba(212, 24, 24, 0.9);
  transform: translate(-50%, -70%) rotate(0);
  animation: toRotate 10s linear -5s infinite;
  z-index: 20;

  background-color: rgba(255, 255, 255, 0.9);
}
@keyframes toRotate {
  50% {
    transform: translate(-50%, -70%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
</style>