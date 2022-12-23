<template>
  <div clas="container">
    <div class="main-container">
      <div class="up">
        <h1 class="name">FREEZER <br/> TRACKER</h1>
        <img class="logo" alt="freezer tracker logo" src="../assets/logo.svg" width="55" height="55">
        <router-link class="btn" to="/freezer">Start</router-link>
      </div>
      <div class="down">
        <img alt="Meat icon" src="../assets/meat.svg">
        <img alt="Dishes icon" src="../assets/dishes.svg">
        <img alt="Vegetables icon" src="../assets/veggies.svg">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';

  export default class HomeView extends Vue {
    beforeMount() {
      // if (localStorage.getItem('drawers')) {
      //   setTimeout( () => {
      //     this.$router.push({name: 'freezer'})
      //   }, 1000)
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    align-items: center;
    background-color: #3f63c8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    block-size: 100vh;
  }

  .up {
    inline-size: 100%;
  }

  .down {
    display: flex;
    justify-content: space-evenly;
    inline-size: 100%;
  }

  .name {
    color: #ffffff;
    font-size: 36px;
    margin: 0;
  }

  .logo {
    background-color: #ffffff;
    border-radius: 50%;
    block-size: 56px;
    inline-size: 56px;
  }

  .btn {
    background-color: #ffffff;
    color: #3f63c8;
    display: block;
    inline-size: 100%;
    margin-block-start: 55px;
    padding-inline: 0;
    text-decoration: none;
  }
</style>
