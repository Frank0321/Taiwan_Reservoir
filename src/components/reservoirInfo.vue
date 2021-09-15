<template>
  <div>
    一個水庫的資訊
    <div class="flex justify-center">
      <div class="flex-initial xl:mr-10 lg:mr-5 md:mr-12 mr-5">
        <!-- water percentage chart -->
        <drop class="drop" :percentage="50" />
      </div>
      <div
          class="
          flex-initial
          divide-y-2 divide-brown divide-dotted divide-opacity-50
        "
      >
        <div class="mb-3">
          <div class="text-brown text-2xl font-bold mb-3">

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

          </span>
          <p class="mt-5 text-brown">
            有效蓄水量：萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日進水量：萬立方公尺
          </p>
          <p class="mt-2 text-brown">
            今日出水量：萬立方公尺
          </p>
        </div>
        <div>
          <p class="mt-2 text-brown">更新時間：</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Drop from "../components/drop";
export default {
  name: "reservoirInfo.vue",
  components: {Drop}
}
</script>

<style scoped>

</style>