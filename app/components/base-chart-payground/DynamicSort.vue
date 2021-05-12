<template>
  <bar-chart
    :legend="chartLegend"
    v-bind="chartOptions"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, inject, onMounted, reactive, ref } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'

const data: any[] = []
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200))
}

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)
    const tid = ref()
    const iid = ref()

    const chartOptions = reactive({
      title: {
        text: 'Bar Race'
      },
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4 // only the largest 3 bars will be displayed
      },
      series: [{
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }],
      legend: {
        show: true
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',

      ...otherOptions
    })

    const testEvent = (val: any) => console.log(val)

    const chartLegend = ref({
      data: ['PV', 'UV']
    })

    const clearup = () => {
      tid.value && clearTimeout(tid.value)
      iid.value && clearInterval(iid.value)
    }

    const run = () => {
      const data = chartOptions.series[0].data

      for (let i = 0; i < data.length; ++i) {
        if (data[i] >= 10000) clearup()
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000)
        } else {
          data[i] += Math.round(Math.random() * 200)
        }
      }
    }

    onMounted(() => {
      tid.value = setTimeout(function () {
        run()
      }, 0)
      iid.value = setInterval(function () {
        run()
      }, 3000)
    })

    return {
      chartLegend,
      chartOptions,
      testEvent
    }
  }
})
</script>

<style>

</style>
