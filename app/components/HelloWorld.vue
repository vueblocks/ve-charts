<template>
  <div class='hello'>
    <bar-chart
      :data="chartData"
      :option="barChartOptions"
      :height="400"
      :width="800"
      :dark-mode="darkMode"
      :background-color="bgColor"
      :legend="chartLegend"
      @click="handleClick"
      @zr:click="handleZrClick"
      @legendselected="handleLegendSeleted"
      @mouseover="handleZrClick"
    />

    <button @click="handleToggle">Toggle</button>

    <line-chart
      v-bind="lineChartOptions"
      :height="400"
      :dark-mode="darkMode"
      :background-color="bgColor"
      @click="handleClick"
      @legendselected="handleLegendSeleted"
      @zr:click="handleZrClick"
    />

    <hr>

    <pie-chart
      v-bind="pieChartOptions"
      :height="400"
      :dark-mode="darkMode"
      :background-color="bgColor"
      @click="handleClick"
      @legendselected="handleLegendSeleted"
    />
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineComponent, ref } from 'vue'

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
      legend: {
        data: ['PV', 'UV']
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
    const pieChartOptions = ref({
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
      ]
    })

    const darkMode = ref(false)
    const bgColor = computed(() => darkMode.value ? '#000' : '#fff')
    // const timer = ref(0)
    const chartLegend = ref({
      data: ['PV', 'UV']
    })

    const handleToggle = () => {
      darkMode.value = !darkMode.value
    }

    // const refreshData = () => {
    //   if (timer.value) clearInterval(timer.value)
    //   timer.value = setInterval(() => {
    //     barChartOptions.value.series = barChartOptions.value.series.map(item => {
    //       const data = item.data
    //       data.shift()
    //       data.push(Math.random() * 1000)
    //       return {
    //         ...item,
    //         data
    //       }
    //     })
    //   }, 5000)
    // }

    // onMounted(() => refreshData())

    return {
      barChartOptions,
      lineChartOptions,
      pieChartOptions,
      darkMode,
      bgColor,
      chartLegend,
      handleClick: (val: any) => console.log(val),
      handleZrClick: (val: any) => console.log(val),
      handleZrMouseover: (val: any) => console.log(val),
      handleLegendSeleted: (val: any) => console.log(val),
      handleToggle
    }
  }
})
</script>
