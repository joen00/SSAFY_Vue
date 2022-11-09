<template>
  <div>
    <h1>여기는 수정 페이지 입니다.</h1>
    <router-link to="/">목록</router-link>
    <table border="1">
      <tr>
        <th>제목</th>
        <td><input type="text" v-model="title" /></td>
      </tr>
      <tr>
        <th>작성자</th>
        <td><input type="text" v-model="writer" /></td>
      </tr>
      <tr>
        <th>내용</th>
        <td><input type="text" v-model="content" /></td>
      </tr>
      <button v-on:click="updateClick">등록</button>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [],
      bno: "",
      title: "",
      writer: "",
      content: "",
    };
  },
  created() {
    this.updateBoard(this.$route.query.bno);
  },
  methods: {
    updateBoard(bno) {
      fetch("http://localhost:8888/rest/board/update?bno=" + bno, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.title = data.title;
          this.writer = data.title;
          this.content = data.title;
          this.bno = data.bno;
          // console.log(this.board);
        });
    },
    updateClick() {
      fetch("http://localhost:8888/rest/board", {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          writer: this.writer,
          content: this.content,
          bno: this.bno,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("수정됐습니다.");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>