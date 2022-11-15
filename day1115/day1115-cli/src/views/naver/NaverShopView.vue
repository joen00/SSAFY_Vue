<template>
  <div>
    <h3>네이버 쇼핑 검색 화면</h3>
    <input type="text" v-model="keyword" @keyup.enter="search" />
    <button @click="search">SEARCH</button>
    <table>
      <tr>
        <th>상품</th>
        <th>가격</th>
        <th>쇼핑몰</th>
        <th>이미지</th>
      </tr>
      <tr v-for="(item, index) in shopList" :key="index">
        <td v-html="item.title"></td>
        <td>{{ item.lprice }}</td>
        <td>{{ item.mallName }}</td>
        <td><img :src="item.image" alt="" style="width: 100px" /></td>
      </tr>
    </table>

    <naver-top-3></naver-top-3>
  </div>
</template>

<script>
import NaverTop3 from "@/components/NaverTop3.vue";
import { mapActions, mapState } from "vuex"; // 아예 vuex에 있는 모든 actions을 다 가져오자 (가져올게 많을 때) mapActions
// mapState state에 있는거 꺼낼때

export default {
  components: { NaverTop3 },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    // vuex에서 꺼내는 것
    // step 1
    // 이렇게 하나만 뺄때는 함수로
    // shopList() {
    //   return this.$store.state.shopList;
    // },

    // step2
    // 꺼내고 싶은게 많으면 mapState를 사용한다.
    ...mapState(["newsList", "shopList"]),
  },
  methods: {
    search() {
      // step 1
      // dispatch('액션이름',검색어 같이 보내기)
      // vuex한테 action! 시킬일이 적을땐 이렇게 하면 되는데
      // this.$store.dispatch("searchNavershop", this.keyword);

      // step 2
      // action으로 일 시킬게 많은 경우에는 mapActions을 아예 import한 다음에
      this.searchNavershop(this.keyword); // 아래에 mapActions에 있는 method호출하는 방법이 있다.
    },
    ...mapActions(["searchNavershop"]),
  },
};
</script>

<style>
</style>