<template>
  <div>
    <h1>여기는 글쓰기 페이지 입니다.</h1>
    <router-link to="/">목록</router-link>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :counter="10"
        :rules="nameRules"
        label="제목"
        required
      ></v-text-field>
      <v-text-field
        v-model="writer"
        :counter="10"
        :rules="nameRules"
        label="작성자"
        required
      ></v-text-field>
      <v-text-field
        v-model="content"
        :counter="10"
        :rules="nameRules"
        label="내용"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        v-on:click="registClick"
      >
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
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