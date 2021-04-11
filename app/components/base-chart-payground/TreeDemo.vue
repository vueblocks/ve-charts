<template>
  <radar-chart v-bind="chartOptions" />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, inject } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '../../tokens'
import data from '../../constants/chart-data/tree.json'

export default defineComponent({
  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    data.children.forEach(function (datum: any, index: any) {
      index % 2 === 0 && (datum.collapsed = true)
    })

    const chartOptions = ref({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: [data],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          emphasis: {
            focus: 'descendant'
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
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
