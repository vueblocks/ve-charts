import { onUnmounted, watch } from 'vue'
import { ResizeObserver } from '@juggle/resize-observer'
import {
  ResizeObserverOptions,
  ResizeObserverCallback,
  RefTypedElement
} from '../types'
import { unrefElement } from '../utils'

/**
 * It immediately detects when an element resizes and provides accurate sizing information back to the handler.
 * @param target
 * @param callback
 * @param options
 */
const useResizeObserver = (
  target: RefTypedElement,
  callback: ResizeObserverCallback,
  options: ResizeObserverOptions = {}
) => {
  let ro: ResizeObserver | undefined
  const isSupported = window && 'ResizeObserver' in window

  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      if (isSupported && window && el) {
        ro = new ResizeObserver(callback)

        ro.observe(el, options)
      }
    },
    { immediate: true }
  )

  const stop = () => {
    ro && ro.disconnect()
    ro = undefined
    stopWatch()
  }

  onUnmounted(stop)

  return {
    stop
  }
}

export { useResizeObserver }
