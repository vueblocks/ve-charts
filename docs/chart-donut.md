# 环形图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/ntnmap48/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


### 基础环形图

<vuep template="#basicDonut"></vuep>

<script v-pre type="text/x-template" id="basicDonut">
<template>
  <ve-donut-chart :data="chartData" />
</template>

<script>
 module.exports = {
    components: {
    	VeDonutChart: window['ve-charts'].default.VeDonutChart
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

### 环形图 - 选中扇区

<vuep template="#selectedModeDonut"></vuep>

<script v-pre type="text/x-template" id="selectedModeDonut">
<template>
  <ve-donut-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeDonutChart: window['ve-charts'].default.VeDonutChart
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

### 环形图 - 半径设置

<vuep template="#radiusDonut"></vuep>

<script v-pre type="text/x-template" id="radiusDonut">
<template>
  <ve-donut-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeDonutChart: window['ve-charts'].default.VeDonutChart
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
        radius: ['35%', '55%']
      }
    }
  }
</script>

### 环形图 - 中心显示标签

<vuep template="#labelCenterDonut"></vuep>

<script v-pre type="text/x-template" id="labelCenterDonut">
<template>
  <ve-donut-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeDonutChart: window['ve-charts'].default.VeDonutChart
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
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '24',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        }
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