<template>
  <div>
    <h3>가격 저렴 top 3</h3>
    <table>
      <tr>
        <th>상품</th>
        <th>가격</th>
        <th>쇼핑몰</th>
        <th>이미지</th>
      </tr>
      <tr v-for="(item, index) in top3Items" :key="index">
        <td v-html="item.title"></td>
        <td>{{ item.lprice }}</td>
        <td>{{ item.mallName }}</td>
        <td><img :src="item.image" alt="" style="width: 100px" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // step1 여러개일경우
    ...mapGetters(["top3Items"]),

    // step1 한개만 사용할때
    // top3items() {
    //   return this.$store.getters.top3Items;
    // },
  },
};
</script>

<style>
</style>