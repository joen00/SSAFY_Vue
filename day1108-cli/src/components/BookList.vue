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
    const booklist = localStorage.getItem("booklist");
    let newBook = {
      books: [],
    };
    if (booklist) {
      newBook = JSON.parse(booklist);
    } else {
      localStorage.setItem("booklist", JSON.stringify(newBook));
    }
    newBook.books.sort((a, b) => {
      return -(a.price - b.price);
    });
    this.books = newBook.books;
  },
  methods: {
    movePage() {
      location.href = "create.html";
    },
    titleClick(isbn) {
      this.cup.$emit("hey", isbn); // 종이컵에 대고 부르기
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
