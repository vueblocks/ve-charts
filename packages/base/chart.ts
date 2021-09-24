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

import { isEmpty } from 'lodash-es'

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
    option: {
      type: Object as PropType<EChartsOption>,
      default: () => ({})
    },
    initOptions: {
      type: Object as PropType<InitOpts>,
      default: () => ({
        renderer: 'canvas'
      })
    },
    theme: {
      type: [String, Object] as PropType<Theme>,
      default: 'default'
    },
    setOptionOpts: {
      type: Object as PropType<SetOptionOpts>,
      default: () => ({})
    },
    height: { type: Number, default: 400 },
    needUpdate: { type: Boolean, default: false }
  },

  setup (props, { attrs }) {
    const option = toRef(props, 'option')
    const initOptions = toRef(props, 'initOptions')
    const theme = toRef(props, 'theme')
    const setOptionOpts = toRef(props, 'setOptionOpts')
    // const height = toRef(props, 'height')
    const needUpdate = toRef(props, 'needUpdate')
    const echartsRef = ref<HTMLElement>()
    const echartsInstance = shallowRef<EChartsType>()
    const canvasRect = ref({})

    const { echartsEvents } = useEchartsEvents(attrs)

    // console.log(option.value)

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

      echartsInstance.value = initChart(echartsRef.value, theme.value, initOptions.value)

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

    const isEmptyData = (opt: EChartsOption) => isEmpty(opt?.series) && isEmpty(opt?.dataset)

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
        // console.log(needUpdate)
        // console.log(JSON.stringify(option.value))
        if (needUpdate && option.value && setOptionOpts.value) {
          setOption(option.value, setOptionOpts.value)
        } else {
          setOption(option.value)
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

    onMounted(() => {
      // console.group('--- new chart ---')
      // console.log(JSON.stringify(option.value))
      // console.log(isEmptyData(option.value) ? '空数据' : '有数据')
      if (!isEmptyData(option.value)) {
        init(option.value)
      }
      // console.groupEnd()
    })

    onUnmounted(dispose)

    return {
      echartsRef
    }
  },

  render (ctx: any) {
    const scopeId = toKebabCase((ctx.$attrs.componentName as any || 've-chart'))

    pushScopeId(scopeId)

    const echartsStyle = {
      width: 'auto',
      height: `${ctx.$props.height}px`
    }

    return h('div', {
      ref: 'echartsRef',
      style: echartsStyle
    })
  }
})
