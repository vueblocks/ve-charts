<template>
  <div class='hello'>
    <ve-bar-chart
      :data="chartData"
      :settings="settings"
      :height="400"
      :width="800"
      :dark-mode="darkMode"
      :background-color="bgColor"
      @click="handleClick"
      @legendselected="handleLegendSeleted"
      @brushEnd="handleClick"
      @zr:click="handleClick"
    />
    <button @click="darkMode = !darkMode">Toggle</button>
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineComponent, ref } from 'vue'

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
  setup () {
    const settings = ref({
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
    })

    const darkMode = ref(false)
    const bgColor = computed(() => darkMode.value ? '#000' : '#fff')
    // const timer = ref(0)

    // const refreshData = () => {
    //   if (timer.value) clearInterval(timer.value)
    //   timer.value = setInterval(() => {
    //     settings.value.series = settings.value.series.map(item => {
    //       const data = item.data
    //       data.shift()
    //       data.push(Math.random() * 1000)
    //       return {
    //         ...item,
    //         data
    //       }
    //     })
    //   }, 6666)
    // }

    // onMounted(() => refreshData())

    return {
      settings,
      darkMode,
      bgColor,
      handleClick: (val: any) => console.log(val),
      handleLegendSeleted: (val: any) => console.log(val)
    }
  }
})
</script>
