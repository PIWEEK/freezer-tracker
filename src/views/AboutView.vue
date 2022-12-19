<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class AboutView extends Vue {}
</script>