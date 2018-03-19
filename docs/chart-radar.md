# 雷达图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/hd1kmqnv/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 基础雷达图(面积)

<vuep template="#basicRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicRadar">
<template>
 <ve-radar-chart :data="chartData" :legend="legend" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.legend = { show: false };
      this.settings = {
    	  offsetY: '40%',
    	  radius: '50%',
    	  itemStyle: {
    	    normal: {
    	      areaStyle: {
    	        type: 'default'
    	      }
    	    }
        }
      };
      this.chartData = {
        dimensions: [
          { name: 'APP', max: 6500 },
          { name: 'PC', max: 16000 },
          { name: 'M端', max: 30000 },
          { name: '微信', max: 38000 },
          { name: '手Q', max: 52000 },
          { name: '小程序', max: 25000 }
        ],
        measures: [
         {name: '2018', data: [4300, 10000, 28000, 35000, 50000, 19000]},
         {name: '2017', data: [5000, 14000, 28000, 31000, 42000, 21000]}
        ]
      }
    }
  }
</script>

## 自定义形状雷达图

<vuep template="#specialShapeRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="specialShapeRadar">
<template>
 <ve-radar-chart :data="chartData" :legend="legend" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.legend = { show: false };
      this.settings = {
        radius: 120,
        splitNumber: 4,
        shape: 'circle',
        splitArea: {
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.2)','rgba(114, 172, 209, 0.4)',
                    'rgba(114, 172, 209, 0.6)','rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        }
      };
      this.chartData = {
        dimensions: [
          { name: 'APP', max: 20000 },
          { name: 'PC', max: 20000 },
          { name: 'M端', max: 20000 },
          { name: '微信', max: 20000 },
          { name: '手Q', max: 20000 },
          { name: '小程序', max: 20000 }
        ],
        measures: [
          { name: '2018', data: [17000, 17000, 17000, 17000, 17000, 17000] }
        ]
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| offsetY | 圆心纵坐标。默认值为'50%' | String | 参见基础雷达图 |
| radius | 图形半径。默认值为'75%' | String | 参见基础雷达图 |
| splitNumber | 指示器轴的分割段数 | Number | 参见自定义形状雷达图 |
| shape | 雷达图绘制类型。支持 'polygon' 和 'circle' | String | 参见自定义形状雷达图 |
| splitArea | 坐标轴在 grid 区域中的分隔区域，默认不显示 | Object | 参加[文档](http://echarts.baidu.com/option.html#radar.splitArea) |
| itemStyle | 图形样式 | Object | 参加[文档](http://echarts.baidu.com/option.html#series-radar.itemStyle) |
