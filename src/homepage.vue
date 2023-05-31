<template>
  <div class="home">
    <h1>歡迎來到售票系統</h1>
    <button @click="goToTicketPage">立即購票</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToTicketPage() {
      this.$router.push('App.vue'); // 導航到購票介面的路由路徑
    },
  },
};
</script>

<style>
.home {
  text-align: center;
  margin-top: 100px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
}
</style>

