<h2 align="center">VeCharts Next Version</h2>
<br>
<div align="center">

[![NPM][npmBadge]][npmUrl]
[![NPM Download][npmDtBadge]][npmDtUrl]
<!-- ![support][supportBadge] -->
[![Minzipped Size][bundlePhobiaBadge]][bundlePhobiaUrl]
[![License][licenseBadge]][licenseUrl]

<p align="center">
  📈  <strong>ECharts 5.x</strong> for <strong>Vue.js 3.x</strong>.
</p>
<br>

[npmBadge]:https://img.shields.io/npm/v/ve-charts.svg?maxAge=2592000
[npmUrl]:https://www.npmjs.com/package/ve-charts@next

[npmDtBadge]:https://img.shields.io/npm/dt/ve-charts.svg
[npmDtUrl]:https://www.npmjs.com/package/ve-charts

[licenseBadge]:https://img.shields.io/badge/license-MIT-blue.svg
[licenseUrl]:https://raw.githubusercontent.com/vueblocks/ve-charts/master/LICENSE

<!-- [supportBadge]:https://img.shields.io/badge/support-2%263-%234FC08D?style=flat&logo=Vue.js -->

[bundlePhobiaBadge]:https://badgen.net/bundlephobia/minzip/ve-charts@next
[bundlePhobiaUrl]:https://bundlephobia.com/result?p=ve-charts@next

## ✨ Features

* 🛠 Composable Chart component.
* 🌳 TreeShakable & SideEffects Free, Check out [Bundle Phobia](https://bundlephobia.com/result?p=ve-charts@1.0.0-alpha.1)
* 💪 Fully Typed APIs
* 🩹 Delegate all [echarts option](https://echarts.apache.org/en/option.html) as component props `v-bind`.
* 📢 Delegate all [echarts events](https://echarts.apache.org/en/api.html#events) as component events `v-on`.

## 📦 Installation

```bash
$ yarn add echarts ve-charts@next -S
or
$ npm i echarts ve-charts@next -S
```

## 🦄️ Demos

Vue 3 Demo: [Vue CLI 3.x](./examples/vue3/README.md)  |  Vite 2 Demo: [@vitejs/app](./examples/vite2/README.md)

## 💡 Usage

### Fully import

```js
import { createApp } from 'vue'
import App from './App.vue'

import VeCharts from 've-charts'

const app = createApp(App)

app.use(VeCharts)

app.mount('#app')
```

It will imports `VeCharts` entirely.

### On demand

```js
import { createApp } from 'vue'
import App from './App.vue'

import { VeBarChart, VeLineChart } from 've-charts'

const app = createApp(App)

app.component(VeBarChart.name, VeBarChart)
app.component(VeLineChart.name, VeLineChart)

app.mount('#app')
```

It will imports `VeBarChart` & `VeLineChart` on demandly.

Fullly Component list reference

## 📖 Documentation

### VeChart

`VeChart` is a base chart component, it delegate all echarts events & instance methods in the component.
#### Props

- `theme` Second argument of `echarts.init` method [→](https://echarts.apache.org/en/api.html#echarts.init)
- `initOptions` - Third argument of `echarts.init` method [→](https://echarts.apache.org/en/api.html#echarts.init)
- `option` First argument of `echartsInstance.setOption` method [→](https://echarts.apache.org/en/api.html#echartsInstance.setOption)
- `setOptionOpts` - Second argument of `echartsInstance.setOption` method [→](https://echarts.apache.org/en/api.html#echartsInstance.setOption)
- `height` - Number, Default: 400(px)
- `needUpdate` - Boolean, Default: `false`

#### Methods

`VeChart` support the following methods:

- `setOption` [→](https://echarts.apache.org/en/api.html#echartsInstance.setOption)
- `getWidth` [→](https://echarts.apache.org/en/api.html#echartsInstance.getWidth)
- `getHeight` [→](https://echarts.apache.org/en/api.html#echartsInstance.getHeight)
- `getDom` [→](https://echarts.apache.org/en/api.html#echartsInstance.getDom)
- `getOption` [→](https://echarts.apache.org/en/api.html#echartsInstance.getOption)
- `resize` [→](https://echarts.apache.org/en/api.html#echartsInstance.resize)
- `dispatchAction` [→](https://echarts.apache.org/en/api.html#echartsInstance.dispatchAction)
- `convertToPixel` [→](https://echarts.apache.org/en/api.html#echartsInstance.convertToPixel)
- `convertFromPixel` [→](https://echarts.apache.org/en/api.html#echartsInstance.convertFromPixel)
- `containPixel` [→](https://echarts.apache.org/en/api.html#echartsInstance.containPixel)
- `showLoading` [→](https://echarts.apache.org/en/api.html#echartsInstance.showLoading)
- `hideLoading` [→](https://echarts.apache.org/en/api.html#echartsInstance.hideLoading)
- `containPixel` [→](https://echarts.apache.org/en/api.html#echartsInstance.containPixel)
- `getDataURL` [→](https://echarts.apache.org/en/api.html#echartsInstance.getDataURL)
- `getConnectedDataURL` [→](https://echarts.apache.org/en/api.html#echartsInstance.getConnectedDataURL)
- `clear` [→](https://echarts.apache.org/en/api.html#echartsInstance.clear)
- `dispose` [→](https://echarts.apache.org/en/api.html#echartsInstance.dispose)

#### Events

`VeChart` support the following events:

- `highlight` [→](https://echarts.apache.org/en/api.html#events.highlight)
- `downplay` [→](https://echarts.apache.org/en/api.html#events.downplay)
- `selectchanged` [→](https://echarts.apache.org/en/api.html#events.selectchanged)
- `legendselectchanged` [→](https://echarts.apache.org/en/api.html#events.legendselectchanged)
- `legendselected` [→](https://echarts.apache.org/en/api.html#events.legendselected)
- `legendunselected` [→](https://echarts.apache.org/en/api.html#events.legendunselected)
- `legendselectall` [→](https://echarts.apache.org/en/api.html#events.legendselectall)
- `legendinverseselect` [→](https://echarts.apache.org/en/api.html#events.legendinverseselect)
- `legendscroll` [→](https://echarts.apache.org/en/api.html#events.legendscroll)
- `datazoom` [→](https://echarts.apache.org/en/api.html#events.datazoom)
- `datarangeselected` [→](https://echarts.apache.org/en/api.html#events.datarangeselected)
- `timelinechanged` [→](https://echarts.apache.org/en/api.html#events.timelinechanged)
- `timelineplaychanged` [→](https://echarts.apache.org/en/api.html#events.timelineplaychanged)
- `restore` [→](https://echarts.apache.org/en/api.html#events.restore)
- `dataviewchanged` [→](https://echarts.apache.org/en/api.html#events.dataviewchanged)
- `magictypechanged` [→](https://echarts.apache.org/en/api.html#events.magictypechanged)
- `geoselectchanged` [→](https://echarts.apache.org/en/api.html#events.geoselectchanged)
- `geoselected` [→](https://echarts.apache.org/en/api.html#events.geoselected)
- `geounselected` [→](https://echarts.apache.org/en/api.html#events.geounselected)
- `axisareaselected` [→](https://echarts.apache.org/en/api.html#events.axisareaselected)
- `brush` [→](https://echarts.apache.org/en/api.html#events.brush)
- `brushEnd` [→](https://echarts.apache.org/en/api.html#events.brushEnd)
- `brushselected` [→](https://echarts.apache.org/en/api.html#events.brushselected)
- `globalcursortaken` [→](https://echarts.apache.org/en/api.html#events.globalcursortaken)
- `rendered` [→](https://echarts.apache.org/en/api.html#events.rendered)
- `finished` [→](https://echarts.apache.org/en/api.html#events.finished)
- Mouse events
  - `click` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.click)
  - `dblclick` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.dblclick)
  - `mouseover` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseover)
  - `mouseout` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseout)
  - `mousemove` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mousemove)
  - `mousedown` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mousedown)
  - `mouseup` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseup)
  - `globalout` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.globalout)
  - `contextmenu` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.contextmenu)
- ZRender events
  - `zr:click`
  - `zr:dblclick`
  - `zr:mousedown`
  - `zr:mousemove`
  - `zr:mouseup`
  - `zr:mouseover`
  - `zr:mouseout`
  - `zr:mousewheel`
  - `zr:contextmenu`

See supported events [here →](https://echarts.apache.org/en/api.html#events)

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
