<template>
  <line-chart
    v-bind="chartOptions"
    @click="testEvent"
    @legendselected="testEvent"
    @zr:click="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, inject, ref } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'LineDemo',

  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      title: {
        text: '简单折线图'
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
          type: 'line'
        },
        {
          name: 'UV',
          data: [33, 66, 88, 44, 33, 44, 22],
          type: 'line'
        }
      ],
      ...otherOptions
    })

    const testEvent = (val: any) => console.log(val)

    return {
      chartOptions,
      testEvent
    }
  }
})
</script>

<style>

</style>
