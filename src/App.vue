<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/freezer">Freezer</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/item">Item detail</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  body {
    background-color: #f9f9f9;
    margin-inline: auto;
    max-block-size: 915px;
    max-inline-size: 412px;
    block-size: 100%;;
  }
  #app {
    font-family: Nunito, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: white;
    color: #2c3e50;
  }
</style>
