<template>
  <div class='hello'>
    <ve-bar-chart
      :data="chartData"
      :settings="settings"
      :height="400"
    />
  </div>
</template>

<script lang='ts'>
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
      settings
    }
  }
})
</script>
