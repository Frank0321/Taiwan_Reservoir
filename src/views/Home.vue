<template>
  <div class="home">
    <h1> 台灣水庫即時水情狀況 </h1>
<!--    <td width="600" height="400">-->
<!--      <reservoir-info />-->
<!--    </td>-->
<!--    <div v-for="item in rowData" :key="item">-->
<!--      <p>水庫名稱 : {{item.name}} </p>-->
<!--      <p>有效蓄水量 : {{item.baseAvailable}}</p>-->
<!--      <p>今日進水量 : {{item.daliyInflow}}</p>-->
<!--      <p>今日出水量 : {{item.daliyOverflow}}</p>-->
<!--      <p>更新時間 : {{item.updateAt}} </p>-->
<!--    </div>-->
    <div class="list" v-for="item in rowData" :key="item">
      <ReservoirInfo :child-row-data="item" />
    </div>
  </div>
</template>

<script>

import axios from "axios"
import ReservoirInfo from "../components/reservoirInfo";

export default {
  name: 'Home',
  components: {
    ReservoirInfo

  },
  data(){
    return{
      rowData:[]
    }
  },
  mounted() {
    this.fetchData();
  },

  methods:{
    fetchData(){
      // fetch(`https://www.taiwanstat.com/waters/latest`)
      // .then(function (response) {
      //   console.log("success");
      //   console.log("response.json", response.json());
      //   //有讀出數據了
      //   console.log(response.data[0]);
      // })
      let self = this;
      axios.get(`https://www.taiwanstat.com/waters/latest`)
      .then(function (response) {
        console.log("success");
        self.rowData = response.data[0];
        console.log("self", self.rowData);
      });
    }
  }
}
</script>

<style scoped>
.list{
  background-color: transparent;
  width: calc(70% / 2 - 20px);
  margin-right: 10px;
  border: 1px solid #b4ffe1;
  box-shadow: 0 0 5px #cfcfcf;
  margin-bottom: 0.6em;
  border-radius: 15px;
  display : inline-block;
}


</style>