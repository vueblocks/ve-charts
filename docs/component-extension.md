# 组件扩展

## 柱图悬浮饼图

<vuep class="barpie" template="#componentExtension" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="componentExtension">
<template>
  <ve-barpie-chart :data="chartData" :settings="chartSettings"/>
</template>

<script>
 module.exports = {
    created () {

      this.chartData = {
        dimensions: {
        name: 'date',
        data: [
          '2023-11-29',
          '2023-12-02',
          '2023-12-03',
          '2023-12-04',
          '2023-12-05',
          '2023-12-06',
          '2023-12-07',
          '2023-12-08'
        ]
      },
        measures: [
        {
          name: '覆盖量',
          data: [
            301655111,
            736627221,
            136826493,
            301655111,
            236627217,
            536825646,
            201655118,
            436627221
          ]
        }
      ],
      childData: [
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ],
        [
      {
        'name': '6-2123314413414314314',
        'value': 58651984,
        'icon': '',
      },
      {
        'name': '65-1',
        'value': 37555584,
        'icon': '',
      },
      {
        'name': '86-2',
        'value': 7048795,
        'icon': '',
      },
      {
        'name': '8-2',
        'value': 6773539
      },
      {
        'name': '84-1',
        'value': 6762250,
      },
      {
        'name': '12-1',
        'value': 6450529
      },
      {
        'name': '6-1',
        'value': 6207719
      },
      {
        'name': '86-1',
        'value': 5738955
      },
      {
        'name': '79-1',
        'value': 5336847
      },
      {
        'name': '123-2',
        'value': 5005122
      },
      {
        'name': '67-2',
        'value': 4793557
      },
      {
        'name': '943-1',
        'value': 4767534
      },
      {
        'name': '314-1',
        'value': 4584135
      },
      {
        'name': '975-1',
        'value': 4546914
      },
      {
        'name': '97-1',
        'value': 4546762
      },
      {
        'name': '974-2',
        'value': 4444055
      },
      {
        'name': '6-3',
        'value': 4433385
      },
      {
        'name': '690-2',
        'value': 4169060
      },
      {
        'name': '90-2',
        'value': 4152653
      },
      {
        'name': '878-1',
        'value': 3881443
      }
    ]
      ]
      },
      this.chartSettings = {
        color: '#426fff',
        label: {
          show: true
        },
        xAxisLabelRotate: '-70',
        childSetting: {
          series: {
            center: ['20%', '50%']
          },
          legend: {
            show: true
          },
          color: ['#426fff', '#40adff', '#3fdace', '#18bdb0', '#ffda3e', '#ffa900', '#83dd89', '#bedf65', '#956bfd', '#f67bb2'],
          toFix: 3,
          contentSize: {
            width: '500px',
            height: '200px'
          },
          legendShow: {
            value: true,
            percent: true
          }
        }
      }
    }
  }
</script>

## data 配置项
> 柱图数据量不要超过`30组`，否则可能会失真

| 配置项       | 说明              | 类型                     | 可选值  | 用法 |
|-----------|-----------------|------------------------|------|--|
|    dimensions     | 维度              | Object                 | -    | 同柱图配置 |
|    measures       | 度量              | Array                  | -    | 同柱图配置 |
|    childData     | 悬浮图数据          | Array<`listItem`>                  | - | 一个数组对象，用于初始化，具体参见下面 |

### `listItem` 配置项

| 配置项                | 说明              | 类型                     | 可选值  | 用法 |
|-----------|-----------------|------------------------|------|--|
|    name        | 名称              | String                 | -    | 每一项数据的名称 |
|    value       | 数据              | String/Number                  | -    | 每一项数据的值 |
|    icon        |      展示图标           |         String        | `circle`, `rect`, `roundRect`, `triangle`, `diamond`, `pin`, `arrow`, `none` | 每一项数据的展示图标，**默认`circle`** ，参见[文档](https://echarts.apache.org/zh/option.html#legend.icon) |

## settings 配置项
> 悬浮框中的展示内容：`contentSize`、`legendShow`、`series的center`属性可配合使用，实现更好的交互

| 配置项              | 说明                                                          | 类型 | 可选值                     | 用法                                                                                               |
|------------------|-------------------------------------------------------------| --- |-------------------------|--------------------------------------------------------------------------------------------------|
| childSetting     | 设置悬浮饼图配置                                                    | Object | -                       | 参见[文档](https://echarts.apache.org/zh/option.html#title)                                          |
| toFix            | 设置悬浮图右侧legend展示占比的浮点型保留位数                                   | Number | `1`/`2`/`3`             | 配置在`childSetting`对象，**默认`2`**                                                                    |
| contentSize      | 设置悬浮框的尺寸                                                    | Object | -                       | 配置在`childSetting`对象，传值配置悬浮框的尺寸，**默认`width:500px;height:200px;`**                                 |
| legendShow       | 设置悬浮图legend内容展示列，包括名称、值、占比                                  | Object | `true`/`false`          | 配置在`childSetting`对象，配置悬浮框内饼图的`legend`展示列`name`默认展示，`value`和`percent`动态控制，可配合设置悬浮框展示宽度，**默认全部展示** |
| series           | 设置悬浮图的series属性，其中center设置悬浮图定位，可用百分比设置居中、偏左偏右               | Object | - | 配置在`childSetting`对象中，参见[文档](https://echarts.apache.org/zh/option.html#series-pie)                |
| legend           | 设置悬浮图的legend属性，当设置show为false时，可以配合contentSize设置悬浮框尺寸，达到更好效果 | Object | - | 配置在`childSetting`对象中，参见[文档](https://echarts.apache.org/zh/option.html#legend)                    |
| direction        | 柱状图/条形图柱子朝向                                                 | String | `column`、`row`         | 默认 `column` 为垂直柱子（柱状图)；`row` 为水平柱子（条形图）                                                          |
| label            | 设置图形上的文本标签。                                                 | Object/Array | -                       | 传值`Object` 适用于同时设置多个度量为统一的label；传值`Array`适用于多个度量设置不同的label。示例区别参见 **显示文本标签** 与 **阶梯瀑布图**         |
| stack            | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况           | Object | -                       | 指定哪些度量堆叠展示，例如: 指定`PV`与`UV`以`sum`堆叠，双向柱状图必填                                                       |
| showLine         | 指定哪些度量（至少一个）用于折线展示                                         | Array | -                       | -                                                                                                |
| secondMeaAxis    | 用于展示双Y轴，指定哪些度量（至少一个）作为第二个Y轴                                | Array | -                       | -                                                                                                |
| yAxisLabelType   | 设置柱状图Y轴的标签格式化规则                                            | Array | `en`、`zh`、`percentage` | `en` 英文数字规则；`zh` 中文数字规则；`percentage` 百分比                                                       |
| yAxisLabelDigits | 设置柱状图Y轴标签格式化后保留几位小数，配合 `yAxisLabelType` 使用                | Number/Array | 0 ~ 20                  | 默认值为 0                                                                                           |
| waterfall        | 配置柱图为瀑布图类型                                                  | Boolean | `true` or `false`       | 瀑布图的数据维度中，须包含一组名为 `secondaryMeasure` 的辅助度量                                                       |
| tooltipOptions   | 配置tooltip提示框组件                                              | Object | -                       | 参见[文档](https://echarts.apache.org/zh/option.html#tooltip)                                        |
| legendOptions    | 配置图例组件                                                      | Object | -                       | 参见[文档](https://echarts.apache.org/zh/option.html#legend)                                         |
| yAxisInterval    | 强制设置坐标轴分割间隔                                                 | Array | -                       | 参见[文档](https://www.echartsjs.com/option.html#yAxis.inverse)                                      |
| yAxisMax         | 坐标轴刻度最大值                                                    | Array | -                       | 参见[文档](https://www.echartsjs.com/option.html#yAxis.max)                                          |
| yAxisMin         | 坐标轴刻度最小值                                                    | Array | -                       | 参见[文档](https://www.echartsjs.com/option.html#yAxis.min)                                          |
| yAxisScale       | 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度                         | Boolean | -                       | 参见[文档](https://www.echartsjs.com/option.html#yAxis.scale)                                        |
| yAxisName        | 坐标轴名称                                                       | Array | -                       | 参见[文档](https://www.echartsjs.com/option.html#yAxis.name)                                         |
| xAxisName        | 坐标轴名称                                                       | String | -                       | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.name)                                     |
| percentage       | 是否是百分比堆叠柱状图，通常结合 `yAxisLabelType` 一起使用                      | Boolean | `true`/`false`          | 默认 `false`                                                                                       |
| xAxisInverse     | X轴方向反向                                                      | Boolean | `true`/`false`          | 默认 `false`  参见[文档](https://www.echartsjs.com/zh/option.html#xAxis.inverse)                       |
| yAxisInverse     | Y轴方向反向                                                      | Boolean/Array | `true`/`false`          | 默认 `false`   参见[文档](https://www.echartsjs.com/zh/option.html#yAxis.inverse)                      |
| yAxisLabelShow   | 纵坐标轴刻度标签显隐                                                  | Boolean/Array | `true`/`false`          | 默认 `true`                                                                                        |
| yAxisLabelColor  | 横坐标轴刻度标签文字颜色                                                | String | -                       | 默认 null                                                                                          |
| yAxisLineShow    | 纵坐标轴轴线显隐                                                    | Boolean/Array | `true`/`false`          | 默认 `true`                                                                                        |
| yAxisLabelRotate | 纵坐标轴刻度标签旋转角度                                                | Number | -90度到90度                | 默认 0                                                                                             | https://echarts.apache.org/zh/option.html#yAxis.axisLabel.rotate |
| xAxisLabelShow   | 横坐标轴刻度标签显隐                                                  | Boolean | `true`/`false`          | 默认 `true`                                                                                        |
| xAxisLabelColor  | 横坐标轴刻度标签文字颜色                                                | String | -                       | 默认 null                                                                                          |
| xAxisLineShow    | 横坐标轴轴线显隐                                                    | Boolean | `true`/`false`          | 默认 `true`                                                                                        |
| xAxisSplitLine   | 坐标轴分隔线                                                      | Object | -                       | 默认不显示                                                                                            | https://echarts.apache.org/zh/option.html#xAxis.splitLine |
| markLine         | 图表标线                                                        | Object | -                       | 参见[文档](https://echarts.apache.org/v4/zh/option.html#series-line.markLine)                        |
| markArea         | 图表标域                                                        | Object | -                       | 参见[文档](https://echarts.apache.org/v4/zh/option.html#series-line.markArea)                        |
| xAxisLabelRotate | 横坐标轴刻度标签旋转角度                                                | Number | -90度到90度                | 默认 0                                                                                             | https://echarts.apache.org/zh/option.html#xAxis.axisLabel.rotate |
| yAxisPointerType | 纵坐标指示器类型                                                    | String | `line`/`shadow`/`none`  | 参见[文档](https://echarts.apache.org/v4/zh/option.html#axisPointer.type)                            |
