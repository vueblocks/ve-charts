# 饼图

## 示例

<iframe width="100%" height="480" src="//jsfiddle.net/vecharts/udnhk7wm/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


### 基础饼图

<vuep template="#basicPie"></vuep>

<script v-pre type="text/x-template" id="basicPie">
<template>
  <ve-pie-chart :data="chartData" />
</template>

<script>
 module.exports = {
    components: {
    	VePieChart: window['ve-charts'].default.VePieChart
  	},
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

### 选中饼图扇区

<vuep template="#selectedModePie"></vuep>

<script v-pre type="text/x-template" id="selectedModePie">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VePieChart: window['ve-charts'].default.VePieChart
  	},
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

### 南丁格尔玫瑰图（半径模式）

<vuep template="#radiusRose"></vuep>

<script v-pre type="text/x-template" id="radiusRose">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VePieChart: window['ve-charts'].default.VePieChart
  	},
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

### 南丁格尔玫瑰图（面积模式）

<vuep template="#areaRose"></vuep>

<script v-pre type="text/x-template" id="areaRose">
<template>
  <ve-pie-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VePieChart: window['ve-charts'].default.VePieChart
  	},
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

### settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| smooth | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-line.smooth) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`React`与`Angular`以`lang`堆叠 |

> Tip: