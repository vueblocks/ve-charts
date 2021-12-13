# 柱状图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/ydkyhjv6/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 基础柱状图

<vuep template="#basicBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicBar">
<template>
  <ve-bar-chart :data="chartData" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }]
      }
    }
  }
</script>

## 分组柱状图

> 多个度量构成分组柱状图，用于展示各个分类下的不同分组

<vuep template="#groupBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="groupBar">
<template>
  <ve-bar-chart :data="chartData" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'UV',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
    }
  }
</script>

## 堆叠柱状图

> 配置需要堆叠的度量，下例为将不同分组下的 `PV`、`UV` 堆叠

<vuep template="#stackBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="stackBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'UV',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
      this.chartSettings = {
        stack: {
          sum: [ 'PV', 'UV' ]
        }
      }
    }
  }
</script>

## 百分比堆叠柱状图

> 堆叠柱状图基础上配置 `percentage` 为 `true` 开启百分比模式，指定 `Y` 轴标签格式化为百分比

<vuep template="#stackPercentBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="stackPercentBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'UV',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
      this.chartSettings = {
        stack: {
          sum: [ 'PV', 'UV' ]
        },
        // 开启百分比模式
        percentage: true,
        // 设置Y轴数字标签格式
        yAxisLabelType: ['percentage'],
        tooltipOptions: {
          formatter: function(params) {
            let [tar] = params
            const tooltipContent = params
              .map(v => {
                return `${v.seriesName}：${(
                  v.value[v.seriesIndex + 1] * 100
                ).toFixed(2)} %`
              })
              .join('<br/>')
            return tar.name + '<br/>' + tooltipContent
          }
        }
      }
    }
  }
</script>

## 条形图

> 配置 `direction` 为 `row`，表示将柱状图的柱子横置，得到条形图，又可理解为将坐标系 x 轴和 y 轴转置

<vuep template="#rowBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rowBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Repo',
          data: [
            'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
            'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
          ].reverse()
        },
        measures: [{
          name: 'Rising Star',
          data: [40000, 27800, 22500, 22000, 21900, 20200, 17700, 15600, 14900, 14800].reverse()
        }]
      }
      this.chartSettings = {
        direction: 'row'
      }
    }
  }
</script>

## 分组条形图

<vuep template="#rowGroupBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rowGroupBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序'].reverse()
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000].reverse()
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000].reverse()
        }]
      }
      this.chartSettings = {
        direction: 'row'
      }
    }
  }
</script>

## 设置坐标轴刻度标签和轴线显隐

<vuep template="#setAxisBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="setAxisBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序'].reverse()
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000].reverse()
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000].reverse()
        }]
      }
      this.chartSettings = {
        direction: 'row',
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        },
        xAxisLabelShow: false,
        xAxisLineShow: false,
        yAxisLabelShow: true,
        yAxisLineShow: false
      }
    }
  }
</script>

## 对比条形图

<vuep template="#rowGroupBarCop" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rowGroupBarCop" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序'].reverse()
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000].reverse()
        }, {
          name: 'UV',
          data: [-28000, -22000, -18000, -14000, -8000, -2000].reverse()
        }]
      }
      this.chartSettings = {
        direction: 'row',
        stack: {
          sum: ['PV', 'UV']
        }
      }
    }
  }
</script>

## 堆叠条形图

<vuep template="#rowStackBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rowStackBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序'].reverse()
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000].reverse()
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000].reverse()
        }]
      }
      this.chartSettings = {
        direction: 'row',
        stack: {
          sum: ['PV', 'UV']
        }
      }
    }
  }
</script>

## 百分比堆叠条形图

<vuep template="#rowStackPercentBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="rowStackPercentBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'UV',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
      this.chartSettings = {
        direction: 'row',
        stack: {
          sum: [ 'PV', 'UV' ]
        },
        // 开启百分比堆叠图模式
        percentage: true,
        // 设置X轴数字标签格式
        xAxisLabelType: ['percentage'],
        tooltipOptions: {
          formatter: function(params) {
            let [tar] = params
            const tooltipContent = params
              .map(v => {
                return `${v.seriesName}：${(
                  v.value[v.seriesIndex + 1] * 100
                ).toFixed(2)} %`
              })
              .join('<br/>')
            return tar.name + '<br/>' + tooltipContent
          }
        }
      }
    }
  }
</script>

## 双向柱状图

> 堆叠图基础上，基于数据，正数在0刻度之上，负数在0刻度之下。

<vuep template="#biDirBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="biDirBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: '收入',
          data: [320, 100, 200, 270, 320, 250, 360]
        },
        {
          name: '支出',
          data: [-120, -132, -100, -130, -300, -230, -360]
        }]
      }
      this.chartSettings = {
        stack: {
          总量: ['收入', '支出']
        },
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold',
          position: 'inside'
        }
      }
    }
  }
</script>

## 双Y轴柱状图

> 配置 `secondMeaAxis` 参数，指定一个度量为第二个Y轴（即右侧Y轴），余下度量为左侧Y轴

<vuep template="#doubleYBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="doubleYBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Month',
          data: [
            'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
            'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
          ]
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        }]
      }
      this.chartSettings = {
        secondMeaAxis: 'Vue',
        yAxisLabelColor: ['rgba(209, 10, 220, 1)', 'rgba(247, 14, 6, 1)'],
        xAxisLabelColor: 'rgba(14, 33, 237, 1)'
      }
    }
  }
</script>

## 双Y轴折柱混合图，线图百分比显示

> 配置 `secondMeaAxis` 参数，指定一个度量为第二个Y轴（即右侧Y轴），余下度量为左侧Y轴。
  配置 `showLine` 参数，指定一个度量显示为线图。
  配置 `yAxisLabelType` 参数，指定一个度量显示为百分比

<vuep template="#doubleYBarPercent" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="doubleYBarPercent" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Month',
          data: [
            'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
            'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
          ]
        },
        measures: [{
          name: 'Vue',
          data: [2000, 2500, 2100, 2000, 2200, 2100, 2600, 2300, 2600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [0.91, 0.83, 0.71, 0.84, 0.93, 0.75, 0.87, 0.83, 0.95, 0.82, 0.86, 0.88]
        }]
      }
      this.chartSettings = {
        secondMeaAxis: 'React',
        showLine: ['React'],
        yAxisLabelType: ['','percentage'],
      }
    }
  }
</script>

## 折柱混合图

> 配置 `showLine` 参数，指定需要显示为折线的一个或多个度量

<vuep template="#mixinBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="mixinBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Month',
          data: [
            'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
            'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
          ]
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        }]
      }
      this.chartSettings = {
        showLine: ['Vue']
      }
    }
  }
</script>

## 显示文本标签

<vuep template="#labelBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="labelBar" />
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
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
          name: 'pv',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'uv',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
      this.chartSettings = {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        }
      }
    }
  }
</script>

## 瀑布图

> 堆叠柱状图基础之上，配置 `waterfall` 为 `true`，开启瀑布图模式，将 `secondaryMeasure` 作为辅助度量

<vuep template="#waterfallBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="waterfallBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '费用',
          data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
        },
        measures: [{
          name: 'secondaryMeasure',
          data: [0, 1700, 1400, 1200, 300, 0]
        }, {
          name: '生活费',
          data: [2900, 1200, 300, 200, 900, 300]
        }]
      },
      this.chartSettings = {
        stack: {
          总量: ['生活费', 'secondaryMeasure']
        },
        label: [{
          name: '生活费',
          show: true,
          fontWeight: 'bold',
          position: 'inside'
        }],
        waterfall: true,
        tooltipOptions: {
          formatter: function(params) {
            let tar = params[1]
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value[2]
          }
        }
      }
    }
  }
</script>

## 阶梯瀑布图

> 堆叠柱状图基础之上，配置 `waterfall` 为 `true`，开启瀑布图模式，将 `secondaryMeasure` 作为辅助度量

<vuep template="#waterfallLadderBar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="waterfallLadderBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '日期',
          data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', '11月11日']
        },
        measures: [{
          name: 'secondaryMeasure',
          data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
          name: '收入',
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
          name: '支出',
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }]
      },
      this.chartSettings = {
        stack: {
          总量: ['secondaryMeasure', '收入', '支出']
        },
        label: [{
          name: '收入',
          show: true,
          position: 'top'
        }, {
          name: '支出',
          show: true,
          position: 'bottom'
        }],
        waterfall: true,
        tooltipOptions: {
          formatter: function (params) {
            let tar
            if (params[1].value[2] !== '-') {
              tar = params[1]
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value[2]
            } else {
              tar = params[2]
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value[3]
            }
          }
        }
      }
    }
  }
</script>

## 图表标线&图表标域

<vuep template="#markLineAndArea" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="markLineAndArea">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
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
          name: 'PV',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }]
      }
      this.chartSettings = {
        markLine: {
          symbolSize: 5,
          data: [
            {
              name: '参考线',
              yAxis: '2000',
              label: {
                show: true,
                position: 'insideEndBottom',
                formatter: '{b}: {c}'
              },
              lineStyle: {
                width: 1,
                type: 'dashed'
              }
            }
          ]
        },
        markArea: {
          data: [
            [{ name: '坐标区域', coord: [0, 0]},{ coord: [6, 1400] }]
          ]
        }
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 说明 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| direction | 柱状图/条形图柱子朝向 | String | `column`、`row` | 默认 `column` 为垂直柱子（柱状图)；`row` 为水平柱子（条形图）|
| label | 设置图形上的文本标签。| Object/Array | - | 传值`Object` 适用于同时设置多个度量为统一的label；传值`Array`适用于多个度量设置不同的label。示例区别参见 **显示文本标签** 与 **阶梯瀑布图** |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | - | 指定哪些度量堆叠展示，例如: 指定`PV`与`UV`以`sum`堆叠，双向柱状图必填 |
| showLine | 指定哪些度量（至少一个）用于折线展示 | Array | - | - |
| secondMeaAxis | 用于展示双Y轴，指定哪些度量（至少一个）作为第二个Y轴 | Array | - | - |
| yAxisLabelType | 设置柱状图Y轴的标签格式化规则 | Array | `en`、`zh`、`percentage` | `en` 英文数字规则；`zh` 中文数字规则；`percentage` 百分比 |
| yAxisLabelDigits | 设置柱状图Y轴标签格式化后保留几位小数，配合 `yAxisLabelType` 使用 | Number/Array | 0 ~ 20 | 默认值为 0 |
| waterfall | 配置柱图为瀑布图类型 | Boolean | `true` or `false` | 瀑布图的数据维度中，须包含一组名为 `secondaryMeasure` 的辅助度量|
| tooltipOptions | 配置tooltip提示框组件 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#tooltip)  |
| legendOptions | 配置图例组件 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#legend)  |
| yAxisInterval | 强制设置坐标轴分割间隔 | Array | - |参见[文档](https://www.echartsjs.com/option.html#yAxis.inverse) |
| yAxisMax | 坐标轴刻度最大值 | Array | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.max) |
| yAxisMin | 坐标轴刻度最小值 | Array | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.min) |
| yAxisScale | 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度 | Boolean | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.scale)  |
| yAxisName | 坐标轴名称 | Array | - | 参见[文档](https://www.echartsjs.com/option.html#yAxis.name)  |
| xAxisName | 坐标轴名称 | String | - | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.name)  |
| percentage | 是否是百分比堆叠柱状图，通常结合 `yAxisLabelType` 一起使用 | Boolean | `true`/`false` | 默认 `false`  |
| xAxisInverse | X轴方向反向| Boolean | `true`/`false` | 默认 `false`  参见[文档](https://www.echartsjs.com/zh/option.html#xAxis.inverse) |
| yAxisInverse | Y轴方向反向| Boolean/Array | `true`/`false` | 默认 `false`   参见[文档](https://www.echartsjs.com/zh/option.html#yAxis.inverse) |
| yAxisLabelShow | 纵坐标轴刻度标签显隐| Boolean/Array | `true`/`false`| 默认 `true` |
| yAxisLabelColor | 横坐标轴刻度标签文字颜色| String | - | 默认 null |
| yAxisLineShow | 纵坐标轴轴线显隐| Boolean/Array | `true`/`false`| 默认 `true` |
| yAxisLabelRotate | 纵坐标轴刻度标签旋转角度| Number | -90度到90度 | 默认 0 | https://echarts.apache.org/zh/option.html#yAxis.axisLabel.rotate |
| xAxisLabelShow | 横坐标轴刻度标签显隐| Boolean | `true`/`false`| 默认 `true` |
| xAxisLabelColor | 横坐标轴刻度标签文字颜色| String | - | 默认 null |
| xAxisLineShow | 横坐标轴轴线显隐| Boolean | `true`/`false`| 默认 `true` |
| xAxisSplitLine | 坐标轴分隔线| Object | - | 默认不显示 | https://echarts.apache.org/zh/option.html#xAxis.splitLine |
| markLine | 图表标线 | Object | - | 参见[文档](https://echarts.apache.org/v4/zh/option.html#series-line.markLine) |
| markArea | 图表标域 | Object | - | 参见[文档](https://echarts.apache.org/v4/zh/option.html#series-line.markArea) |
| xAxisLabelRotate | 横坐标轴刻度标签旋转角度| Number | -90度到90度 | 默认 0 | https://echarts.apache.org/zh/option.html#xAxis.axisLabel.rotate |
| yAxisPointerType | 纵坐标指示器类型 | String | `line`/`shadow`/`none` | 参见[文档](https://echarts.apache.org/v4/zh/option.html#axisPointer.type) |
