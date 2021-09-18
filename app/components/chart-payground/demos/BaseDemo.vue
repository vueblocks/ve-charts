<template>
  <ve-chart
    :option="chartOptions"
    :theme="chartTheme"
    :height="chartHeight"
    :needUpdate="needUpdate"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineComponent, inject, nextTick, ref, watch } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  BarChart,
  GridComponent,
  CanvasRenderer
])

export default defineComponent({
  name: 'BaseDemo',

  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)
    const needUpdate = ref(false)

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartOptions = computed(() => ({
      title: {
        text: 'VeChart'
      },
      legend: {
        data: ['PV', 'UV']
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'PV',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        },
        {
          name: 'UV',
          data: [33, 66, 88, 44, 33, 44, 22],
          type: 'bar'
        }
      ],
      backgroundColor: otherOptions?.backgroundColor.value,
      darkMode: otherOptions?.darkMode.value
    }))

    const forcedUpdate = () => {
      // manual update echarts options
      needUpdate.value = true
      nextTick(() => { needUpdate.value = false })
    }

    watch(
      () => otherOptions,
      forcedUpdate,
      { deep: true }
    )

    const testEvent = (val: any) => console.log(val)

    return {
      chartOptions,
      chartTheme,
      chartHeight,
      needUpdate,
      testEvent
    }
  }
})
</script>
