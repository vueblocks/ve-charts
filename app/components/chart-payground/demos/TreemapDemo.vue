<template>
  <treemap-chart v-bind="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'TreemapDemo',

  setup () {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartOptions = ref({
      series: [{
        name: 'Root',
        type: 'treemap',
        data: [
          {
            name: 'nodeA', // First tree
            value: 10,
            children: [
              {
                name: 'nodeAa', // First leaf of first tree
                value: 4
              },
              {
                name: 'nodeAb', // Second leaf of first tree
                value: 6
              }
            ]
          },
          {
            name: 'nodeB', // Second tree
            value: 20,
            children: [{
              name: 'nodeBa', // Son of first tree
              value: 20,
              children: [
                {
                  name: 'nodeBa1', // Granson of first tree
                  value: 20
                }
              ]
            }]
          }
        ]
      }],

      ...otherOptions
    })

    return {
      chartOptions
    }
  }
})
</script>

<style></style>
