<template>
  <div>
    <h2>아파트 목록</h2>
    <input type="text" v-model="lawdCd" />
    <input type="text" v-model="dealYmd" />
    <button @click="getAptList">아파트 목록얻기</button>
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
        <col style="width: 30%" />
      </colgroup>
      <tr>
        <td>일련번호</td>
        <td>아파트명</td>
        <td>법정동</td>
        <td>층</td>
        <td>매매가격</td>
      </tr>
      <tbody>
        <apt-list-item
          v-for="(apt, index) in apts"
          :key="index"
          :apt="apt"
        ></apt-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AptListItem from "@/components/AptListItem.vue";
export default {
  name: "AptList", // 이 이름으로 다른곳에서 쓰임
  components: {
    AptListItem,
  },
  data() {
    return {
      lawdCd: "11110",
      dealYmd: "202202",
      apts: [],
    };
  },

  methods: {
    // 들어오자마자 바로 데이터 얻어와라 -> created
    getAptList() {
      //   const serviceKey =
      //     "TQLSJO9Hi0RTKDv2c5dKxH5QA6sEwjWsvFvbJg6bie%2FgNzw62le7UoqUWqx%2BzQdyShlTr5fgb9v9enfb6Uo%2B%2BQ%3D%3D";
      //   const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;

      const url = `http://localhost:9999/vue/map/aptlist/${this.lawdCd}/${this.dealYmd}`;
      axios.get(url).then((response) => {
        //console.log(response);
        this.apts = response.data.response.body.items.item;
        //console.log(this.apts);
      });
    },
  },
};
</script>

<style>
td {
  border-bottom: 1px solid black;
}
</style>