<template>
  <ve-radar-chart
    :height="chartHeight * 1.2"
    :theme="chartTheme"
    :data="chartData"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <!-- <ve-radar-chart
    :height="chartHeight * 1.2"
    :theme="chartTheme"
    :data="chartData"
    :settings="chartSettings"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
  <ve-radar-chart
    :height="chartHeight * 1.2"
    :theme="chartTheme"
    :data="chartData1"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  /> -->
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, computed, onMounted } from 'vue'

import { injectStrict, OTHER_CHART_OPTIONS_KEY } from '@/tokens'
import { shuffle } from '@/utils'
import type { RadarChartSettings, RadarChartOptions } from '../../../../packages/radar/radar'
import type { VeChartsData } from '../../../../packages/types'

export default defineComponent({
  name: 'VeRadarDemo',

  setup() {
    const otherOptions = injectStrict(OTHER_CHART_OPTIONS_KEY)

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartData = ref<VeChartsData>({
      dimensions: [
        { name: 'APP', max: 6000 },
        { name: 'PC', max: 16000 },
        { name: 'M端', max: 30000 },
        { name: '微信', max: 35000 },
        { name: '手Q', max: 50000 },
        { name: '小程序', max: 25000 }
      ],
      measures: [
        { name: '2018', data: [5000, 7000, 12000, 11000, 15000, 14000] }
      ]
    })

    const chartData1 = ref<VeChartsData>({
      dimensions: [
        { name: 'APP', max: 20000 },
        { name: 'PC', max: 20000 },
        { name: 'M端', max: 20000 },
        { name: '微信', max: 20000 },
        { name: '手Q', max: 20000 },
        { name: '小程序', max: 20000 }
      ],
      measures: [
        { name: '2018', data: [20000, 16000, 12000, 8000, 4000, 1000] },
        { name: '2017', data: [18000, 18000, 18000, 18000, 18000, 18000] },
        { name: '2016', data: [15000, 12500, 10000, 7500, 5000, 2500] },
        { name: '2015', data: [8000, 8000, 8000, 8000, 8000, 8000] },
        { name: '2014', data: [6000, 5000, 4000, 3000, 2000, 1000] },
        { name: '2013', data: [1000, 1000, 1000, 1000, 1000, 1000] }
      ]
    })

    const chartSettings = ref<RadarChartSettings>({
      radar: {
        shape: 'circle'
      }
    })

    const chartOptions = ref<RadarChartOptions>({
      title: {
        text: 'VeRadarChart',
        left: 'center'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        { areaStyle: {} },
        { areaStyle: {} },
        { areaStyle: {} },
        { areaStyle: {} },
        { areaStyle: {} }
      ],
      backgroundColor: otherOptions?.backgroundColor,
      darkMode: otherOptions?.darkMode
    })

    onMounted(() => {
      setInterval(() => {
        chartData1.value.measures = chartData1.value.measures.map(v => {
          return {
            name: v.name,
            data: shuffle(v.data)
          }
        })
      }, 5000)
    })

    const testEvent = (val: any) => console.log(val)

    return {
      chartData,
      chartData1,
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
