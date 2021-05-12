<template>
  <ve-chart :option="chartOptions" />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineComponent, inject } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'

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
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = computed(() => ({
      title: {
        text: '简单柱状图'
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

    const testEvent = (val: any) => console.log(val)

    return {
      chartOptions,
      testEvent
    }
  }
})
</script>
