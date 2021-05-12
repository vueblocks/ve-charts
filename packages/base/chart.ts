/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  toRef,
  nextTick,
  watch,
  PropType,
  pushScopeId
} from 'vue'
import { init as initChart } from 'echarts/core'

import type {
  EChartsType,
  Theme,
  InitOpts,
  SetOptionOpts,
  EChartsOption
} from '../types'
import { useEchartsEvents, useResizeObserver } from '../use'

import { toKebabCase } from '../utils'

export default defineComponent({
  name: 'VeChart',

  inheritAttrs: false,

  props: {
    option: Object as PropType<EChartsOption>,
    initOptions: {
      type: Object as PropType<InitOpts>,
      default: () => ({
        renderer: 'canvas'
      })
    },
    theme: [String, Object] as PropType<Theme>,
    setOptionOpts: {
      type: Object as PropType<SetOptionOpts>,
      default: () => ({})
    },
    height: { type: Number, default: 400 },
    needUpdate: { type: Boolean, default: false }
  },

  setup (props, { attrs }) {
    const option = toRef(props, 'option')
    const theme = toRef(props, 'theme')
    const initOptions = toRef(props, 'initOptions')
    const setOptionOpts = toRef(props, 'setOptionOpts')
    const needUpdate = toRef(props, 'needUpdate')
    const echartsRef = ref<HTMLElement>()
    const echartsInstance = shallowRef<EChartsType>()
    const canvasRect = ref({})

    const { echartsEvents } = useEchartsEvents(attrs)

    // console.log(option.value)
    const echartsStyle = {
      width: 'auto',
      height: `${props.height}px`
    }

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

    const init = (opt?: EChartsOption) => {
      if (!echartsRef.value) return

      echartsInstance.value = initChart(echartsRef.value, props.theme, initOptions.value)

      opt && echartsInstance.value.setOption(opt)

      delegateEvents(echartsInstance.value)

      nextTick(resize)
    }

    const setOption = (option: EChartsOption, opts?: SetOptionOpts) => {
      if (!echartsInstance.value) {
        init(option)
      } else {
        echartsInstance.value.setOption(option, opts)
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
      needUpdate,
      (needUpdate) => {
        if (needUpdate && option.value) {
          if (setOptionOpts.value) {
            setOption(option.value, setOptionOpts.value)
          } else {
            setOption(option.value)
          }
        }
      },
      { deep: true }
    )

    watch(
      [theme, initOptions],
      () => {
        dispose()
        init(option.value)
      },
      { deep: true }
    )

    watch(
      () => option.value,
      (newVal) => {
        dispose()
        init(newVal)
      },
      { deep: true }
    )

    onMounted(() => {
      option.value && init(option.value)
    })

    onUnmounted(dispose)

    return {
      echartsRef,
      echartsStyle
    }
  },

  render () {
    const scopeId = toKebabCase((this.$attrs.chartType as any || 've-chart'))

    pushScopeId(scopeId)

    return h('ve-charts', {
      ref: 'echartsRef',
      style: this.echartsStyle
    })
  }
})
