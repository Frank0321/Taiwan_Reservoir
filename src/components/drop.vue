<template>
  <div id="drop">
    <!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 97.1 139.4"
        style="enable-background: new 0 0 97.1 139.4"
        xml:space="preserve"
        :class="rate < 25 ? 'danger' : rate < 50 ? 'warning' : 'default'"
    >
      <path
          class="bg"
          d="M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4
	C64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4
	c-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"
      />
      <g>
        <defs>
          <path
              id="clip-path-use"
              d="M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4
			C64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4
			c-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"
          />
        </defs>
        <clipPath id="clip-path">
          <use xlink:href="#clip-path-use" style="overflow: visible" />
        </clipPath>
        <g>
          <rect
              y="0"
              ref="waterRect"
              class="water"
              width="97.1"
              :height="waterValue"
          >
            <!-- 0~137 -->

          </rect>
        </g>
      </g>
    </svg>
    <p class="value-text">
      <span class="value">{{rate}}</span>
      <span class="percentage">%</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "drop.vue",
  //傳入的參數
  props:{
    percentage: {
      type: Number,
      default: 0
    }
  },
  computed:{
    //顯示比例
    rate(){
      let val = this.percentage.toFixed(1);
      return val;
    },
    //顯示圖形的百分比
    waterValue(){
      let waterValue = 137 - (this.rate * 137) /100;
      if (waterValue < 0){
        waterValue = 0;
      }
      console.log(waterValue);
      return waterValue;
    }
  }
}
</script>

<style scoped>

.default .bg {
  fill: #42b983;
}
.default .water{
  clip-path: url(#clip-path);
  fill: #b4ffe1;
}
/*------------*/
.warning .bg{
  fill: coral;
}
.warning .water{
  clip-path: url(#clip-path);
  fill: #ffe1a8;
}
/*------------*/
.danger .bg{
  fill: red;
}
.danger .water{
  clip-path: url(#clip-path);
  fill: #ff97a9;
}
/*------------*/
.value-text {
  /*設定圖片的位置*/
  /*position: absolute;*/
  top: 10%;
  left: 50%;
  transform: translateX(-10%);
  transform: translateY(-50%);
  align-self:center;
}
.value-text .value{
  font-size: 55px;
}
.value-text .percentage{
  font-size: 55px;
}


</style>