/* eslint-disable @typescript-eslint/no-explicit-any */
import { init as initChart } from 'echarts/core'
import {
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  toRef,
  toRefs,
  nextTick,
  watch,
  PropType
} from 'vue-demi'
import { useResizeObserver } from '@vueblocks/vue-use-core'

import type {
  EChartsType,
  ECBasicOption,
  Theme,
  InitOpts,
  SetOptionOpts
} from './types'
import { useAttrs } from './composable'

export default defineComponent({
  name: 'BaseChart',

  inheritAttrs: false,

  props: {
    option: [Object, Array] as PropType<ECBasicOption>,
    initOptions: Object as PropType<InitOpts>,
    theme: [String, Object] as PropType<Theme>,
    chartHeight: { type: Number, default: 400 }
  },

  setup (props, { attrs }) {
    const { option } = toRefs(props)
    const theme = toRef(props, 'theme')
    const initOptions = toRef(props, 'initOptions')
    const echartsRef = ref<HTMLElement>()
    const echartsInstance = shallowRef<EChartsType>()
    const canvasRect = ref({})
    const { echartsOptions, echartsEvents } = useAttrs(attrs)

    console.log(option)
    console.log(echartsOptions)

    const resize = () => {
      if (echartsInstance.value) {
        echartsInstance.value.resize()
      }
    }

    const dispose = () => {
      if (echartsInstance.value) {
        echartsInstance.value.dispose()
        echartsInstance.value = undefined
      }
    }

    const delegateEvents = (instance: EChartsType) => {
      Object.keys(echartsEvents).forEach(key => {
        const handler = echartsEvents[key] as any

        if (!handler) return

        if (key.indexOf('zr:') === 0) {
          instance.getZr().on(key.slice(3).toLowerCase(), handler)
        } else {
          instance.on(key, handler)
        }
      })
    }

    const init = (options?: ECBasicOption) => {
      if (!echartsRef.value) return

      echartsInstance.value = initChart(echartsRef.value, props.theme, {
        renderer: 'canvas'
      })
      console.log(echartsInstance)
      options && echartsInstance.value.setOption(options)

      delegateEvents(echartsInstance.value)

      nextTick(resize)
    }

    const setOption = (option: ECBasicOption, opts: SetOptionOpts) => {
      if (!echartsInstance.value) {
        init(option)
      } else {
        echartsInstance.value.setOption(option, {
          ...echartsOptions.value,
          ...opts
        })
      }
    }

    useResizeObserver(
      echartsRef,
      ([entry]) => {
        canvasRect.value = entry.contentRect
        resize()
      }
    )

    watch(
      () => echartsOptions.value,
      (opts) => {
        console.log(opts)
        props.option && setOption(props.option, opts)
      },
      { deep: true }
    )

    watch(
      [theme, initOptions],
      () => {
        dispose()
        init()
      },
      { deep: true }
    )

    onMounted(() => {
      props.option && init(props.option)
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
