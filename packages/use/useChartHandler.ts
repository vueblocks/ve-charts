/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, watch, onMounted, getCurrentInstance } from 'vue'

const useDataHandler = (chart: any, props: any) => {
  const vm = getCurrentInstance()?.proxy as any
  const chartOption = ref(props.option)

  const rerenderChart = () => {
    const baseOption = chart.chartHandler()

    console.log(JSON.stringify(baseOption))

    return { ...chartOption.value, ...baseOption }
  }

  watch(
    () => props.data,
    newVal => {
      if (newVal) {
        chartOption.value = rerenderChart()
        // method in HocChart
        vm.forcedUpdate()
      }
    },
    {
      deep: true
    }
  )

  onMounted(() => {
    chartOption.value = rerenderChart()
  })

  return chartOption
}

export { useDataHandler }
