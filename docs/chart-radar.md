# 雷达图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/hd1kmqnv/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 基础雷达图(线)

<vuep template="#basicLineRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicLineRadar">
<template>
 <ve-radar-chart :data="chartData" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { name: 'APP', max: 6000 },
          { name: 'PC', max: 16000 },
          { name: 'M端', max: 30000 },
          { name: '微信', max: 35000 },
          { name: '手Q', max: 50000 },
          { name: '小程序', max: 25000 }
        ],
        measures: [{name: '2018', data: [5000, 7000, 12000, 11000, 15000, 14000]}]
      }
    }
  }
</script>

## 基础雷达图(面积)

<vuep template="#basicAreaRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicAreaRadar">
<template>
 <ve-radar-chart :data="chartData" :legend="legend" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.legend = { show: false };
      this.settings = {
    	  itemStyle: { normal: { areaStyle: { type: 'default' } } }   // 面积
      };
      this.chartData = {
         dimensions: [
            { name: 'APP', max: 6000 },
            { name: 'PC', max: 16000 },
            { name: 'M端', max: 30000 },
            { name: '微信', max: 35000 },
            { name: '手Q', max: 50000 },
            { name: '小程序', max: 25000 }],
         measures: [{name: '2018', data: [5000, 7000, 12000, 11000, 15000, 14000]}]
      }
    }
  }
</script>

## 圆形雷达图

<vuep template="#circleRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="circleRadar">
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
        splitArea: {        // 底色
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.2)','rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)','rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        }
      };
      this.chartData = {
         dimensions: [
            { name: 'APP', max: 6000 },
            { name: 'PC', max: 16000 },
            { name: 'M端', max: 30000 },
            { name: '微信', max: 35000 },
            { name: '手Q', max: 50000 },
            { name: '小程序', max: 25000 }],
         measures: [{name: '2018', data: [5000, 7000, 12000, 11000, 15000, 14000]}]
      }
    }
  }
</script>

## 多雷达图

> 覆盖 `radar`及`series` 属性。

<vuep template="#multipleRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="multipleRadar">
<template>
 <ve-radar-chart :data="chartData" :radar="radar" :series="series" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = { dimensions: [], measures: [] },  // 当前版本必须传递data
      this.radar = [
        {
          indicator: [
            { text: '品牌', max: 100 },
            { text: '内容', max: 100 },
            { text: '可用性', max: 100 },
            { text: '功能', max: 100 }],
          center: ['25%','40%'],
          radius: 80
        }, {
          indicator: (function (){
            let res = [];
            for (let i = 1; i <= 12; i++)
              res.push({text:i+'月',max:100});
            return res;
          })(),
          center: ['75%','60%'],
          radius: 80
        }],
    this.series = [
    {
      type: 'radar',
      tooltip: { trigger: 'item' },
      itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: [{ name: 'X软件', value: [60,73,85,40] }]
    }, {
      type: 'radar',
      radarIndex: 1,
      itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: [{ name: '下载量', value: [26, 59, 90, 26, 28, 70, 75, 82, 48, 18, 6, 2] }]
    }]
 }
}
</script>

## 配置雷达图

<vuep template="#optionRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="optionRadar">
<template>
 <ve-radar-chart :data="chartData" :color="color" :background-color="backgroundColor"
                 :settings="settings" :series="series" :legend="legend" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  radius: '60%',      // 图形半径
    	  offsetY: '45%',     // 圆心纵坐标
    	  splitNumber: 8,     // 分割段数
    	  itemStyle: { normal: { areaStyle: { type: 'default' } } },   // 面积
    	  splitArea: {
    	    areaStyle: {
    	      color: 'rgba(127,95,132,.3)',
    	      opacity: 1,
    	      shadowBlur: 45,
    	      shadowColor: 'rgba(0,0,0,.5)',
    	      shadowOffsetX: 0,
            shadowOffsetY: 15
          }
        }
      };
      this.legend = { show: false };
      this.color = ['#ef4b4c', '#b1eadb'];
      this.backgroundColor = {
        type: 'radial',
        x: 0.5,
        y: 0.45,
        r: 0.5,
        colorStops: [
          { offset: 0, color: '#895355' }, // 0% 处的颜色
          { offset: .4, color: '#593640' }, // 100% 处的颜色
          { offset: 1, color: '#39273d' }] // 100% 处的颜色
      };
      this.series = [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [
            { name: '2018', value: [5000, 7000, 12000, 11000, 15000, 14000] },
            { name: '2017', value: [2500, 12000, 8000, 8500, 12000, 12000] }
          ]
      }],
      this.chartData = {
         dimensions: [
            { name: 'APP', max: 6000 },
            { name: 'PC', max: 16000 },
            { name: 'M端', max: 30000 },
            { name: '微信', max: 35000 },
            { name: '手Q', max: 50000 },
            { name: '小程序', max: 25000 }],
         measures: []
      }
    }
  }
</script>

## 混合雷达图

> 覆盖 `radar`及`series` 属性。

<vuep template="#mixRadar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="mixRadar">
<template>
 <ve-radar-chart :radar="radar" :series="series" :title="title" :background-color="backgroundColor"/>
</template>

<script>
 module.exports = {
    created () {
      this.title = { text: 'NST人格属性', textStyle: { color: '#fff' } };
      this.backgroundColor = {
        colorStops: [
          { offset: .1, color: '#39271e' },
          { offset: 1, color: '#333' }]
      };
      this.radar = [{
        indicator: [
          { text: '开创', max: 13 },
          { text: '变动', max: 13 },
          { text: '固定', max: 13 }],
        splitNumber: 1,
        center: ['50%', '55%'],
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
        radius: 100
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
        radius: 140,
        center: ['50%', '55%']
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
| offsetY | 圆心纵坐标。默认值为'50%' | String | 参见配置雷达图 |
| radius | 图形半径。默认值为'75%' | String | 参见配置雷达图 |
| splitNumber | 指示器轴的分割段数 | Number | 参见配置雷达图 |
| shape | 雷达图绘制类型。支持 'polygon' 和 'circle' | String | 参见圆形雷达图 |
| splitArea | 坐标轴在 grid 区域中的分隔区域，默认不显示 | Object | 参见圆形雷达图。具体配置项参考[文档](http://echarts.baidu.com/option.html#radar.splitArea) |
| itemStyle | 图形样式 | Object | 参见基础雷达图(面积)。具体配置项参考[文档](http://echarts.baidu.com/option.html#series-radar.itemStyle) |
