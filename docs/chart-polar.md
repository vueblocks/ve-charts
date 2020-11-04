# 极区图

极区图又名极地图，是以极地坐标系上绘制的面积图或者柱形图/条形图，极区图用半径/圆周表示数值或者类目

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/n8oxpfu6/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 基础极区图

<vuep template="#basicPolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicPolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'week',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        measures: [{
          name: '健身记录',
          data: [15, 30, 45, 60, 75, 90, 100]
        }]
      }
      this.settings = {
        polarType: 'bar'
      }
    }
  }
</script>

## 极区柱形图（环形）

<vuep template="#circlePolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="circlePolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'product',
          data: ['拿铁', '摩卡', '意式', '美式']
        },
        measures: [
          {
            name: '2017',
            data: [43.2, 23.9, 87.7, 77.2]
          },
          {
            name: '2018',
            data: [33.9, 76.8, 65.1, 20.8]
          },
          {
            name: '2019',
            data: [90.7, 78.6, 28.7, 53.9]
          }
        ]
      }
      this.settings = {
        polarType: 'bar'
      }
    }
  }
</script>

## 极区堆叠柱形图（环形）

<vuep template="#circleStackPolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="circleStackPolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'product',
          data: ['拿铁', '摩卡', '意式', '美式']
        },
        measures: [
          {
            name: '2017',
            data: [43.2, 23.9, 87.7, 77.2]
          },
          {
            name: '2018',
            data: [33.9, 76.8, 65.1, 20.8]
          },
          {
            name: '2019',
            data: [90.7, 78.6, 28.7, 53.9]
          }
        ]
      }
      this.settings = {
        polarType: 'bar',
        stack: {}
      }
    }
  }
</script>

## 极区面积图（径向）

<vuep template="#radialAreaPolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="radialAreaPolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'product',
          data: ['拿铁', '摩卡', '意式', '美式']
        },
        measures: [
          {
            name: '2017',
            data: [43.2, 23.9, 87.7, 77.2]
          },
          {
            name: '2018',
            data: [33.9, 76.8, 65.1, 20.8]
          },
          {
            name: '2019',
            data: [90.7, 78.6, 28.7, 53.9]
          }
        ]
      }
      this.settings = {
        polarType: 'line',
        radial: true,
        areaStyle: {}
      }
    }
  }
</script>

## 极区柱形图（径向）

<vuep template="#radialBarPolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="radialBarPolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'product',
          data: ['拿铁', '摩卡', '意式', '美式']
        },
        measures: [
          {
            name: '2017',
            data: [43.2, 23.9, 87.7, 77.2]
          },
          {
            name: '2018',
            data: [33.9, 76.8, 65.1, 20.8]
          },
          {
            name: '2019',
            data: [90.7, 78.6, 28.7, 53.9]
          }
        ]
      }
      this.settings = {
        polarType: 'bar',
        radial: true
      }
    }
  }
</script>

## 极区堆叠柱形图（径向）

<vuep template="#radialStackPolar" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="radialStackPolar">
<template>
  <ve-polar-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'product',
          data: ['拿铁', '摩卡', '意式', '美式']
        },
        measures: [
          {
            name: '2017',
            data: [43.2, 23.9, 87.7, 77.2]
          },
          {
            name: '2018',
            data: [33.9, 76.8, 65.1, 20.8]
          },
          {
            name: '2019',
            data: [90.7, 78.6, 28.7, 53.9]
          }
        ]
      }
      this.settings = {
        polarType: 'bar',
        radial: true,
        stack: {}
      }
    }
  }
</script>

## settings 配置项

| 配置项 | 说明 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| polarType | 渲染 polar 的系列类型 | String | `bar`、`line` | - |
| stack | 设置数据堆叠 | Object | - |  |
| areaStyle | 设置面积图，当 polarType 为 `line` 时生效 | Object | - |  |
| radial | 设置数据展示方式 | Boolean | `true`：径向、`false`：环形 | 默认：`false`，代表环形 |
| clockwise | 增长方向 | Boolean | `true`：顺时针、`false`：逆时针 | 默认：`true` |
| startAngle | 起始角度 | Number | - | 默认：`90` |
| showAngleAxisLine | 角度轴轴线 | Boolean | - | 默认：`true` |
| showAngleSplitLine | 角度轴分割线 | Boolean | - | 默认：`true` |
| showAngleAxisLabel | 角度轴标签 | Boolean | - | 默认：`true` |
| angleAxisLabelType | 设置角度轴标签格式化规则 | Array | `en`、`zh`、`percentage` | `en` 英文数字规则；`zh` 中文数字规则；`percentage` 百分比 |
| angleAxisLabelDigits | 设置角度轴标签格式化后保留几位小数，配合 `yAxisLabelType` 使用 | Number/Array | 0 ~ 20 | 默认值为 0 |
| AngleAxisMax | 角度轴刻度最大值 | Array | - | 参见[文档](https://echarts.apache.org/zh/option.html#angleAxis.max) |
| AngleAxisMin | 角度轴刻度最小值 | Array | - | 参见[文档](https://echarts.apache.org/zh/option.html#angleAxis.min) |
| 
