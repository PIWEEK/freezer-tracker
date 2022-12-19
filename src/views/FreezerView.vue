<template>
  <HeaderComponent/>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HeaderComponent from '@/components/HeaderComponent.vue';

  @Options({
  components: {
    HeaderComponent,
  },
})

  export default class FreezerView extends Vue {}
</script>
