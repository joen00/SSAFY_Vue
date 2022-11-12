<template>
  <tr>
    <td>{{ apt.일련번호 }}</td>
    <td>{{ apt.아파트 }}</td>
    <td>{{ apt.법정동 }}</td>
    <td>{{ apt.층 }}층</td>
    <td>{{ apt.거래금액 }}만원</td>
  </tr>
</template>

<script>
export default {
  name: "AptLsitItem",
  props: {
    apt: Object,
  },
};
</script>

<style scoped>
/* scoped를 주면 이 스타일 안에서만 쓸수있다. 밖에게 더 우선이다. */
td {
  font-weight: bold;
  border-bottom: 2px solid rgb(244, 108, 108);
}
</style>