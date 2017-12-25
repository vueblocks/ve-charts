# 柱状图

## 示例

<iframe width="100%" height="450" src="//jsfiddle.net/xiaoluoboding/hryjek7j/18/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 双y轴

<vuep template="#twoYaxis"></vuep>

<script v-pre type="text/x-template" id="twoYaxis">
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
        dimension: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        measure: [{
          name: '蒸发量',
          data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
        }, {
          name: '降水量',
          data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3]
        }]
      }
    }
  }
</script>
</script>


#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| --- | --- | --- | --- |

> Tip:
