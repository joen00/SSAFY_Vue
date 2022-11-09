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
        <!-- <a href="/" class="btn">목록</a> -->
        <router-link to="/">목록</router-link>
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
  props: [
    // "cup"
  ],
  created() {
    // 예전에 BookList 컴포넌트랑 한화면에 같이 있을때는 걔가 나를 hey하고 불렀었음.
    // this.cup.$on("hey", this.yes);

    // 이제는 라우터가 나를 관리하고 화면에 나타나게 해줌
    // 여러 rout를 다 가지고 있는게 router이고 생성된 나 (BookView)를 관리하는
    // 담당 route가 있을 거임. 내 담당 route가 나한테 온 데이터 택배 받아줌.

    // 방법 1
    // this.findBook(this.$route.params.isbn); // 여러 파람스중 isbn주세요

    // 방법 2
    // this.findBook(this.$route.query.isbn);

    // 방법 3 -> router의 path를 바꿔줘야함
    this.findBook(this.$route.params.isbn);
  },
  methods: {
    findBook(isbn) {
      fetch("http://localhost:9999/vuews/book/" + isbn, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("bookview ", data);
          //_this.books = data;
          this.book = data;
        });
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
