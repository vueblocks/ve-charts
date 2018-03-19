# 漏斗图

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/4qzx2Lkb/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 基础漏斗图

<vuep template="#basicFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicFunnel">
<template>
  <ve-funnel-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }]
      }
    }
  }
</script>

## 漏斗图 - 金字塔

<vuep template="#funnelSortFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="funnelSortFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }]
      }
      this.chartSettings = {
        funnelSort: 'asc'
      }
    }
  }
</script>

## 漏斗图 - 左对齐

<vuep template="#funnelAlignRose" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="funnelAlignRose">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }]
      }
      this.chartSettings = {
        funnelAlign: 'left'
      }
    }
  }
</script>

## 漏斗图 - 标签在内部

<vuep template="#labelPositionRose" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="labelPositionRose">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }]
      }
      this.chartSettings = {
        labelPosition: 'inside'
      }
    }
  }
</script>

## 对比漏斗图

<vuep template="#contrastFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="contrastFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000]
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000]
        }]
      }
      this.chartSettings = {
        contrast: true
      }
    }
  }
</script>

## 对称漏斗图

<vuep template="#symmetricFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="symmetricFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000]
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000]
        }]
      }
      this.chartSettings = {
        symmetric: true
      }
    }
  }
</script>

## 对称漏斗图 - 标签在内部

<vuep template="#symmetricLabelFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="symmetricLabelFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000]
        }, {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 2000]
        }]
      }
      this.chartSettings = {
        symmetric: true,
        labelPosition: 'inside'
      }
    }
  }
</script>

## 多个漏斗图

> 覆盖 `series` 属性，构建多个漏斗图。

<vuep template="#multipleFunnel" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="multipleFunnel">
<template>
  <ve-funnel-chart :data="chartData" :series="series" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: '渠道',
          data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
        },
        measures: [{
          name: 'PV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }, {
          name: 'UV',
          data: [36000, 30000, 24000, 18000, 12000, 6000]
        }]
      }
      this.series = [
        {
          type: 'funnel',
          width: '40%',
          left: '10%',
          top: '15%',
          label: {
            normal: {
              position: 'left'
            }
          }
        },
        {
          type: 'funnel',
          width: '40%',
          left: '50%',
          top: '15%',
          sort: 'ascending'
        }
      ]
    }
  }
</script>

## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| funnelSort | 漏斗图排序方式，默认为倒序 `desc` | String | `asc`: 正序 | 
| funnelAlign | 水平方向对齐布局类型，默认居中对齐 | String | 参见[文档](http://echarts.baidu.com/option.html#series-funnel.funnelAlign) |
| labelPosition | 标签的位置，默认为显示在外侧 | String | 参见[文档](http://echarts.baidu.com/option.html#series-funnel.label.position) |
| symmetric | 对称漏斗图开关，默认为 `false` | Boolean | `true`: 开启对称漏斗图 |
| contrast | 对比漏斗图开关，默认为 `false` | Boolean | `true`: 开启对比漏斗图 |

> Tip: