/* eslint-disable @typescript-eslint/no-explicit-any */
import { EChartsType, init as initChart } from 'echarts/core'
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
  watch
} from 'vue-demi'
import { useResizeObserver } from '@vueblocks/vue-use-core'

// import type { Option } from './types'
import { isOn, toCamelCase, toKebabCase } from './utils'

export default defineComponent({
  name: 'BaseChart',

  inheritAttrs: false,

  props: {
    // ve-charts custom props
    data: [Object, Array],
    settings: [Object, Array],
    chartHeight: { type: Number, default: 400 },
    theme: { type: [String, Object], default: '' },
    initOptions: Object
  },

  setup (props, { attrs }) {
    const { data } = toRefs(props)
    const theme = toRef(props, 'theme')
    const initOptions = toRef(props, 'initOptions')
    const echartsRef = ref<HTMLElement>()
    const echartsInstance = shallowRef<EChartsType>()
    const canvasRect = ref({})

    console.log(data)
    // const echartsOpts = ref({})

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
      const listeners: Record<string, Function> = {}

      Object.keys(attrs)
        .filter(key => isOn(key) && typeof attrs[key] === 'function')
        .forEach(key => {
          const [, ...rest] = toKebabCase(key).split('-')
          const eventKey = rest.length === 1
            ? rest.join('')
            : toCamelCase(rest)
          listeners[eventKey] = attrs[key] as Function
        })

      Object.keys(listeners).forEach(key => {
        const handler = listeners[key] as any

        if (!handler) return

        if (key.indexOf('zr:') === 0) {
          instance.getZr().on(key.slice(3).toLowerCase(), handler)
        } else {
          instance.on(key, handler)
        }
      })
    }

    const init = (options?: any) => {
      if (!echartsRef.value) return

      echartsInstance.value = initChart(echartsRef.value, undefined, {
        renderer: 'canvas'
      })
      console.log(echartsInstance)
      echartsInstance.value.setOption(options)

      delegateEvents(echartsInstance.value)

      nextTick(resize)
    }

    useResizeObserver(
      echartsRef,
      ([entry]) => {
        canvasRect.value = entry.contentRect
        resize()
      }
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
      console.log(attrs)
      if (props.settings) {
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
