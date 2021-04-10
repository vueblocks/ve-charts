<template>
  <gauge-chart v-bind="gaugeChartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '../tokens'

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const gaugeChartOptions = ref({
      title: {
        text: '基础仪表盘',
        subtext: '纯属虚构'
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          data: [
            { value: (Math.random() * 100), name: '完成率' }
          ]
        }
      ],

      ...otherOptions
    })

    return {
      gaugeChartOptions
    }
  }
})
</script>

<style></style>
