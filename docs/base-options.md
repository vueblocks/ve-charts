# VeCharts 基本属性

`ve-charts` 组件的基本属性包括 **数据** 与 **配置项**，**配置项** 又包括 **通用配置** 和 **图表配置**。

```html
<ve-bar-chart
  :data="chartData"               // 数据
  :settings="chartSettings"       // 图表配置
  :title="title"                  // 通用配置
/>
```

## 数据

`ve-charts` 的数据设计采用数据分析的基础概念，用**维度**和**度量**的组合提供可视化和数据。`ve-charts` 接收的数据格式为 JSON 对象，分为 `dimensions` 维度与 `measures` 度量。

例如：

```js
{
  dimensions: {
    name: '月份',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  measures: [{
    name: '蒸发量',
    data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
  }, {
    name: '降水量',
    data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3]
  }]
}
```

### 什么是维度与度量？

### 维度

维度确定如何对可视化内容数据分组，通常呈现在条形图的 X 轴上或饼图的切片上，例如时间、区域、产品类型等。

### 度量

度量是在可视化中使用的计算，结果为具体的参考数值，通常呈现在条形图的 Y 轴上或表格的列中。度量通过由聚合函数（例如 Sum 或 Max）组成的与一个或多个字段组合的表达式创建，例如蒸发量、降水量、销售额等。

### 映射 ECharts

按照[柱状图示例](https://vueblocks.github.io/ve-charts/#/chart-bar)，柱状图的 X 轴为维度，Y轴为度量。

### 维度

**ECharts 配置 xAxis**

```js
xAxis: [
  {
    type : 'category',
    name: '月份',
    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  }
]
```

**VeCharts 配置 data.dimensions**

```js
data: {
  dimensions: {
    name: '月份'
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }
}
```

### 度量

**ECharts 配置 series**

```js
series: [
  {
    name:'蒸发量',
    type:'bar',
    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
  },
  {
    name:'降水量',
    type:'bar',
    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
  }
]
```

**VeCharts 配置 data.measures**

```js
data: {
  measures: [{
    name: '蒸发量',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
  }, {
    name: '降水量',
    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
  }]
}
```

## 通用配置

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| --- | :---: | :---: | --- | --- |
| data | 图表数据，dimensions: 维度，measures: 度量 | [Array, Object] | [] or {} | [] |
| settings | 图表配置项，内容参考图表具体配置 | [Array, Object] | [] or {} | {} |
| title | 标题组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#title) |
| legend | 图例组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#legend) |
| xAxis | 直角坐标系 grid 中的 x 轴 | [Array, Object] | - | [参考配置](http://echarts.baidu.com/option.html#xAxis) |
| yAxis | 直角坐标系 grid 中的 y 轴 | [Array, Object] | - | [参考配置](http://echarts.baidu.com/option.html#yAxis) |
| dataZoom | 区域缩放 | [Object, Array] | - | [参考配置](http://echarts.baidu.com/option.html#dataZoom) |
| visualMap | 视觉映射 | [Object, Array] | - | [参考配置](http://echarts.baidu.com/option.html#visualMap) |
| tooltip | 提示框组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#tooltip) |
| axisPointer | 坐标轴指示器 | Object | - | [参考配置](http://echarts.baidu.com/option.html#axisPointer) |
| toolbox | 工具栏 | Object | - | [参考配置](http://echarts.baidu.com/option.html#toolbox) |
| brush | 区域选择组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#brush) |
| geo | 地理坐标系组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#geo) |
| timeline | 时间线组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#timeline) |
| graphic | 原生图形元素组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#graphic) |
| series | 系列列表 | [Object, Array] | - | [参考配置](http://echarts.baidu.com/option.html#series) |
| color | 调色盘组件 | Object | - | [参考配置](http://echarts.baidu.com/option.html#color) |
| backgroundColor | 背景色，默认无背景 | [Object, Array] | - | [参考配置](http://echarts.baidu.com/option.html#backgroundColor) |
| textStyle | 全局的字体样式 | Object | - | [参考配置](http://echarts.baidu.com/option.html#textStyle) |
| animation | 是否开启动画 | Object | - | [参考配置](http://echarts.baidu.com/option.html#animation) |
| tooltipVisible | 组件 `tooltip` 提示框显示开关 | Boolean | `true` or `false` | `true` |
| legendVisible | 组件 `legend` 图例显示开关 | Boolean | `true` or `false` | `true` |
| legendPosition | 组件 `legend` 图例显示位置 | Boolean | `top-left`/`top-center`/`top-right`/`bottom-left`/`bottom-center`/`bottom-right` | `top-center` |
| theme | 自定义主题，如果传入主题名称，需要全局注册 `echarts` 以及主题文件 | [String, Object] | 主题名称，主题对象 | [参考主题](http://echarts.baidu.com/theme-builder/) |
| emptyText | 自定义空数据文案 | String | 暂无数据 | - |
| loading | 加载数据动效开关 | Boolean | `true` or `false` | `false` |
| height | 图表高度 | Number | - | `400`，单位`px` |
| renderer | 渲染方式 | String | `canvas` or `svg` | `canvas` |
| --- | --- | --- | --- | --- |

> Tips:
> * 当同时传入 `color`、`theme` 时，`color` 的优先级更高，会覆盖传入的主题配色
> * 当同时传入 `series`、`data` 时，`series` 的优先级更高，会忽略传入的 `data`，建议使用 `series` 时可以不传入 `data`

## 图表配置

[折线图配置](https://vueblocks.github.io/ve-charts/#/chart-line)

[柱状图配置](https://vueblocks.github.io/ve-charts/#/chart-bar)

[饼图配置](https://vueblocks.github.io/ve-charts/#/chart-pie)

[环形图配置](https://vueblocks.github.io/ve-charts/#/chart-donut)

[雷达图配置](https://vueblocks.github.io/ve-charts/#/chart-radar)

[漏斗图配置](https://vueblocks.github.io/ve-charts/#/chart-funnel)

[散点图配置](https://vueblocks.github.io/ve-charts/#/chart-scatter)

[仪表盘配置](https://vueblocks.github.io/ve-charts/#/chart-gauge)

[旭日图配置](https://vueblocks.github.io/ve-charts/#/chart-sunburst)

[矩形树图配置](https://vueblocks.github.io/ve-charts/#/chart-treemap)

[树图配置](https://vueblocks.github.io/ve-charts/#/chart-tree)

[地图](https://vueblocks.github.io/ve-charts/#/chart-geo)

[词云图](https://vueblocks.github.io/ve-charts/#/chart-wordcloud)

[水球图](https://vueblocks.github.io/ve-charts/#/chart-liquidfill)
