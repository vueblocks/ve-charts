<template>
  <gauge-chart v-bind="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'GaugeDemo',

  setup() {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
            }
          ]
        }
      ],

      ...otherOptions
    })

    return {
      chartOptions
    }
  }
})
</script>

<style></style>
