<template>
  <div clas="container">
    <div class="start">
      <h1 class="name">FREEZER <br/> TRACKER</h1>
      <img class="logo" alt="freezer tracker logo" src="../assets/logo.svg" width="55" height="55">
      <router-link class="btn" to="/freezer">Start</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';

  export default class HomeView extends Vue {
    beforeMount() {
      if (localStorage.getItem('drawers')) {
        setTimeout( () => {
          this.$router.push({name: 'freezer'})
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .start {
    align-items: center;
    background-color: #3f63c8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
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
    min-inline-size: 150px;
    margin-block-start: 40px;
    text-decoration: none;
  }
</style>
