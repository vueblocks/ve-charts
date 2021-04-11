<template>
  <div class="action">
    <button @click="handleToggle">Toggle</button>
  </div>
  <div class="playground">
    <bar-demo />
    <line-demo />
    <pie-demo />
    <funnel-demo />
    <gauge-demo />
    <radar-demo />
    <scatter-demo />
    <tree-demo />
    <treemap-demo />
  </div>
</template>

<script lang="ts">
import { provide, ref, computed, defineComponent } from 'vue'
import { use } from 'echarts/core'
import {
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent
} from 'echarts/components'

import BarDemo from './BarDemo.vue'
import LineDemo from './LineDemo.vue'
import PieDemo from './PieDemo.vue'
import FunnelDemo from './FunnelDemo.vue'
import GaugeDemo from './GaugeDemo.vue'
import RadarDemo from './RadarDemo.vue'
import ScatterDemo from './ScatterDemo.vue'
import TreeDemo from './TreeDemo.vue'
import TreemapDemo from './TreemapDemo.vue'

import { OTHER_CHART_OPTIONS_KEY } from '../../tokens/index'

use([
  ToolboxComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
])

export default defineComponent({
  name: 'BaseChartPlayground',
  components: {
    BarDemo,
    LineDemo,
    PieDemo,
    FunnelDemo,
    GaugeDemo,
    RadarDemo,
    ScatterDemo,
    TreeDemo,
    TreemapDemo
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

<style scoped>
.playground {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 16px;
  background-color: aliceblue;
}

.action {
  margin: 60px 0;
  text-align: center;
}
</style>
