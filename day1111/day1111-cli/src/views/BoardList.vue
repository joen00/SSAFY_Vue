<template>
  <div>
    <h1>여기는 목록 리스트 입니다.</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">no.</th>
            <th class="text-left">제목</th>
            <th class="text-left">작성자</th>
            <th class="text-left">일시</th>
            <th class="text-left">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in boards" :key="item.bno">
            <td>{{ item.bno }}</td>
            <td>
              <a href="#" v-on:click="titleClick(item.bno)">{{ item.title }}</a>
            </td>
            <td>{{ item.writer }}</td>
            <td>{{ item.writeDate }}</td>
            <td>{{ item.readCount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <a v-if="startPage > 1" v-on:click="getPage(startPage - 1)">[이전]</a>
    <span v-for="(page, i) in range(startPage, endPage)" :key="i">
      <a v-on:click="getPage(page)">[{{ page }}]</a>
    </span>
    <a v-if="totalPage > endPage" v-on:click="getPage(endPage + 1)">[다음]</a>
    <button v-on:click="changePage()">글쓰기</button>

    <v-btn block elevation="6" v-on:click="changePage()">글쓰기</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "제목",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "작성자", value: "writer" },
        { text: "작성일시", value: "writeDate" },
        { text: "조회수", value: "readCount" },
      ],
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