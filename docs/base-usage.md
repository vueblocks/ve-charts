# 开始使用

## 通过 npm 安装

我们提供了 `ve-charts` npm 包，通过下面命令即可完成安装。

```bash
npm i ve-charts -S
```
## 引入 VeCharts

安装完成后，即可使用 `import` 或 `require` 使用。

完整引入 `ve-charts`

```js
import Vue from 'vue'
import VeCharts from 've-charts'
import 've-charts/lib/ve-charts.min.css'

Vue.use(VeCharts)
```

按需引入 `ve-charts`

```js
import Vue from 'vue'
import from 've-charts/lib/common'                    // 公共chuck，引入单个图表前需引入公共包
import VeBarChart from 've-charts/lib/VeBarChart'     // 单个图表chuck
import 've-charts/lib/ve-charts.min.css'              // **按需引入** 同样需要引入样式     

Vue.component('VeBarChart', VeBarChart)
```

## 创建图表

```html
<ve-bar-chart :data="chartData" />
```

```js
export default {
  created () {
    this.chartData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [{
        name: 'PV',
        data: [256, 767, 1356, 2087, 803, 582, 432]
      }, {
        name: 'UV',
        data: [287, 707, 1756, 1822, 987, 432, 322]
      }]
    }
  }
}
```