<template>
  <div>
    <router-view
      :users="users"
      @create-user="createUser"
      @update-user="updateUser"
      @delete-user="deleteUser"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUserList() {
      // user 리스트 요청 api 주소
      const API_URL = `http://localhost:9999/userapi/user`;
      // axios 요청 (Spring Boot Rest API 참고)
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          this.users = res.data;
          // 일치하는 정보가 있으면 true로 바꿈
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createUser(user) {
      // user 등록 요청 api 주소
      const API_URL = `http://localhost:9999/userapi/user`;
      // axios 요청 (Spring Boot Rest API 참고)
      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then(() => {
          alert("등록 완료");
          this.getUserList();
          this.$router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateUser(user) {
      // user 수정 요청 api 주소
      console.log(user.id);
      const API_URL = `http://localhost:9999/userapi/user`;
      // axios 요청 (Spring Boot Rest API 참고)
      axios({
        url: API_URL,
        method: "PUT",
        data: user,
      })
        .then(() => {
          alert("수정 완료");
          this.getUserList();
          this.$router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser(user) {
      // user 수정 요청 api 주소
      const API_URL = `http://localhost:9999/userapi/user/` + user.id;
      // axios 요청 (Spring Boot Rest API 참고)
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          alert("삭제 완료");
          this.getUserList();
          this.$router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUserList();
  },
};
</script>

<style>
.user-link {
  color: black;
}

.view {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  font-size: medium;
}

label {
  display: inline-block;
  width: 130px;
}
</style>
