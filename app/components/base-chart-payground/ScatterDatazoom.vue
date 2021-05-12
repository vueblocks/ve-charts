<template>
  <scatter-chart v-bind="chartOptions" />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, inject } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'

import { use } from 'echarts/core'
import { DataZoomComponent } from 'echarts/components'

use([
  DataZoomComponent
])

const data1: any[] = []
const data2: any[] = []
const data3: any[] = []

const random = function (max: number) {
  return (Math.random() * max).toFixed(3)
}

for (let i = 0; i < 500; i++) {
  data1.push([random(15), random(10), random(1)])
  data2.push([random(10), random(10), random(1)])
  data3.push([random(15), random(10), random(1)])
}

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      animation: false,
      title: {
        text: 'Scatter With DataZoom'
      },
      legend: {
        data: ['scatter', 'scatter2', 'scatter3'],
        right: 0
      },
      tooltip: {},
      xAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
          show: true
        }
      },
      yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
          show: true
        }
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 1,
          end: 35
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          left: '93%',
          start: 29,
          end: 36
        },
        {
          type: 'inside',
          xAxisIndex: [0],
          start: 1,
          end: 35
        },
        {
          type: 'inside',
          yAxisIndex: [0],
          start: 29,
          end: 36
        }
      ],
      series: [
        {
          name: 'scatter',
          type: 'scatter',
          itemStyle: {
            normal: {
              opacity: 0.8
            }
          },
          symbolSize: function (val: any) {
            return val[2] * 40
          },
          data: data1
        },
        {
          name: 'scatter2',
          type: 'scatter',
          itemStyle: {
            normal: {
              opacity: 0.8
            }
          },
          symbolSize: function (val: any) {
            return val[2] * 40
          },
          data: data2
        },
        {
          name: 'scatter3',
          type: 'scatter',
          itemStyle: {
            normal: {
              opacity: 0.8
            }
          },
          symbolSize: function (val: any) {
            return val[2] * 40
          },
          data: data3
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
