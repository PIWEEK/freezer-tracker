<template>
  <router-view/>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  html {
    background-color: #f9f9f9;
    font-family: Nunito, Helvetica, Arial, sans-serif;
    margin-inline: auto;
    max-block-size: 915px;
    max-inline-size: 412px;
    min-block-size: 100%;
  }

  body {
    background-color: white;
    min-block-size: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  #app {
    font-family: Nunito, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  input {
    border: 1px solid black;
    border-radius: 3px;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: Nunito, Helvetica, Arial, sans-serif;
    padding-block: 10px;
    padding-inline: 10px;
  }

  .btn {
      background-color: #3f63c8;
      border: none;
      border-radius: 3px;
      color: #ffffff;
      font-family: Nunito, Helvetica, Arial, sans-serif;
      padding-block: 10px;
      padding-inline: 10px;
    }
</style>
