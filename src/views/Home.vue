<template>
  <div clas="container">
    <div class="start">
      <h1 class="name">FREEZER <br/> TRACKER</h1>
      <img class="logo" alt="freezer tracker logo" src="../assets/logo.svg">
      <button type="button" class="btn">Start</button>
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
  }

  .name {
    color: #3f63c8;
    font-size: 24px;
    margin-inline-start: 10px;
  }

  .logo {
    block-size: 56px;
    inline-size: 56px;
  }

  .btn {
    background-color: #3f63c8;
    min-inline-size: 150px;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    margin-block-start: 40px;
    padding-block: 10px;
    padding-inline: 10px;
  }
</style>
