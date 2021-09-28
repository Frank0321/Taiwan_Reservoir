<template>
  <div class="home">
    <div class="list" v-for="item in rowData" :key="item.id">
      <ReservoirInfo :child-row-data="item" />
    </div>
<!--    TODO : 製作 footer 的樣式，並拉出去做成一個 component-->
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
      rowData:[],
      dbjsonArr:[],
    }
  },
  mounted() {
    this.fetchData();
  },

  methods:{
    async fetchData(){
      let self = this;
       await axios.get(`https://www.taiwanstat.com/waters/latest`)
      .then(function (response) {
        console.log("success");
        self.rowData = response.data[0];
        console.log("self", self.rowData);
      });
       await this.loadingLocalData();

      self.rowData = await this.joinData(self.dbjsonArr, self.rowData);
    },

    loadingLocalData(){
      this.dbjsonArr = require("../static/reservoirArea.json").areaData;
      console.log('dbjoin',this.dbjsonArr);
    },
    merge(a, b, prop){
      let reduced = a.filter(aitem => !b.find(bitem => aitem[prop] === bitem[prop]))
      return reduced.concat(b);
    },
    joinData(dbjsonArr, rowData){
      // dbjsonArr 的資料，用 dbjsonArr[0] 可以讀出
      // aArray 的資料要用 水庫名字去讀 aArray["仁義潭水庫"]
      for (let i = 0; i < Object.keys(rowData).length; i++) {
        //將兩個 object 組合再一起
        rowData[dbjsonArr[i]["name"]] = {...dbjsonArr[i], ...rowData[dbjsonArr[i]["name"]]};
      }
      return rowData;
    }
  }
}
</script>

<style scoped>
.list{
  background-color: transparent;
  width: 600px;
  margin-right: 2em;
  border: 1px solid #b4ffe1;
  box-shadow: 0 0 10px #cfcfcf;
  margin-bottom: 2em;
  border-radius: 15px;
  display : inline-block;
}


</style>