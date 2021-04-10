<template>
  <div id="app">
    <button @click="handleToggle">Toggle</button>
    <div class="playground">
      <bar-demo />
      <line-demo />
      <pie-demo />
      <funnel-demo />
      <gauge-demo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed } from 'vue'

import BarDemo from './components/BarDemo.vue'
import LineDemo from './components/LineDemo.vue'
import PieDemo from './components/PieDemo.vue'
import FunnelDemo from './components/FunnelDemo.vue'
import GaugeDemo from './components/GaugeDemo.vue'

import { OTHER_CHART_OPTIONS_KEY } from './tokens/index'

export default defineComponent({
  name: 'App',
  components: {
    BarDemo,
    PieDemo,
    FunnelDemo,
    LineDemo,
    GaugeDemo
  },
  setup () {
    const height = ref(400)
    const darkMode = ref(false)
    const backgroundColor = computed(() => darkMode.value ? '#000' : '#fff')

    const handleToggle = () => {
      darkMode.value = !darkMode.value
    }

    provide(OTHER_CHART_OPTIONS_KEY, {
      darkMode,
      backgroundColor,
      height
    })

    return {
      handleToggle
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.playground {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>
