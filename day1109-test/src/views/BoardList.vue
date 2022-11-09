<template>
  <div>
    <h1>여기는 목록 리스트 입니다.</h1>
    <table border="1">
      <tr>
        <th>no.</th>
        <th>제목</th>
        <th>작성자</th>
        <th>일시</th>
        <th>조회수</th>
      </tr>
      <tr v-for="(board, index) in boards" :key="index">
        <td>{{ board.bno }}</td>
        <td>
          <a href="#" v-on:click="titleClick(board.bno)">{{ board.title }}</a>
        </td>
        <td>{{ board.writer }}</td>
        <td>{{ board.writeDate }}</td>
        <td>{{ board.readCount }}</td>
      </tr>
    </table>

    <a v-if="startPage > 1" v-on:click="getPage(startPage - 1)">[이전]</a>
    <span v-for="(page, i) in range(startPage, endPage)" :key="i">
      <a v-on:click="getPage(page)">[{{ page }}]</a>
    </span>
    <a v-if="totalPage > endPage" v-on:click="getPage(endPage + 1)">[다음]</a>

    <button v-on:click="changePage()">글쓰기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boards: [],
      startPage: "",
      endPage: "",
      totalPage: "",
      curPage: "",
    };
  },
  created() {
    fetch("http://localhost:8888/rest/board?page=1", {
      method: "get",
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.boards = data.boardList;
        this.startPage = data.startPage;
        this.endPage = data.endPage;
        this.totalPage = data.totalPage;
        this.curPage = data.currPage;
        // console.log(data);
      });
  },
  methods: {
    getPage(page) {
      fetch("http://localhost:8888/rest/board?page=" + page, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.boards = data.boardList;
          this.startPage = data.startPage;
          this.endPage = data.endPage;
          this.totalPage = data.totalPage;
          this.curPage = data.currPage;
          // console.log(data);
        });
    },
    titleClick(bno) {
      this.$router.push({ name: "view", query: { bno } });
    },
    changePage() {
      this.$router.push({ name: "create" });
    },
    range(start, end) {
      let list = [];
      for (let i = start; i <= end; i++) list.push(i);
      return list;
    },
  },
};
</script>

<style>
</style>