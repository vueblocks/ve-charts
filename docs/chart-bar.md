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
          sum: [
            'PV',
            'UV'
          ]
        }
      }
    }
  }
</script>

## 条形图

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

## 双向柱状图

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
        secondMeaAxis: 'Vue'
      }
    }
  }
</script>

## 折柱混合图

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
        secondMeaAxis: 'Vue',
        showLine: ['Vue'],
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
          name: '辅助',
          data: [0, 1700, 1400, 1200, 300, 0]
        }, {
          name: '生活费',
          data: [2900, 1200, 300, 200, 900, 300]
        }]
      }，
      this.chartSettings = {
        stack: {
          总量: ['生活费', '辅助']
        },
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold',
          position: 'inside'
        },
        waterfall: true,
        tooltipFormatter: function(params) {
          let tar = params[1]
          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value[2]
        }
      }
    }
  }
</script>

## 阶梯瀑布图

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
          name: '辅助',
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
      }，
      this.chartSettings = {
        stack: {
          总量: ['生活费', '辅助']
        },
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold',
          position: 'inside'
        },
        waterfall: true,
        tooltipFormatter: function (params) {
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
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| label | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`PV`与`UV`以`sum`堆叠，双向柱状图必填 |
| direction | 柱状图（条形图）柱子朝向，默认 `column` 为垂直柱子（柱状图） | String | `row` 为水平柱子（条形图） |
| showLine | 指定哪些度量（至少一个）用于折线展示 | Array | - |
| secondMeaAxis | 用于展示双Y轴，指定另一个度量作为第二个Y轴 | String | - |
| waterfall | 配置柱图为瀑布图类型 | Boolean | true开启瀑布图模式，使用瀑布图数据维度，必须包含一组辅助数据，并且数据name必须为'辅助' |
| tooltipFormatter | 配置tooltip提示框组件 | Function | 参见[文档](http://echarts.baidu.com/option.html#tooltip.formatter)  |

> Tip:
