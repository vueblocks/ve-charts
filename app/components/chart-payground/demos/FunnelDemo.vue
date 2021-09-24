<template>
  <funnel-chart v-bind="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'FunnelDemo',

  setup() {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      title: {
        text: 'FunnelChart'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      legend: {
        data: ['展现', '点击', '访问', '咨询', '订单']
      },
      series: [
        {
          name: '漏斗图',
          type: 'funnel',
          left: '10%',
          top: 60,
          // x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'left'
          },
          labelLine: {
            length: 20,
            lineStyle: {
              width: 1,
              type: 'dashed'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: [
            { value: 60, name: '访问' },
            { value: 40, name: '咨询' },
            { value: 20, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' }
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
