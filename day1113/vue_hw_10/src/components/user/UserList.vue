<template>
  <div class="container">
    <h2>사용자 목록</h2>
    <h4>등록된 사용자의 수 : {{ userCnt }}</h4>
    <div v-if="users.length">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">번호</th>
              <th class="text-left">아이디</th>
              <th class="text-left">이름</th>
              <th class="text-left">이메일</th>
              <th class="text-left">나이</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ index }}</td>
              <td>
                <router-link class="user-link" :to="`/${user.id}`">{{
                  user.id
                }}</router-link>
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }} 세</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-else>등록된 사용자가 없습니다.</div>
  </div>
</template>
<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
    },
  },
  methods: {},
  computed: {
    userCnt() {
      return this.users.length;
    },
  },
};
</script>
