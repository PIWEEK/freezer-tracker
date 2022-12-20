<template>
  <HeaderComponent/>
  <div v-if="drawers" class="freezer">
    <div class="drawers">
      <v-template v-for="drawer in drawersArray" :key="drawer">
        <router-link class="add-link" :to="{path: '/form', params: { drawerNum: drawer}}">Add</router-link>
        <div v-if="freezer && freezer[drawer]" class="drawer"></div>
        <div v-else class="drawer empty">empty</div>
      </v-template>
    </div>
  </div>
  <div v-else class="empty freezer">
    <div class="content">
      <input type="number" v-model="drawersForm" placeholder="Drawers quantity">
      <button class="btn" @click="saveDrawers()">Set drawers</button>
    </div>
  </div>
</template>

<script lang="ts">
  import HeaderComponent from "../components/HeaderComponent.vue";
  export default {
    props: {
      freezer: localStorage.getItem('freezer')
        ? localStorage.getItem('freezer')
        : {}
    },
    data () {
      return {
        drawers: localStorage.getItem('drawers')
        ? +localStorage.getItem('drawers')
        : 0,
        drawersForm: null,
        drawersArray: this.drawers ? [...Array(this.drawers)] : []
      }
    },
    components: {
      HeaderComponent
    },
    mounted() {
      this.drawersArray = [...Array(this.drawers)]
    },
    methods: {
      saveDrawers() {
        localStorage.setItem('drawers', this.drawersForm)
        this.drawers = this.drawersForm
        this.drawersArray = [...Array(this.drawersForm)]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .freezer {
    display: flex;
    flex-direction: column;
    min-block-size: calc(100vh - 200px);
    inline-size: 80%;
    border: 3px solid black;
    border-radius: 10px;
    margin-inline: auto;
    margin-block-start: 25px;

    &.empty {
      border: 3px dashed black;
      justify-content: center;
    }
  }

  .content {
    padding-inline: 20px;

    button {
      inline-size: 100%;
      margin-block-start: 40px;
    }
  }

  .drawers {
    padding: 20px;
  }

  .drawer {
    align-items: center;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    min-block-size: 100px;

    &.empty {
      border: 1px dashed black;
    }
  }

  .add-link {
    color: #3f63c8;
    display: block;
    text-align: right;
    text-decoration: none;
    margin-block-end: 5px;
    margin-block-start: 20px;
  }
</style>