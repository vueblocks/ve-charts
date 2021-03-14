/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed } from 'vue-demi'
import { isOn, omitOn, toKebabCase, toCamelCase } from '../utils'
import { Attrs } from '../types'

const useAttrs = (attrs: Attrs) => {
  const echartsOptions = computed(() => omitOn(attrs))
  const echartsEvents: Record<string, Function> = {}

  Object.keys(attrs)
    .filter(key => isOn(key) && typeof attrs[key] === 'function')
    .forEach(key => {
      const [, ...rest] = toKebabCase(key).split('-')
      const eventKey = rest.length === 1
        ? rest.join('')
        : toCamelCase(rest)
      echartsEvents[eventKey] = attrs[key] as Function
    })

  return {
    echartsOptions,
    echartsEvents
  }
}

export default useAttrs
