<template>
  <div>
    <h1 class="underline">도서 목록</h1>
    <div style="text-align: right">
      <button @click="movePage">도서 등록</button>
    </div>
    <div v-if="books.length">
      <table id="book-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>ISBN</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ book.isbn }}</td>
            <td>
              <a href="#" v-on:click="titleClick(book.isbn)">{{
                book.title
              }}</a>
            </td>
            <td>{{ book.author }}</td>
            <td>{{ book.price | numberWithCommas }}원</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">게시글이 없습니다.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  props: ["cup"],
  created() {
    fetch("http://localhost:9999/vuews/book", {
      method: "get",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("bookList", data);
        this.books = data;
      });
  },
  methods: {
    movePage() {
      this.$router.push({ path: "/create" });
    },
    titleClick(isbn) {
      // 이건 여러 컴포넌트가 한꺼번에 보여지는 상태에서 데이터 보내던 방법
      // this.cup.$emit("hey", isbn); // 종이컵에 대고 부르기

      // 데이터 보내는 방법 1 : params
      // 받는 쪽 : this.$route.params.isbn
      // 특징 : url 에 나타나지 않음.
      // this.$router.push({ name: "bookview", params: { isbn } });

      // 데이터 보내는 방법 2 : query
      // 받는 쪽 : this.$route.query.isbn
      // 특징 : url 에 /bookview?isbn=1111 이렇게 나타남
      // this.$router.push({ name: "bookview", query: { isbn } });

      // 데이터 보내는 방법 3 : path variable
      // 받는 쪽 : router 설정 index.js파일에 path:"/view/:isbn"
      //           this.$route.params.isbn으로 받음
      // 특징 : url 에 /bookview/1111 이렇게 나타남
      this.$router.push({ path: "/view/" + isbn });
    },
  },
  filters: {
    numberWithCommas(x) {
      // 숫자의 3자리마다 ',' 찍기
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
