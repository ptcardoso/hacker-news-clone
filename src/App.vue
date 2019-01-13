<template>
  <div id="app">
    <NewsList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsList from '@/components/NewsList.vue';

@Component({
  components: {
    NewsList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  body {
    font-family: Verdana, Geneva, sans-serif;
  }
</style>
