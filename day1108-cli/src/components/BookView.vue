<template>
  <div class="regist">
    <h1 class="underline">SSAFY 도서 정보</h1>
    <div class="regist_form" v-if="book">
      <label for="isbn">도서번호</label>
      <div class="view">{{ book.isbn }}</div>
      <label for="title">도서명</label>
      <div class="view">{{ book.title }}</div>
      <label for="author">저자</label>
      <div class="view">{{ book.author }}</div>
      <label for="price">가격</label>
      <div class="view">{{ book.price }}원</div>
      <label for="content">설명</label>
      <div class="view" v-html="book.content"></div>
      <div style="padding-top: 15px">
        <a :href="'./modify.html?isbn=' + book.isbn" class="btn">수정</a>
        <a :href="'./delete.html?isbn=' + book.isbn" class="btn">삭제</a>
        <a href="./list.html" class="btn">목록</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {},
    };
  },
  props: ["cup"],
  created() {
    this.cup.$on("hey", this.yes);
  },
  methods: {
    yes(receive) {
      const booklist = JSON.parse(localStorage.getItem("booklist"));
      for (let obj of booklist.books) {
        if (receive == obj.isbn) {
          this.book = obj;
          break;
        }
      }
    },
  },
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  enterToBr(str) {
    // 문자열에 enter값을 <br />로 변경.(html상에서 줄바꿈 처리)
    return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
  },
};
</script>

<style></style>
