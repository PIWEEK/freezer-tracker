<template>
  <header v-if="$route.path !== '/'">
    <router-link class="header" to="/">
      <img alt="freezer tracker logo" src="./assets/logo.svg" width="35" height="35">
      <h1 class="name">FREEZER TRACKER</h1>
    </router-link>
  </header>
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
    color: #000000;
  }

  .header {
    align-items: center;
    background-color: #ebeffa;
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding-block: 10px;

    & .name {
      color: #3f63c8;
      font-size: 24px;
      margin-inline-start: 10px;
    }
  }

  input {
    border: 1px solid #3f63c8;
    border-radius: 3px;
    box-sizing: border-box;
    inline-size: 100%;
    font-family: Nunito, Helvetica, Arial, sans-serif;
    padding-block: 10px;
    padding-inline: 10px;

    &::placeholder {
      color: #c4bdbd;
    }
  }

  select {
    background-color: #ffffff;
    border: 1px solid #3f63c8;
    border-radius: 3px;
    box-sizing: border-box;
    color: #000000;
    inline-size: 100%;
    font-family: Nunito, Helvetica, Arial, sans-serif;
    padding-block: 10px;
    padding-inline: 10px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }

  option {
    color: #000000;
  }

  option[disabled] {
    color: #c4bdbd;
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

  .main-container {
    padding: 20px;
  }

  p {
    margin: 0;
    text-align: left;
  }
</style>
