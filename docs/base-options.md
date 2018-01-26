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

按照[柱状图示例](https://gammafe.github.io/ve-charts/#/chart-bar)，柱状图的 X 轴为维度，Y轴为度量。

#### 维度

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

#### 度量

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

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 图表数据，dimensions: 维度，measures: 度量 | Object | {} |
| settings | 图表配置项，内容参考图表具体配置 | Object | {} |
| title | 标题组件 | Object | [参考配置](http://echarts.baidu.com/option.html#title) |
| legend | 图例组件 | Object | [参考配置](http://echarts.baidu.com/option.html#legend) |
| xAxis | 直角坐标系 grid 中的 x 轴 | Object | [参考配置](http://echarts.baidu.com/option.html#xAxis) |
| yAxis | 直角坐标系 grid 中的 y 轴 | Object | [参考配置](http://echarts.baidu.com/option.html#yAxis) |
| dataZoom | 区域缩放 | [Object, Array] | [参考配置](http://echarts.baidu.com/option.html#dataZoom) |
| visualMap | 视觉映射 | [Object, Array] | [参考配置](http://echarts.baidu.com/option.html#visualMap) |
| tooltip | 提示框组件 | Object | [参考配置](http://echarts.baidu.com/option.html#tooltip) |
| axisPointer | 坐标轴指示器 | Object | [参考配置](http://echarts.baidu.com/option.html#axisPointer) |
| toolbox | 工具栏 | Object | [参考配置](http://echarts.baidu.com/option.html#toolbox) |
| brush | 区域选择组件 | Object | [参考配置](http://echarts.baidu.com/option.html#brush) |
| geo | 地理坐标系组件 | Object | [参考配置](http://echarts.baidu.com/option.html#geo) |
| timeline | 时间线组件 | Object | [参考配置](http://echarts.baidu.com/option.html#timeline) |
| graphic | 原生图形元素组件 | Object | [参考配置](http://echarts.baidu.com/option.html#graphic) |
| series | 系列列表 | [Object, Array] | [参考配置](http://echarts.baidu.com/option.html#series) |
| color | 调色盘组件 | Object | [参考配置](http://echarts.baidu.com/option.html#color) |
| backgroundColor | 背景色，默认无背景 | [Object, Array] | [参考配置](http://echarts.baidu.com/option.html#backgroundColor) |
| textStyle | 全局的字体样式 | Object | [参考配置](http://echarts.baidu.com/option.html#textStyle) |
| animation | 是否开启动画 | Object | [参考配置](http://echarts.baidu.com/option.html#animation) |
| --- | --- | --- | --- |

## 图表配置

[柱状图配置](https://gammafe.github.io/ve-charts/#/chart-bar)

[条形图配置]()

[折线图配置]()