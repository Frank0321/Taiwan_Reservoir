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
              台灣省
          </span>
          <p class="mt-5 text-brown">
            有效蓄水量：{{ childRowData.baseAvailable }} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日進水量：{{ childRowData.daliyInflow }} 萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日出水量：{{ childRowData.daliyOverflow }} 萬立方公尺
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
  }
}
</script>

<style scoped>
.drop{
  float: left;
  width: 150px;
  margin-left: 20px;
  margin-top: 20px;
}
.text-brown {
  font-size: 17px;
}
.title {
  font-size: 30px;
  color: darkred;
  font-weight: bolder;
}
</style>