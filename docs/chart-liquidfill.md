# 水球图

> Tips: 水球图基于 ECharts 的 扩展 `echarts-liquidfill` 封装，在使用前需安装此扩展
> `npm install echarts-liquidfill`


## 简单水球图

<vuep template="#a" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="a">
<template>
 <ve-liquidfill-chart :data="chartData" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
        measures: [{
          name: 'Sam',
          value: 0.65
        }]
      }
    }
  }
</script>

## 多波水球图
<vuep template="#b" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="b">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  tooltip: {
          show: true
        }
      };
      this.chartData = {
         measures: [{
           name: 'Sam',
           value: 0.55
         }, {
           name: 'Tom',
           value: 0.44
         }]
      }
    }
  }
</script>

## 颜色和透明度
<vuep template="#c" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="c">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  color: ['red', '#0f0', 'rgb(0, 0, 255)'],
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      };
      this.chartData = {
         measures: [0.6, 0.5, 0.4, 0.3]
      }
    }
  }
</script>

## 修改单组数据颜色
<vuep template="#d" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="d">
<template>
 <ve-liquidfill-chart :data="chartData" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
         measures: [0.5, 0.4, {
           value: 0.3,
           itemStyle: {
             color: 'red',
             opacity: 0.6
           },
           emphasis: {
             itemStyle: {
               opacity: 0.9
             }
           }
         }]
      }
    }
  }
</script>

## 静态波
<vuep template="#e" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="e">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  waveAnimation: false,
        animationDuration: 0,
        animationDurationUpdate: 0
      };
      this.chartData = {
         measures: [0.6, 0.5, 0.4, 0.3]
      }
    }
  }
</script>

## 平波
<vuep template="#f" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="f">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	   amplitude: 0,
         waveAnimation: 0
      };
      this.chartData = {
         measures: [0.6, 0.5, 0.4, 0.3]
      }
    }
  }
</script>

## 隐藏外轮廓
<vuep template="#g" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="g">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  outline: {
          show: false
        }
      };
      this.chartData = {
         measures: [0.6, 0.5, 0.4, 0.3]
      }
    }
  }
</script>

## 正方形轮廓
<vuep template="#h" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="h">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  shape: 'rect'
      };
      this.chartData = {
         measures: [0.6, 0.5, 0.4, 0.3]
      }
    }
  }
</script>

## 中心文字
<vuep template="#text" :options="{ theme: 'vue', lineNumbers: false }"></vuep>
<script v-pre type="text/x-template" id="text">
<template>
 <ve-liquidfill-chart :data="chartData" :settings="settings" />
</template>

<script>
 module.exports = {
    created () {
      this.settings = {
    	  label: {
          formatter: '流量剩余',
          fontSize: 28,
          position: ['50%','30%']
        },
        tooltip: {
          show: true,
          formatter: function ({marker, name, value}) {
            return marker + name + ': ' + parseInt(value * 100) + '%'
          }
        }
      };
      this.chartData = {
         measures: [{
           name: '流量剩余',
           value: 0.33
         }]
      }
    }
  }
</script>


## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| measures | 数据 | number/Object | |
| itemStyle | 图形样式 | Object | |
| waveAnimation | 波浪动画 | Boolean |  |
| animationDurationUpdate | 波浪动画速度 | Number |  |
| backgroundStyle | 背景样式 | Object |  |
| shape | 轮廓外形 | String | 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow' |

> Tip: 其他配置项请参考[liquidfill](https://github.com/ecomfe/echarts-liquidfill)
