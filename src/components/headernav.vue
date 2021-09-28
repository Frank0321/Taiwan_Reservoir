<template>
  <div>
    <h1>
      <img class="water-icon" src="../assets/image/water_icon.png" />
      <div class="title">台灣水庫即時水情狀況</div>
    </h1>
    <h3>有水當思無水之苦，珍惜水資源，請大家一起共同節約用水。</h3>
    <h2>
      篩選功能
      <select class="choose-item">
        <option v-for="it in list" :key="it.index">
          {{it.item}}
        </option>
      </select>
    </h2>
    <h2>
      <v-row justify="center" class="test">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header>篩選</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </h2>
  </div>
</template>

<script>
export default {
  name: "headernav",
  data(){
    return{
      list: [
        {
          item: "北",
          value: "NORTHERN"
        },
        {
          item: "中",
          value: "CENTRAL"
        },
        {
          item: "南",
          value: "SOUTHERN"
        },
        {
          item: "全部",
          value: "total"
        }

      ]
    }
  }
}
</script>

<style scoped>
.water-icon {
  width: 7%;
}
.choose-item {
  font-size: 20px;
  margin-right: 2em;
}


</style>