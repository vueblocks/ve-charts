<template>
  <ve-bar-chart
    :height="360"
    :theme="chartTheme"
    :legend="chartLegend"
    :data="chartData"
    :option="chartOptions"
    variant="strip"
    @click="testEvent"
    @zr:click="testEvent"
    @legendselected="testEvent"
  />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, inject, ref, computed } from 'vue'

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

    const chartTheme = computed(() => otherOptions?.theme?.value)

    const chartOptions = computed(() => {
      return {
        backgroundColor: otherOptions?.backgroundColor.value,
        darkMode: otherOptions?.darkMode.value
      }
    })

    const testEvent = (val: any) => console.log(val)

    const chartLegend = ref({
      data: ['PV', 'UV']
    })

    return {
      chartData,
      chartTheme,
      chartLegend,
      chartOptions,
      testEvent
    }
  }
})
</script>

<style>

</style>
