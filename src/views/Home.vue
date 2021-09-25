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

      var dbjson = require("../static/reservoirArea.json");
      console.log("dbjson", dbjson.areaData);

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
  width: 600px;
  margin-right: 2em;
  border: 1px solid #b4ffe1;
  box-shadow: 0 0 10px #cfcfcf;
  margin-bottom: 2em;
  border-radius: 15px;
  display : inline-block;
}


</style>