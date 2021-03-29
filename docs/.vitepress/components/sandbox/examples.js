export const DEMO_1 = `<template>
  <bar-chart
    :option="barChartOptions"
    :height="400"
    :dark-mode="darkMode"
    :background-color="bgColor"
    @click="handleClick"
  />
</template>

<script>
export default defineComponent({
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

    return {
      barChartOptions
    }
  }
})
</script>
`

export const OPTIONS_1 = {
  height: 400,
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
}
