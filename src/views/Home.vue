<template>
  <div clas="container">
    <div class="start">
      <h1 class="name">FREEZER <br/> TRACKER</h1>
      <img class="logo" alt="freezer tracker logo" src="../assets/logo.svg">
      <router-link class="btn" to="/freezer">Start</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HeaderComponent from '@/components/HeaderComponent.vue';

  @Options({
  components: {
    HeaderComponent,
  },
})

  export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
  .start {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .name {
    color: #3f63c8;
    font-size: 24px;
    margin: 0;
  }

  .logo {
    block-size: 56px;
    inline-size: 56px;
  }

  .btn {
    min-inline-size: 150px;
    margin-block-start: 40px;
    text-decoration: none;
  }
</style>
