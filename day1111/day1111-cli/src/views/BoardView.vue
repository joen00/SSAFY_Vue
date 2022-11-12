<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      v-if="board"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ board.title }}</v-card-title>
      <div class="grey--text ms-4">{{ board.readCount }}</div>
      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ board.writer }}</div>

        <div>{{ board.content }}</div>
      </v-card-text>
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>{{ board.writeDate }}</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          v-on:click="deleteBoard(board.bno)"
        >
          삭제
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          v-on:click="changePage(board.bno)"
        >
          수정
        </v-btn>
      </v-card-actions>
    </v-card>
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
      }).then((resp) => resp.json());
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