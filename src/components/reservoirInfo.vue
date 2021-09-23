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
          <div class="text-brown title">
            {{ childRowData.name }}
          </div>
          <span
              class="
              bg-grass
              text-white text-md
              rounded-md
              mr-2
              py-1
              px-2
              align-middle
            "
          >
<!--              供水區域 :-->
          </span>
          <p class="mt-5 text-brown">
            有效蓄水量： {{asMonetaryFormat(childRowData.baseAvailable)}} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日進水量：{{ asMonetaryFormat(childRowData.daliyInflow) }} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日出水量：{{ asMonetaryFormat(childRowData.daliyOverflow) }} 萬立方公尺
          </p>
          <div>
            <p class="mt-2 text-brown">==========================</p>
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
  methods:{
    asMonetaryFormat(value) {
      value = parseFloat(value);
      if (typeof value == "number") {
        let result = new Intl.NumberFormat("zh-TW").format(value);
        return result;
      }
      return value;
    },
  }
}
</script>

<style scoped>
.drop{
  float: left;
  width: 150px;
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

/*TODO : 每次需要撰寫的 class 太多，是否可以簡化*/
@media screen and (max-width: 1355px){
  .drop{
    float: left;
    width: 100px;
    margin-left: 17px;
    margin-top: 17px;
  }
  .value-text .value {
    font-size: 30px;
  }
  .value-text .percentage {
    font-size: 30px;
  }
  .text-brown {
    font-size: 17px;
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