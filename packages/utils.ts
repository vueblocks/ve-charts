/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue'
import { WithInstall } from './types'

export const toKebabCase = (str: string) =>
  str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const toCamelCase = (arr: string[]) =>
  arr
    .map((str, idx) => idx > 0 ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : str)
    .join('')

export const isObject = (prop: any) => Object.prototype.toString.call(prop) === '[object Object]'
export const isEmpty = (prop: any) => prop === null || prop === undefined

// Copied from
// https://github.com/vuejs/vue-next/blob/5a7a1b8293822219283d6e267496bec02234b0bc/packages/shared/src/index.ts#L40-L41
export const isOn = (key: string) => /^on[^a-z]/.test(key)

export function omitOn (attrs: Record<string, any>) {
  const result: Record<string, any> = {}
  for (const key in attrs) {
    if (!isOn(key)) {
      result[key] = attrs[key]
    }
  }

  return result
}

export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any
  c.install = (app: App) => {
    app.component(c.name, c)
  }

  return c
}
