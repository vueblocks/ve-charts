# 柱状图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/ydkyhjv6/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 基础柱状图

<vuep template="#basicBar"></vuep>

<script v-pre type="text/x-template" id="basicBar">
<template>
  <ve-bar-chart :data="chartData" />
</template>

<script>
 module.exports = {
    components: {
    	VeBarChart: window['ve-charts'].default.VeBarChart
  	},
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'pv',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }]
      }
    }
  }
</script>

### 分组柱状图

<vuep template="#groupBar"></vuep>

<script v-pre type="text/x-template" id="groupBar">
<template>
  <ve-bar-chart :data="chartData" />
</template>

<script>
 module.exports = {
    components: {
    	VeBarChart: window['ve-charts'].default.VeBarChart
  	},
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
    }
  }
</script>

### 堆叠柱状图

<vuep template="#stackBar"></vuep>

<script v-pre type="text/x-template" id="stackBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeBarChart: window['ve-charts'].default.VeBarChart
  	},
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
        stack: {
          量级: [
            'pv',
            'uv'
          ]
        }
      }
    }
  }
</script>

### 阶梯瀑布图

### 折柱混合图

### 正负柱状图

### 显示文本标签

<vuep template="#labelBar"></vuep>

<script v-pre type="text/x-template" id="labelBar">
<template>
  <ve-bar-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeBarChart: window['ve-charts'].default.VeBarChart
  	},
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
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }
    }
  }
</script>

</script>

### settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| label | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`pv`与`uv`以`量级`堆叠 |

> Tip:
