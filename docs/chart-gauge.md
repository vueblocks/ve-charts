# 仪表盘

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/rqtLxsf2/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 基础仪表盘

<vuep template="#basicGuage" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicGuage">
<template>
  <ve-gauge-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '业务指标',
          data: [
            {
              name: '完成率',
              value: (Math.random() * 100).toFixed(2) - 0
            }
          ]
        }]
      }
    }
  }
</script>

## 仪表盘 - 文字

<vuep template="#fontGuage" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="fontGuage">
<template>
  <ve-gauge-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '业务指标',
          data: [
            {
              name: '完成率',
              value: (Math.random() * 100).toFixed(2) - 0
            }
          ]
        }]
      }
      this.chartSettings = {
        axisLabel: {
          formatter: (e) => {
            switch (e + '') {
              case '20':
                return '低'
              case '50':
                return '中'
              case '80':
                return '高'
            }
          }
        }
      }
    }
  }
</script>

## 仪表盘 - 改变配色

<vuep template="#colorGuage" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="colorGuage">
<template>
  <ve-gauge-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '业务指标',
          data: [
            {
              name: '完成率',
              value: (Math.random() * 100).toFixed(2) - 0
            }
          ]
        }]
      }
      this.chartSettings = {
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#5282e4'],
              [0.8, '#ffd600'],
              [1, '#f35352']
            ]
          }
        }
      }
    }
  }
</script>

## 仪表盘 - 半圆

<vuep template="#semicircleGuage" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="semicircleGuage">
<template>
  <ve-gauge-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '业务指标',
          data: [
            {
              name: '完成率',
              value: (Math.random() * 100).toFixed(2) - 0
            }
          ]
        }]
      }
      this.chartSettings = {
        startAngle: 180,
        endAngle: 0
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| measures | 仪表盘只需要度量即可渲染 | [Array, Object] |  | 

> Tip: 