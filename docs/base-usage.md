# 开始使用

## 通过 npm 安装

我们提供了 `ve-charts` npm 包，通过下面命令即可完成安装，`ve-charts` 依赖于 `echarts` 与 `vue`，所以不要忘记安装依赖包。

```bash
npm i ve-charts echarts -S
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
import 've-charts/lib/common'                         // 公共chuck，引入单个图表前需引入公共包
import VeBarChart from 've-charts/lib/VeBarChart'     // 单个图表chuck
import 've-charts/lib/ve-charts.min.css'              // **按需引入** 同样需要引入样式

Vue.component('VeBarChart', VeBarChart)
```

目前支持的单个引入图表列表如下：

| 图表 | 组件 |
| --- | --- |
| 折线图 | VeLineChart |
| 柱状图 | VeBarChart |
| 饼图 | VePieChart |
| 环形图 | VeDonutChart |
| 雷达图 | VeRadarChart |
| 漏斗图 | VeFunnelChart |
| 散点图 | VeScatterChart |
| 仪表盘 | VeGaugeChart |
| 旭日图 | VeSunburstChart |
| 矩形树图 | VeTreemapChart |
| 树图 | VeTreeChart |
| 地图 | VeGeoChart |
| 词云图 | VeWordcloudChart |
| 水球图 | VeLiquidfillChart |

> Tips:
> * 当按需引入组件时，部分 `ECharts` 模块在用到时也要按需引入
> * 比如 `markArea`、`markLine`，详见：[可以按需引入的模块列表](https://github.com/ecomfe/echarts/blob/master/index.js)

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