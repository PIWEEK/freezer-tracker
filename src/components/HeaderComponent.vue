<template>
  <router-link to="/" class="header">
    <img alt="freezer tracker logo" src="../assets/logo.svg">
    <h1 class="name">FREEZER TRACKER</h1>
  </router-link>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  .name {
    color: #3f63c8;
    font-size: 24px;
    margin-inline-start: 10px;
  }
</style>