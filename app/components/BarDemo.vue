<template>
  <bar-chart
    :data="chartData"
    :width="800"
    :legend="chartLegend"
    :option="barChartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
    @mouseover="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, inject, ref } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '../tokens'

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [{
        name: 'PV',
        data: [256, 767, 1356, 2087, 803, 582, 432]
      }]
    }
    const barChartOptions = ref({
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
      ...otherOptions
    })

    const testEvent = (val: any) => console.log(val)

    const chartLegend = ref({
      data: ['PV', 'UV']
    })

    return {
      chartData,
      chartLegend,
      barChartOptions,
      testEvent
    }
  }
})
</script>

<style>

</style>
