<template>
  <div>
    <h1>여기는 글 상세조회 페이지 입니다.</h1>
    <router-link to="/">목록</router-link>
    <table border="1">
      <tr>
        <th>no.</th>
        <td>{{ board.bno }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{ board.title }}</td>
      </tr>
      <tr>
        <th>작성자</th>
        <td>{{ board.writer }}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td>{{ board.content }}</td>
      </tr>
      <tr>
        <th>일시</th>
        <td>{{ board.writeDate }}</td>
      </tr>
      <tr>
        <th>조회수</th>
        <td>{{ board.readCount }}</td>
      </tr>
    </table>
    <button v-on:click="deleteBoard(board.bno)">삭제</button>
    <button v-on:click="changePage(board.bno)">수정</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [],
    };
  },
  created() {
    this.detailBoard(this.$route.query.bno);
  },
  methods: {
    detailBoard(bno) {
      fetch("http://localhost:8888/rest/board/read?bno=" + bno, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.board = data;
        });
    },
    deleteBoard(bno) {
      fetch("http://localhost:8888/rest/board?bno=" + bno, {
        method: "delete",
      })
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data);
        });
      alert("삭제가 완료됐습니다.");
      this.$router.push({ path: "/" });
    },
    changePage(bno) {
      this.$router.push({ name: "update", query: { bno } });
    },
  },
};
</script>

<style>
</style>