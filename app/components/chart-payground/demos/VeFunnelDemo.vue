<template>
  <ve-funnel-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <ve-funnel-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData1"
    :settings="chartSettings1"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <ve-funnel-chart
    :height="chartHeight"
    :theme="chartTheme"
    :data="chartData1"
    :settings="chartSettings2"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, computed, ref } from 'vue'

import { injectStrict, OTHER_CHART_OPTIONS_KEY } from '@/tokens'

import type { FunnelChartSettings, FunnelChartOptions } from '../../../../packages/funnel/funnel'
import type { VeChartsData } from '../../../../packages/types'

export default defineComponent({
  name: 'VeFunnelDemo',

  setup() {
    const otherOptions = injectStrict(OTHER_CHART_OPTIONS_KEY)

    const chartData: VeChartsData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [
        {
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }
      ]
    }

    const chartData1 = ref<VeChartsData>({
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [{
        name: 'PV',
        data: [36000, 28000, 24000, 20000, 12000, 6000]
      }, {
        name: 'UV',
        data: [28000, 22000, 18000, 14000, 8000, 2000]
      }]
    })

    const chartSettings1: FunnelChartSettings = {
      variant: 'symmetric'
    }
    const chartSettings2: FunnelChartSettings = {
      variant: 'contrast'
    }

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartOptions = computed<FunnelChartOptions>(() => {
      return {
        title: {
          text: 'VeFunnelChart',
          left: 'center'
        },
        legend: {
          left: 'left',
          orient: 'vertical'
        },
        tooltip: {
          trigger: 'item'
        },
        grid: {
          right: '20%'
        },
        backgroundColor: otherOptions?.backgroundColor.value,
        darkMode: otherOptions?.darkMode.value
      }
    })

    const testEvent = (val: any) => console.log(val)

    return {
      chartData,
      chartData1,
      chartSettings1,
      chartSettings2,
      chartTheme,
      chartHeight,
      chartOptions,
      testEvent
    }
  }
})
</script>

<style></style>
