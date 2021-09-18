<template>
  <div class="home">
    <h1> 台灣水庫即時水情狀況 </h1>
  </div>
</template>

<script>

import axios from "axios"
// import axios from "../plugins/axios";
export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      rowData:[],
      roeDstsOne:""
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
        console.log("response", response.data[0]);
        self.rowData = response.data[0];
        console.log("self", self.rowData);
      });
    }
  }
}
</script>
