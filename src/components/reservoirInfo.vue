<template>
  <div>
    <div class="flex justify-center">
      <div class="flex-initial xl:mr-10 lg:mr-5 md:mr-12 mr-5">
        <!-- water percentage chart -->
        <drop class="drop" :percentage= childRowData.percentage />
      </div>
      <div
          class="
          flex-initial
          divide-y-2 divide-brown divide-dotted divide-opacity-50
        "
      >
        <div class="mb-3">
          <p></p>
          <div class="text-brown title">
            {{ childRowData.name }}
          </div>
          <p></p>
          <span
              class="
              bg-grass
              text-brown
            "
              v-for="area in childRowData.area"
              :key="area"
          >
<!--            地區的資料 是一個 array，所以用 v-for 將資料讀出來-->
              {{ area }}
          </span>
          <p class="mt-5 text-brown">
            有效蓄水量： {{asMonetaryFormat(childRowData.baseAvailable)}} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日水量變化：{{ showRatio(childRowData.ratio) }}
<!--            今日水量變化：{{ childRowData.ratio }}-->
          </p>
          <div>
            <span class="mt-2 text-brown">==========================</span>
            <p class="mt-2 text-brown">更新時間：{{ childRowData.updateAt }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Drop from "../components/drop";
export default {
  name: "reservoirInfo.vue",
  components: {Drop},
  props: {
    childRowData:{}
  },
  methods: {
    asMonetaryFormat(value) {
      value = parseFloat(value);
      if (typeof value == "number") {
        let result = new Intl.NumberFormat("zh-TW").format(value);
        return result;
      }
      return value;
    },
    showRatio(value){
      var val = Number(value).toFixed(2);
      if (val > 0){
        val = "上升了 " + val + "%"
      }else if (val < 0){
        val = "下降了 " + val * (-1) + "%"
      }else {
        val = "放心，沒有變化喔 !"
      }

      return val;
    }
  }
}
</script>

<style scoped>
.drop{
  float: left;
  width: 120px;
  margin-left: 17px;
  margin-top: 17px;
}
.text-brown {
  font-size: 17px;
}
.title {
  font-size: 30px;
  color: darkred;
  font-weight: bolder;
}
.bg-grass {
  border-width: 3px;
  height: 30px;
  padding: 5px;
  text-align: center;
  background-color: rgb(41, 105, 176, 0.7);
  border-radius: 4px;
  color: white;
  margin-left: 10px;

}

/*TODO : 每次需要撰寫的 class 太多，是否可以簡化*/
/*TODO : 將需要相同設計的樣式，使用類似的 class 命名，一個標籤可以有多個 class，用空白隔開*/
@media screen and (max-width: 600px){
  .drop{
    float: left;
    width: 90px;
    margin-left: 17px;
    margin-top: 17px;
  }
  .value-text .value {
    font-size: 15px;
  }
  .value-text .percentage {
    font-size: 10px;
  }
  .text-brown {
    font-size: 16px;
  }
  .title {
    font-size: 25px;
    color: darkred;
    font-weight: bolder;
  }
}


@media screen and (max-width: 700px){

}
</style>