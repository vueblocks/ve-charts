# 矩形树图

## 基础矩形树图

<vuep template="#basicTreemap" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicTreemap">
<template>
  <ve-treemap-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '分类 1',
          value: 560
        }, {
          name: '分类 2',
          value: 500
        }, {
          name: '分类 3',
          value: 300
        }, {
          name: '分类 4',
          value: 150
        }, {
          name: '分类 5',
          value: 115
        }, {
          name: '分类 6',
          value: 95
        }, {
          name: '分类 7',
          value: 90
        }, {
          name: '分类 8',
          value: 75
        }, {
          name: '分类 9',
          value: 66
        }, {
          name: '分类 10',
          value: 52
        }]
      }
    }
  }
</script>

## 矩形树图 - 二级下钻

<vuep template="#level2Treemap" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="level2Treemap">
<template>
  <ve-treemap-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: '一级分类',
          children: [{
            name: '分类 1',
            value: 560
          }, {
            name: '分类 2',
            value: 500
          }, {
            name: '分类 3',
            value: 300
          }, {
            name: '分类 4',
            value: 150
          }, {
            name: '分类 5',
            value: 115
          }, {
            name: '分类 6',
            value: 95
          }, {
            name: '分类 7',
            value: 90
          }, {
            name: '分类 8',
            value: 75
          }, {
            name: '分类 9',
            value: 66
          }, {
            name: '分类 10',
            value: 52
          }]
        }]
      }
      this.chartSettings = {
        leafDepth: 1
      }
    }
  }
</script>

## 矩形树图 - 设置项

<vuep template="#settingTreemap" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="settingTreemap">
<template>
  <ve-treemap-chart :data="chartData" :settings="chartSettings" :title="title" :tooltip="tooltip" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: 'element-ui',
          value: 540
        }, {
          name: 'echarts',
          value: 320
        }, {
          name: 'zrender',
          value: 132
        }, {
          name: 'vue',
          value: 84
        }, {
          name: 'lodash',
          value: 68
        }, {
          name: 'moment',
          value: 52
        }, {
          name: 'vue-router',
          value: 23
        }, {
          name: 'axios',
          value: 11
        }, {
          name: 'vuex',
          value: 9
        }]
      }
      this.chartSettings = {
        name: 'Bundle analyze', // 根节点名称
        roam: 'move'  // 禁用缩放
      },
      this.title = {
        text: 'Webpack bundle analyze'
      }
      this.tooltip = {
        formatter: '{b}:<br /> Bundle size: {c}KB'
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| data.measures | 矩形树图只需要度量即可渲染 | [Array] |  |

> Tip: 其他配置项请参考[treemap](http://echarts.baidu.com/option.html#series-treemap)
