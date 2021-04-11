<template>
  <div id="app">
    <base-chart-playground />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseChartPlayground from './components/base-chart-payground/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    BaseChartPlayground
  }
})
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
