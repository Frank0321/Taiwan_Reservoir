<template>
  <div>
    <div class="flex justify-center">
      <div class="flex-initial xl:mr-10 lg:mr-5 md:mr-12 sm:mr-5">
        <!-- water percentage chart -->
<!--        TODO : 將 v-mode 的值帶到 percentage 中-->
        <drop class="drop" :percentage="105" />
      </div>
      <div
        class="
          flex-initial
          divide-y-2 divide-brown divide-dotted divide-opacity-50
        "
      >
        <div class="mb-3">
          <div class="text-brown title">我是水庫</div>
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
            台灣省
          </span>
          <p class="mt-5 text-brown">
            有效蓄水量：{{ isMoney(12345678) }} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">今日進水量：{{asMonetaryFormat(456456.00)}} 萬立方公尺</p>
          <p class="mt-2 text-brown">今日出水量：789 萬立方公尺</p>
          <div>
            <p class="mt-2 text-brown">==========================</p>
            <p class="mt-2 text-brown">更新時間：2021-09-20(22時)</p>
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
  components: { Drop },
  methods: {
    isMoney(val) {
      if (typeof val === "number") {
        return val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    //參考 reinsurance-ui 的寫法
    //TODO : 將他拉出來到 utils 的檔案夾中，當作共用的方法
    asMonetaryFormat(value) {
      if (typeof value == "number") {
        let result = new Intl.NumberFormat("zh-TW").format(value);
        return result;
      }
      return value;
    },
  },
};
</script>

<style scoped>
.drop {
  float: left;
  width: 150px;
  margin-left: 20px;
  margin-top: 10px;
}
.text-brown {
  font-size: 20px;
}
.title {
  font-size: 30px;
  color: darkred;
  font-weight: bolder;
}
@media screen and (max-width: 1200px){
  .lg:mr-5 {
    width: 150px;
  }
}

@media screen and (max-width: 700px){
  .md:mr-12 {
    width: 100px;
  }
}

@media screen and (max-width: 500px){
  .sm:mr-5 {
    width: 70px;
  }
}
</style>
