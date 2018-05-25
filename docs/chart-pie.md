# 饼图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/u9p0kvkq/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 基础饼图

<vuep template="#basicPie" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicPie">
<template>
  <ve-pie-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
    }
  }
</script>

## 选中饼图扇区

<vuep template="#selectedModePie" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="selectedModePie">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
      this.chartSettings = {
        selectedMode: 'single'
      }
    }
  }
</script>

## 南丁格尔玫瑰图（半径模式）

<vuep template="#radiusRose" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="radiusRose">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
      this.chartSettings = {
        roseType: 'radius',
        radius: [30, 110]
      }
    }
  }
</script>

## 南丁格尔玫瑰图（面积模式）

<vuep template="#areaRose" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="areaRose">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
      this.chartSettings = {
        roseType: 'area',
        radius: [30, 110]
      }
    }
  }
</script>

## 环饼图

<vuep template="#donutPie" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="donutPie">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = [{
        dimensions: {
          name: '渠道',
          data: ['移动设备', 'PC']
        },
        measures: [{
          name: 'PV',
          data: [150000, 90000]
        }]
      }, {
        dimensions: {
          name: '渠道',
          data: ['APP', 'M端', '微信', '手Q', '小程序', 'PC']
        },
        measures: [{
          name: 'PV',
          data: [40000, 30000, 20000, 50000, 10000, 90000]
        }]
      }]
      this.chartSettings = [{
        selectedMode: 'single',
        radius: [0, '30%'],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'inner'
          }
        }
      }, {
        selectedMode: 'single',
        radius: ['40%', '55%']
      }]
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| smooth | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-line.smooth) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`React`与`Angular`以`lang`堆叠 |
| roseType | 是否展示成南丁格尔图，通过半径区分数据大小。| Boolean, String | 参见[文档](http://echarts.baidu.com/option.html#series-pie.roseType) |
| offsetY | 饼图的中心（圆心）纵向坐标（Y轴偏移） | String | 支持设置为百分比，默认：'50%' |

> Tip: