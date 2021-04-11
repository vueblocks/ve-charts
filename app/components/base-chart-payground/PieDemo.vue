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

import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
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
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
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

<style>

</style>
