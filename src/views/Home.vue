<template>
  <div class="home">
    <h1> 台灣水庫即時水情狀況 </h1>
    <td width="600" height="400">
      <reservoir-info />
    </td>
    <td width="600" height="400">
      <reservoir-info />
    </td>
    <td width="600" height="400">
      <reservoir-info />
    </td>
    <td width="600" height="400">
      <reservoir-info />
    </td>
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
