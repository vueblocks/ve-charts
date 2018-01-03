# 柱状图

## 示例

<iframe width="100%" height="450" src="//jsfiddle.net/xiaoluoboding/hryjek7j/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

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
    created: function() {
      this.chartData = {
        dimensions: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.'],
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
</script>

### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| --- | --- | --- | --- |

> Tip:
