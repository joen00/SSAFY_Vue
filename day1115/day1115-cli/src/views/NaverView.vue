<template>
  <div>
    <h2>여기는 네이버 확인</h2>
    <select v-model="selected">
      <option value="naverBlog">블로그 검색</option>
      <option value="naverNews">뉴스 검색</option>
      <option value="naverShop">뉴스 검색</option>
    </select>
    <router-link :to="{ name: selected }"
      >선택한거 : {{ selected }}</router-link
    >
    | <router-link :to="{ name: 'naverBlog' }">블로그</router-link> |
    <router-link :to="{ name: 'naverNews' }">뉴스</router-link> |
    <router-link :to="{ name: 'naverShop' }">쇼핑</router-link>
    <div>
      여기는 NaverView: 여기 아래는 router에 붙어있는 children이 나올 것이다.
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style>
</style>