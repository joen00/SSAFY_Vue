<template>
  <div>
    <h1>여기는 글쓰기 페이지 입니다.</h1>
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
      <button v-on:click="registClick">등록</button>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      writer: "",
      content: "",
    };
  },
  methods: {
    registClick() {
      fetch("http://localhost:8888/rest/board", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          writer: this.writer,
          content: this.content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(this.title);
      alert("등록됐습니다.");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>