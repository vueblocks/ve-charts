# 折线图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/udnhk7wm/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 基础折线图

<vuep template="#basicLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicLine">
<template>
  <ve-line-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [30, 40, 35, 50, 49, 70, 90]
        }]
      }
    }
  }
</script>

## 折线图设置 - 平滑曲线

<vuep template="#smoothLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="smoothLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [30, 40, 35, 50, 49, 70, 90]
        }]
      }
      this.chartSettings = {
        smooth: true
      }
    }
  }
</script>

## 区域折线图

<vuep template="#areaLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="areaLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        areaStyle: {}
      }
    }
  }
</script>

## 堆叠面积图

<vuep template="#stackLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="stackLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        stack: {
          lang: ['Vue', 'React', 'Angular']
        },
        areaStyle: {}
      }
    }
  }
</script>

## 百分比堆叠面积图

<vuep template="#percentageStackLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="percentageStackLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        stack: {
          lang: ['Vue', 'React', 'Angular']
        },
        areaStyle: {},
        yAxisLabelType: 'percentage',
        percentage: true,
        stack: {
          repo: [
            'Vue',
            'React',
            'Angular'
          ]
        },
        tooltipFormatter: function (params) {
          let [tar] = params
          const tooltipContent = params.map(v => {
            return `${v.seriesName}：${(
              v.value[v.seriesIndex + 1] * 100
            ).toFixed(2)} %`
          }).join('<br/>')
          return tar.name + '<br/>' + tooltipContent
        }
      }
    }
  }
</script>

## 阶梯折线图

<vuep template="#stepLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="stepLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        step: 'start'
      }
    }
  }
</script>

## 折线图设置 - 数据标签

<vuep template="#labelLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="labelLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        },
        smooth: true,
        yAxisLabelColor: 'rgba(209, 10, 220, 1)',
        xAxisLabelColor: 'rgba(14, 33, 237, 1)'
      }
    }
  }
</script>

## 折线图设置 - 刻度标签、轴线显隐

<vuep template="#axisShow" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="axisShow">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        },
        smooth: true,
        yAxisLabelShow: false,
        yAxisLineShow: false,
        xAxisLineShow: false
      }
    }
  }
</script>

## 折线图设置 - 格式化Y轴

<vuep template="#formatYLine" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="formatYLine">
<template>
  <ve-line-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      }
      this.chartSettings = {
        yAxisLabelType: 'zh'
      }
    }
  }
</script>

## 折线图 & markArea

<vuep template="#markArea" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="markArea">
<template>
  <ve-line-chart :legend-visible="false" v-bind="options" />
</template>

<script>
  module.exports = {
    created () {
      this.options = {
        title: {
          text: '一天用电量分布',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} W'
          },
          axisPointer: {
            snap: true
          }
        },
        series: [{
          name: '用电量',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            data: [
              [{
                name: '早高峰',
                xAxis: '07:30'
              }, {
                xAxis: '10:00'
              }],
              [{
                name: '晚高峰',
                xAxis: '17:30'
              }, {
                xAxis: '21:15'
              }]
            ]
          }
        }]
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 说明 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| smooth | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.smooth) |
| stack | 设置数据堆叠，区别于并排显示分类的分组折线图 | Object | - | 指定哪些度量堆叠展示，例如: 指定`React`与`Angular`以`lang`堆叠 |
| step | 阶梯线图配置 | String | `start`, `middle`, `end` | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.step) |
| label | 设置图形上的文本标签。| Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.label) |
| yAxisLabelType | 设置柱状图Y轴的标签格式化规则 | String | `en`、`zh`、`percentage` | `en` 英文数字规则；`zh` 中文数字规则；`percentage` 百分比 |
| yAxisLabelDigits | 设置柱状图Y轴标签格式化后保留几位小数，配合 `yAxisLabelType` 使用 | Number | 0 ~ 20 | 默认值为 0 |
| yAxisInterval | 强制设置坐标轴分割间隔 | Number | - |参见[文档](https://www.echartsjs.com/option.html#yAxis.inverse) |
| yAxisMax | 坐标轴刻度最大值 | Number | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.max) |
| yAxisMin | 坐标轴刻度最小值 | Number | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.min) |
| yAxisScale | 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度 | Boolean | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.scale)  |
| yAxisName | 坐标轴名称 | String | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.name)  |
| xAxisName | 坐标轴名称 | String | - | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.name)  |
| percentage | 是否是百分比堆叠面积图，通常结合 `yAxisLabelType` 一起使用 | Boolean | `true`/`false` | 默认 `false`  |
| tooltipOptions | 配置tooltip提示框组件 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#tooltip)  |
| legendOptions | 配置图例组件 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#legend)  |
| yAxisLabelShow | 纵坐标轴刻度标签显隐| Boolean | `true`/`false`| 默认 `true` |
| yAxisLabelColor | 纵坐标轴刻度标签文字颜色| String | - | 默认 null |
| yAxisLineShow | 纵坐标轴轴线显隐| Boolean | `true`/`false`| 默认 `true` |
| xAxisLabelShow | 横坐标轴刻度标签显隐| Boolean | `true`/`false`| 默认 `true` |
| xAxisLabelColor | 横坐标轴刻度标签文字颜色| String | - | 默认 null |
| xAxisLineShow | 横坐标轴轴线显隐| Boolean | `true`/`false`| 默认 `true` |
| xAxisInverse | X轴方向反向| Boolean | `true`/`false` | 默认 `false`  参见[文档](https://www.echartsjs.com/zh/option.html#xAxis.inverse) |
| yAxisInverse | Y轴方向反向| Boolean | `true`/`false` | 默认 `false`   参见[文档](https://www.echartsjs.com/zh/option.html#yAxis.inverse) |

