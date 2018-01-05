# 开始使用

## 通过 npm 安装

我们提供了 `ve-charts` npm 包，通过下面命令即可完成安装。

```bash
npm i ve-charts -S
```
## 完整引入 VeCharts

安装完成后，即可使用 `import` 或 `require` 使用。

```js
import Vue from 'vue'
import VeCharts from 've-charts'

Vue.use(VeCharts)
```

## 创建图表

```html
<ve-bar-chart :data="chartData" />
```

```js
export default {
  created () {
    this.chartData = {
      dimensions: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.'],
      measures: [{
        name: 'pv',
        data: [256, 767, 1356, 2087, 803, 582, 432]
      }, {
        name: 'uv',
        data: [287, 707, 1756, 1822, 987, 432, 322]
      }]
    }
  }
}
```