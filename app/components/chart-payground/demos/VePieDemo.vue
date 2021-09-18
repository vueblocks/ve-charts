<template>
  <ve-pie-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <ve-pie-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData"
    :settings="chartSettings"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, computed } from 'vue'

import { injectStrict, OTHER_CHART_OPTIONS_KEY } from '@/tokens'
import { PieChartSettings } from '../../../../packages/pie/pie'

export default defineComponent({
  name: 'VePieDemo',

  setup() {
    const otherOptions = injectStrict(OTHER_CHART_OPTIONS_KEY)

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [
        {
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }
      ]
    }

    const chartSettings = ref<PieChartSettings>({
      variant: 'donut',
      title: {
        text: 'VeDonutChart',
        left: 'center'
      }
    })

    const chartOptions = ref({
      title: {
        text: 'VePieChart',
        left: 'center'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          type: 'pie',
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
      chartData,
      chartSettings,
      chartTheme,
      chartHeight,
      chartOptions,
      testEvent
    }
  }
})
</script>

<style></style>
