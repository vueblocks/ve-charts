<template>
  <div class='hello'>
    <ve-bar-chart
      :data="chartData"
      :option="barChartOptions"
      :height="400"
      :width="800"
      :dark-mode="darkMode"
      :background-color="bgColor"
      :legend="chartLegend"
      @click="handleClick"
      @legendselected="handleLegendSeleted"
      @brushEnd="handleClick"
      @zr:click="handleZrClick"
    />
    <button @click="handleToggle">Toggle</button>
    <ve-line-chart
      :data="chartData"
      :option="lineChartOptions"
      :height="400"
      :dark-mode="darkMode"
      :background-color="bgColor"
      :legend="chartLegend"
      @click="handleClick"
      @legendselected="handleLegendSeleted"
      @brushEnd="handleClick"
      @zr:click="handleZrClick"
    />
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineComponent, ref, onMounted } from 'vue'

import { use } from 'echarts/core'
import { LegendComponent } from 'echarts/components'

use([LegendComponent])

export default defineComponent({
  name: 'HelloWorld',
  data: () => ({
    chartData: {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [{
        name: 'PV',
        data: [256, 767, 1356, 2087, 803, 582, 432]
      }]
    }
  }),
  setup () {
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
      ]
    })
    const lineChartOptions = ref({
      title: {
        text: '简单折线图'
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
      ]
    })

    const darkMode = ref(false)
    const bgColor = computed(() => darkMode.value ? '#000' : '#fff')
    const timer = ref(0)
    const chartLegend = ref({
      data: ['PV', 'UV']
    })

    const handleToggle = () => {
      darkMode.value = !darkMode.value
    }

    const refreshData = () => {
      if (timer.value) clearInterval(timer.value)
      timer.value = setInterval(() => {
        barChartOptions.value.series = barChartOptions.value.series.map(item => {
          const data = item.data
          data.shift()
          data.push(Math.random() * 1000)
          return {
            ...item,
            data
          }
        })
      }, 5000)
    }

    onMounted(() => refreshData())

    return {
      barChartOptions,
      lineChartOptions,
      darkMode,
      bgColor,
      chartLegend,
      handleClick: (val: any) => console.log(val),
      handleZrClick: (val: any) => console.log(val),
      handleLegendSeleted: (val: any) => console.log(val),
      handleToggle
    }
  }
})
</script>
