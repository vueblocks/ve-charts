<template>
  <radar-chart
    :height="chartHeight * 1.2"
    :theme="chartTheme"
    v-bind="chartOptions"
  />
</template>

<script lang="ts">
import { defineComponent, ref, inject, computed } from 'vue'
import { OTHER_CHART_OPTIONS_KEY } from '@/tokens'

export default defineComponent({
  name: 'RadarDemo',

  setup() {
    const otherOptions = inject(OTHER_CHART_OPTIONS_KEY)

    const chartTheme = computed(() => otherOptions?.theme?.value)
    const chartHeight = computed(() => otherOptions?.height.value)

    const chartOptions = ref({
      title: {
        text: 'RadarChart'
      },
      tooltip: {},
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: 'sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Techology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ],
        radius: '60%'
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ],

      backgroundColor: otherOptions?.backgroundColor,
      darkMode: otherOptions?.darkMode
    })

    return {
      chartOptions,
      chartTheme,
      chartHeight
    }
  }
})
</script>

<style></style>
