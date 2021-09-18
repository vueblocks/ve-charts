import { Component } from 'vue'
/**
 * 动态加载目录下 .vue 组件
 */
const files = require.context('.', false, /\.vue$/)
const components: Record<string, Component> = {}

files.keys().forEach((key) => {
  if (key === './index.ts') return

  const component = files(key).default
  const componentName = (component.name || key.replace(/.\//, '').replace(/.vue/, '')) as string

  components[componentName] = component
})

export default components
