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
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref } from 'vue'

import { use } from 'echarts/core'
import { LegendComponent } from 'echarts/components'

use([LegendComponent])

export default defineComponent({
  name: 'VeChartsDemo',
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
    // const timer = ref(0)
    const chartLegend = ref({
      data: ['PV', 'UV']
    })

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
      chartLegend,
      handleClick: (val: any) => console.log(val),
      handleZrClick: (val: any) => console.log(val),
      handleZrMouseover: (val: any) => console.log(val),
      handleLegendSeleted: (val: any) => console.log(val)
    }
  }
})
</script>
