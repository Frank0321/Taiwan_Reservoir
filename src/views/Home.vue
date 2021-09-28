<template>
  <div class="home">
<!--    <h2>篩選條件 :-->
<!--      <select class="choose condition">-->
<!--        <option v-for="condition in chooseCondition" :key="condition.index">-->
<!--          {{condition.item}}-->
<!--        </option>-->

<!--      </select>-->
<!--      <select class="choose item">-->
<!--        <option v-for="it in optionListArea" :key="it.index">-->
<!--          {{it.item}}-->
<!--        </option>-->
<!--      </select>-->
<!--    </h2>-->
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
      searchData: [],
      chooseCondition: [
        {
          item: "地區"
        },
        {
          item: "縣市"
        }
    ],
      optionList: [],
      optionListArea: [
        {
          item: "全部",
          value: "total"
        },
        {
          item: "北",
          value: "northern"
        },
        {
          item: "中",
          value: "central"
        },
        {
          item: "南",
          value: "southern"
        }
      ]
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
      // console.log("optionListArea", this.optionListArea);
    },

    loadingLocalData(){
      var res = require("../static/reservoirArea.json").areaData;
      this.dbjsonArr = res;
      console.log('dbjoin',this.dbjsonArr);
    },
    merge(a, b, prop){
      var reduced = a.filter(aitem => !b.find(bitem => aitem[prop] === bitem[prop]))
      return reduced.concat(b);
    },
    joinData(dbjsonArr, rowData){
      // dbjsonArr 的資料，用 dbjsonArr[0] 可以讀出
      // aArray 的資料要用 水庫名字去讀 aArray["仁義潭水庫"]
      for (let i = 0; i < Object.keys(rowData).length; i++) {
        //將兩個 object 組合再一起
        rowData[dbjsonArr[i]["name"]] = {...dbjsonArr[i], ...rowData[dbjsonArr[i]["name"]]};
        rowData[dbjsonArr[i]["name"]]["ratio"] = rowData[dbjsonArr[i]["name"]]["daliyNetflow"] / rowData[dbjsonArr[i]["name"]]["baseAvailable"] * 100
      }
      return rowData;
    },

  }
}
</script>

<style scoped>
.list{
  background-color: transparent;
  width: 600px;
  height: 280px;
  margin-right: 2em;
  border: 1px solid #b4ffe1;
  box-shadow: 0 0 10px #cfcfcf;
  margin-bottom: 2em;
  border-radius: 15px;
  display : inline-block;
}
.choose {
  font-size: 20px;
  margin-right: 2em;
}

</style>