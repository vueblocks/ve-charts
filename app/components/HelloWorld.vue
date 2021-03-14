<template>
  <div class='hello'>
    <ve-bar-chart
      :data="chartData"
      :settings="settings"
      :height="400"
      :width="800"
      dark-mode
      @click="handleClick"
      @legendselected="handleLegendSeleted"
      @brushEnd="handleClick"
      @zr:click="handleClick"
    />
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue'

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
  setup: () => {
    // const settings: BarChartOptions = {
    const settings = {
      title: {
        text: 'ECharts 5 入门示例'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    }

    return {
      settings,
      handleClick: (val: any) => console.log(val),
      handleLegendSeleted: (val: any) => console.log(val)
    }
  }
})
</script>
