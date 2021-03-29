// .vitepress/theme/index.js
// import './index.postcss'
import DefaultTheme from 'vitepress/theme'

import SandBox from '../components/sandbox/index.vue'
// import SandBoxMonaco from '../components/sandbox-monaco/index.vue'
// import ExampleBlock from '../components/ExampleBlock.vue'
import BarChart from '../../../packages/bar/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    console.log(siteData.value)
    app.component(SandBox.name, SandBox)
    // app.component(SandBoxMonaco.name, SandBoxMonaco)
    // app.component(ExampleBlock.name, ExampleBlock)
    app.use(BarChart)
  }
}
