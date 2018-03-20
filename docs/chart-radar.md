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
    	  offsetY: '40%',    // 圆心纵坐标
    	  radius: '50%',     // 图形半径
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
        splitNumber: 3,     // 分割段数
        shape: 'circle',    // 绘制为圆形
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

## 混合雷达图

> 覆盖 `radar`及`series` 属性。

<vuep template="#mixRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="mixRadar">
<template>
 <ve-radar-chart :radar="radar" :series="series" :data="data" :title="title" :backgroundcolor="'#333'"  />
</template>

<script>
 module.exports = {
    created () {
      this.data = { dimensions: [], measures: [] },  // 当前版本必须传递data
      this.title = { text: 'NST人格属性' };
      this.backgroundcolor = '#333';
      this.radar = [{
        indicator: [
          { text: '开创', max: 13 },
          { text: '变动', max: 13 },
          { text: '固定', max: 13 }],
        splitNumber: 1,
        center: ['50%', '40%'],
        name: {
          formatter: '{value}',
          textStyle:
           { fontSize: 20, color: '#fff' }
        },
        splitArea: {
          reaStyle: {
            color: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 40
          }
        },
        axisLine: { lineStyle: { color: 'rgba(255, 255, 255, 0)' } },
        splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.6)' } },
        radius: 170
      }, {
        indicator: [
          { text: '强化', max: 13 },
          { text: '和谐', max: 13 },
          { text: '压迫', max: 13 },
          { text: '冲突', max: 13 },
          { text: '阻滞', max: 13 },
          { text: '调和', max: 13 }],
        startAngle: 60,
        splitNumber: 1,
        center: ['50%', '40%'],
        name: {
          formatter: '{value}',
          textStyle: { fontSize: 16, color: 'rgba(255, 255, 255, 0.6)' }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 40
          }
        },
        axisLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.3)' } },
        splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.6)' } },
        radius: 210,
        center: ['50%', '40%']
      }];
      this.series = [{
        type: 'radar',
        tooltip: { trigger: 'item' },
        itemStyle: { normal: { areaStyle: { type: 'default' } } },
        data: [{ value: [9, 7, 7], name: '三型基本人格' }]
      }, {
        type: 'radar',
        tooltip: { trigger: 'item' },
        radarIndex: 1,
        data: [{
          value: [3, 6, 9, 6, 2, 10],
          name: '六型宇宙势能',
          symbol: 'rect',
          symbolSize: 5,
          lineStyle: { normal: { type: 'dashed', Color: '#fff' } }
        }]
      }]
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
| splitArea | 坐标轴在 grid 区域中的分隔区域，默认不显示 | Object | 参见[文档](http://echarts.baidu.com/option.html#radar.splitArea) |
| itemStyle | 图形样式 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-radar.itemStyle) |
