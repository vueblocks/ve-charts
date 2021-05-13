<template>
  <ve-bar-chart
    :height="360"
    :theme="chartTheme"
    :data="chartData"
    :settings="chartSettings"
    v-bind="chartOptions"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, inject, computed } from 'vue'

import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartData = {
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

    const chartSettings = {
      direction: 'column'
    }

    const chartTheme = computed(() => otherOptions?.theme?.value)

    const chartOptions = computed(() => {
      return {
        title: {
          text: 'VeBarChart'
        },
        grid: {
          left: 30,
          right: 30,
          bottom: 30,
          containLabel: true
        },
        legend: {
          right: 0
        },
        // series: [
        //   {
        //     label: {
        //       show: true,
        //       fontSize: '12',
        //       fontWeight: 'bold'
        //     }
        //   },
        //   {
        //     label: {
        //       show: true,
        //       fontSize: '12',
        //       fontWeight: 'bold',
        //       position: 'right'
        //     }
        //   }
        // ],
        backgroundColor: otherOptions?.backgroundColor.value,
        darkMode: otherOptions?.darkMode.value
      }
    })

    const testEvent = (val: any) => console.log(val)

    return {
      chartData,
      chartSettings,
      chartTheme,
      chartOptions,
      testEvent
    }
  }
})
</script>

<style>

</style>
