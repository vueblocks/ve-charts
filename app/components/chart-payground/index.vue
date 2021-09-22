<template>
  <div class="action">
    <button @click="handleToggle">Toggle Darkmode</button>
    <select name="theme" id="themet-select" v-model="activeTheme">
      <option value="">--Choose a Theme--</option>
      <option value="default">Default</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <input type="number" step="20" v-model="height" />
  </div>
  <!-- <UniversalTransitionDemo /> -->
  <div class="playground">
    <base-demo />
    <bar-demo />
    <ve-bar-demo />
    <line-demo />
    <ve-line-demo />
    <pie-demo />
    <ve-pie-demo />
    <!-- <funnel-demo />
    <gauge-demo />
    <radar-demo />
    <tree-demo />
    <treemap-demo />
    <scatter-datazoom />
    <dynamic-sort /> -->
  </div>
</template>

<script lang="ts">
import { provide, defineComponent, ref, computed } from 'vue'
import { use } from 'echarts/core'
import {
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent
} from 'echarts/components'

import { OTHER_CHART_OPTIONS_KEY } from '../../tokens/index'
import components from './demos/index'

use([ToolboxComponent, TooltipComponent, TitleComponent, LegendComponent])

export default defineComponent({
  name: 'ChartPlayground',

  components,

  setup() {
    const height = ref(256)
    const darkMode = ref(false)
    const backgroundColor = computed(() => (darkMode.value ? '#000' : '#fff'))
    const activeTheme = ref('')

    const handleToggle = () => {
      darkMode.value = !darkMode.value

      // it will dispose and recreate echarts instance
      activeTheme.value = darkMode.value ? 'dark' : 'default'
    }

    provide(OTHER_CHART_OPTIONS_KEY, {
      height,
      darkMode,
      backgroundColor,
      theme: activeTheme
    })

    return {
      handleToggle,
      activeTheme,
      height
    }
  }
})
</script>

<style>
.playground {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 16px;
  background-color: aliceblue;
}

.action {
  margin: 20px 0;
  text-align: center;
}
</style>
