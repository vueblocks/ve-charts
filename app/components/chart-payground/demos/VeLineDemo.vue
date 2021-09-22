<template>
  <ve-line-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <ve-line-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData"
    :settings="chartSettings"
    :option="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, computed } from 'vue'
import type { LineChartSettings } from '../../../../packages/line/line'
import type { VeChartsData } from '../../../../packages/types'
import { injectStrict, OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'VeLineDemo',

  setup() {
    const otherOptions = injectStrict(OTHER_CHART_OPTIONS_KEY)

    const chartData: VeChartsData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [
        {
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        },
        {
          name: 'UV',
          data: [480, 232, 323, 923, 822, 902, 987]
        }
      ]
    }

    const chartSettings: LineChartSettings = {
      variant: 'area',
      smooth: true
    }

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartOptions = computed(() => {
      return {
        title: {
          text: 'VeLineChart'
        },
        legend: {
          show: true
        },
        backgroundColor: otherOptions?.backgroundColor.value,
        darkMode: otherOptions?.darkMode.value
      }
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
