/* eslint-disable @typescript-eslint/no-explicit-any */
import { EChartsType, init as initChart } from 'echarts/core'
import { defineComponent, h, onMounted, onUnmounted, ref, shallowRef, toRefs } from 'vue-demi'
// import { useResizeObserver } from '@vueblocks/vue-use-core'

// import type { Option } from './types'

export default defineComponent({
  name: 'BaseChart',
  props: {
    // ve-charts custom props
    data: [Object, Array],
    settings: [Object, Array],
    chartHeight: { type: Number, default: 400 },
    theme: [String, Object],
    initOptions: Object
  },
  setup (props) {
    const { data } = toRefs(props)
    const echartsRef = ref<HTMLElement>()
    const echartsInstance = shallowRef<EChartsType>()

    console.log(data)
    console.log(props.settings)
    // const echartsOpts = ref({})

    const init = (options?: any) => {
      if (!echartsRef.value) return

      echartsInstance.value = initChart(echartsRef.value, undefined, {
        renderer: 'canvas'
      })
      console.log(echartsInstance)
      echartsInstance.value.setOption(options)
    }

    // useResizeObserver(
    //   echartsRef.value,
    //   ([entry]) => {
    //     console.log(entry)
    //   },
    //   {}
    // )

    const dispose = () => {
      if (echartsInstance.value) {
        echartsInstance.value.dispose()
        echartsInstance.value = undefined
      }
    }

    onMounted(() => {
      if (props.settings) {
        console.log(props.settings)
        init(props.settings)
      }
    })

    onUnmounted(dispose)

    return {
      echartsRef
    }
  },
  render (props: any) {
    const echartsStyle = {
      width: 'auto',
      height: `${props.chartHeight}px`
    }

    return h('div', {
      ref: 'echartsRef',
      style: echartsStyle
    })
  }
})
