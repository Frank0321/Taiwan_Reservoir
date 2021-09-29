<template>
  <div class="home">
    <h2>
      <button class="btn" v-for="area in optionListArea" :key="area.index" @click="chooseArea(area.value)"> {{area.item}}</button>
    </h2>
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
    <div class="list" v-for="item in searchData" :key="item.id">
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
      searchData:[],
      dbjsonArr:[],
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
        console.log("rowData", Array.from(self.rowData));
        console.log("rowData is Array", Array.isArray(Array.from(self.rowData)));
      });
       await this.loadingLocalData();
      self.rowData = await this.joinData(self.dbjsonArr, self.rowData);
      self.searchData = self.rowData;
    },

    loadingLocalData(){
      var res = require("../static/reservoirArea.json").areaData;
      this.dbjsonArr = res;
      console.log('dbjson',this.dbjsonArr);
      console.log("dbjson is Array", Array.isArray(this.dbjsonArr));
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
        // dbjsonArr[i] = {...dbjsonArr[i], ...rowData[dbjsonArr[i]["name"]]};
        // dbjsonArr[i]["ratio"] = rowData[dbjsonArr[i]["name"]]["daliyNetflow"] / rowData[dbjsonArr[i]["name"]]["baseAvailable"] * 100
        rowData[dbjsonArr[i]["name"]] = {...dbjsonArr[i], ...rowData[dbjsonArr[i]["name"]]};
        rowData[dbjsonArr[i]["name"]]["ratio"] = rowData[dbjsonArr[i]["name"]]["daliyNetflow"] / rowData[dbjsonArr[i]["name"]]["baseAvailable"] * 100
      }
      return rowData;
    },
    chooseArea(area){
      console.log("area", area);
      switch (area){
        case "northern":
          this.search("northern");
          break;
        case "central":
          this.search("central");
          break;
        case "southern":
          this.search("southern");
          break;
        default:
          this.searchData = this.rowData;
          break;
      }
    },
    search(area){
      console.log(area);
      this.searchData = [];
      for (var item in this.rowData){
        if (this.rowData[item]["mainArea"] == area){
          this.searchData.push(this.rowData[item]);
        }
      }
      console.log("searchData", this.searchData);
    }
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
.btn {
  font-size: 20px;
  margin-right: 2em;
  width: 90px;
  color: black;
  background-color: #ffa214;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.btn:active {
  color: #fff;
  background-color: #ff7106;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

@media screen and (max-width: 600px) {
  .btn {
    margin-right: 4.5em;
    margin-top: 1em;
  }
  .list{
    width: 450px;
    height: 250px;
    border: 2px solid #3b7bdb;
    box-shadow: 0 0 10px #cfcfcf;
  }
}

</style>