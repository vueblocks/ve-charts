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
            { name: '完成率', value: random(10, 100) }
          ]
        }]
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| measures | 仪表盘只需要度量即可渲染 | [Array, Object] |  | 

> Tip: 