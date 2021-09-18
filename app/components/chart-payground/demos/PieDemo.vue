<template>
  <pie-chart
    v-bind="chartOptions"
    @click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, inject } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'PieDemo',

  setup() {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      title: {
        text: 'PieChart',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '60%',
          data: [
            { value: 1048, name: 'APP' },
            { value: 735, name: 'PC' },
            { value: 580, name: 'M端' },
            { value: 484, name: '微信' },
            { value: 300, name: '手Q' },
            { value: 300, name: '小程序' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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

<style></style>
