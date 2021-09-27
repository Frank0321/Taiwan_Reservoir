<template>
  <div class="boll">
    <div class="test">
      <p class="num">87%</p>
    </div>
    <div class="water w1"></div>
    <div class="water w2"></div>
    <div class="water w3"></div>
  </div>
</template>

<!--ref : https://blog.csdn.net/sheng_li/article/details/84347987-->
<script>
export default {
  name: "waterThree"
}
</script>

<style scoped>
@-webkit-keyframes move_wave {
  0% { background-position: 0 0}
  to { background-position: 532px 0}
}
@keyframes move_wave {
  0% { background-position: 0 0}
  to { background-position: 532px 0}
}

.boll{
  height: 174px;
  width: 174px;
  border-radius: 50%;
  border: 2px solid #fe810c;
  float: left;
  position: relative;
  font-size: 14px;
  overflow: hidden;
}
.test{
  text-align: center;
  margin-top: 80%;  /*從這邊改*/
  color:#fe810c;
}
.water {
  height: 100%;
  background: url("../assets/image/waves.png") repeat-x;
  position: absolute;
  width: 100%;
  -webkit-animation: move_wave 4s linear infinite;
  animation: move_wave 4s linear infinite;

}
.w1 {
  opacity: .5;
  background-position: 120px 0;
  -webkit-animation: move_wave 10s linear infinite;
  animation: move_wave 10s linear infinite;
}
.w2 {
  opacity: .3;
  background-position: 60px 0;
  -webkit-animation: move_wave 8s linear infinite;
  animation: move_wave 8s linear infinite;
}


</style>