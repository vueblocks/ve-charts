# 漏斗图

## 示例

<iframe width="100%" height="480" src="//jsfiddle.net/vecharts/4qzx2Lkb/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


### 基础漏斗图

<vuep template="#basicFunnel"></vuep>

<script v-pre type="text/x-template" id="basicFunnel">
<template>
  <ve-funnel-chart :data="chartData" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 漏斗图 - 金字塔

<vuep template="#funnelSortFunnel"></vuep>

<script v-pre type="text/x-template" id="funnelSortFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 漏斗图 - 左对齐

<vuep template="#funnelAlignRose"></vuep>

<script v-pre type="text/x-template" id="funnelAlignRose">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 漏斗图 - 标签在内部

<vuep template="#labelPositionRose"></vuep>

<script v-pre type="text/x-template" id="labelPositionRose">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 对比漏斗图

<vuep template="#contrastFunnel"></vuep>

<script v-pre type="text/x-template" id="contrastFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 对称漏斗图

<vuep template="#symmetricFunnel"></vuep>

<script v-pre type="text/x-template" id="symmetricFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### 对称漏斗图 - 标签在内部

<vuep template="#symmetricLabelFunnel"></vuep>

<script v-pre type="text/x-template" id="symmetricLabelFunnel">
<template>
  <ve-funnel-chart :data="chartData" :settings="chartSettings" />
</template>

<script>
 module.exports = {
    components: {
    	VeFunnelChart: window['ve-charts'].default.VeFunnelChart
  	},
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

### settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| smooth | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](http://echarts.baidu.com/option.html#series-line.smooth) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`React`与`Angular`以`lang`堆叠 |

> Tip: