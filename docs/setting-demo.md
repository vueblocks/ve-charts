# 属性配置

## 数据项为空

<vuep template="#emptyData" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="emptyData">
<template>
  <ve-line-chart :data="chartData" :empty-text="emptyText" />
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {}
      this.emptyText = '空数据'
    }
  }
</script>

## 自定义空数据模版

<vuep template="#emptyTemp" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="emptyTemp">
<template>
  <ve-line-chart :data="chartData">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <span>让数据飞一会儿</span>
    </div>
  </ve-line-chart>
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {}
    }
  }
</script>

## 更换主题

> 支持 `Object` 格式的主题，可以通过 [echarts主题构建工具](http://echarts.baidu.com/theme-builder/) 生成，下例为 `walden` 主题的应用

<vuep template="#changeTheme" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="changeTheme">
<template>
  <ve-bar-chart :data="chartData" :theme="theme" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'pv',
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }, {
          name: 'uv',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }]
      }
      // echarts walden theme
      this.theme = {
        "color": ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"],
        "backgroundColor": "rgba(252,252,252,0)",
        "textStyle": {},
        "title": {
          "textStyle": {
            "color": "#666666"
          },
          "subtextStyle": {
            "color": "#999999"
          }
        },
        "line": {
          "itemStyle": {
            "normal": {
              "borderWidth": "2"
            }
          },
          "lineStyle": {
            "normal": {
              "width": "3"
            }
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false
        },
        "radar": {
          "itemStyle": {
            "normal": {
              "borderWidth": "2"
            }
          },
          "lineStyle": {
            "normal": {
              "width": "3"
            }
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false
        },
        "bar": {
          "itemStyle": {
            "normal": {
              "barBorderWidth": 0,
              "barBorderColor": "#ccc"
            },
            "emphasis": {
              "barBorderWidth": 0,
              "barBorderColor": "#ccc"
            }
          }
        },
        "pie": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "scatter": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "boxplot": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "parallel": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "sankey": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "funnel": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "gauge": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            },
            "emphasis": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          }
        },
        "candlestick": {
          "itemStyle": {
            "normal": {
              "color": "#e6a0d2",
              "color0": "transparent",
              "borderColor": "#e6a0d2",
              "borderColor0": "#3fb1e3",
              "borderWidth": "2"
            }
          }
        },
        "graph": {
          "itemStyle": {
            "normal": {
              "borderWidth": 0,
              "borderColor": "#ccc"
            }
          },
          "lineStyle": {
            "normal": {
              "width": "1",
              "color": "#cccccc"
            }
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false,
          "color": ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"],
          "label": {
            "normal": {
              "textStyle": {
                "color": "#ffffff"
              }
            }
          }
        },
        "map": {
          "itemStyle": {
            "normal": {
              "areaColor": "#eeeeee",
              "borderColor": "#aaaaaa",
              "borderWidth": 0.5
            },
            "emphasis": {
              "areaColor": "rgba(63,177,227,0.25)",
              "borderColor": "#3fb1e3",
              "borderWidth": 1
            }
          },
          "label": {
            "normal": {
              "textStyle": {
                "color": "#ffffff"
              }
            },
            "emphasis": {
              "textStyle": {
                "color": "rgb(63,177,227)"
              }
            }
          }
        },
        "geo": {
          "itemStyle": {
            "normal": {
              "areaColor": "#eeeeee",
              "borderColor": "#aaaaaa",
              "borderWidth": 0.5
            },
            "emphasis": {
              "areaColor": "rgba(63,177,227,0.25)",
              "borderColor": "#3fb1e3",
              "borderWidth": 1
            }
          },
          "label": {
            "normal": {
              "textStyle": {
                "color": "#ffffff"
              }
            },
            "emphasis": {
              "textStyle": {
                "color": "rgb(63,177,227)"
              }
            }
          }
        },
        "categoryAxis": {
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#cccccc"
            }
          },
          "axisTick": {
            "show": false,
            "lineStyle": {
              "color": "#333"
            }
          },
          "axisLabel": {
            "show": true,
            "textStyle": {
              "color": "#999999"
            }
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": ["#eeeeee"]
            }
          },
          "splitArea": {
            "show": false,
            "areaStyle": {
              "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
            }
          }
        },
        "valueAxis": {
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#cccccc"
            }
          },
          "axisTick": {
            "show": false,
            "lineStyle": {
              "color": "#333"
            }
          },
          "axisLabel": {
            "show": true,
            "textStyle": {
              "color": "#999999"
            }
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": ["#eeeeee"]
            }
          },
          "splitArea": {
            "show": false,
            "areaStyle": {
              "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
            }
          }
        },
        "logAxis": {
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#cccccc"
            }
          },
          "axisTick": {
            "show": false,
            "lineStyle": {
              "color": "#333"
            }
          },
          "axisLabel": {
            "show": true,
            "textStyle": {
              "color": "#999999"
            }
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": ["#eeeeee"]
            }
          },
          "splitArea": {
            "show": false,
            "areaStyle": {
              "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
            }
          }
        },
        "timeAxis": {
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#cccccc"
            }
          },
          "axisTick": {
            "show": false,
            "lineStyle": {
              "color": "#333"
            }
          },
          "axisLabel": {
            "show": true,
            "textStyle": {
              "color": "#999999"
            }
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": ["#eeeeee"]
            }
          },
          "splitArea": {
            "show": false,
            "areaStyle": {
              "color": ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]
            }
          }
        },
        "toolbox": {
          "iconStyle": {
            "normal": {
              "borderColor": "#999999"
            },
            "emphasis": {
              "borderColor": "#666666"
            }
          }
        },
        "legend": {
          "textStyle": {
            "color": "#999999"
          }
        },
        "tooltip": {
          "axisPointer": {
            "lineStyle": {
              "color": "#cccccc",
              "width": 1
            },
            "crossStyle": {
              "color": "#cccccc",
              "width": 1
            }
          }
        },
        "timeline": {
          "lineStyle": {
            "color": "#626c91",
            "width": 1
          },
          "itemStyle": {
            "normal": {
              "color": "#626c91",
              "borderWidth": 1
            },
            "emphasis": {
              "color": "#626c91"
            }
          },
          "controlStyle": {
            "normal": {
              "color": "#626c91",
              "borderColor": "#626c91",
              "borderWidth": 0.5
            },
            "emphasis": {
              "color": "#626c91",
              "borderColor": "#626c91",
              "borderWidth": 0.5
            }
          },
          "checkpointStyle": {
            "color": "#3fb1e3",
            "borderColor": "rgba(63,177,227,0.15)"
          },
          "label": {
            "normal": {
              "textStyle": {
                "color": "#626c91"
              }
            },
            "emphasis": {
              "textStyle": {
                "color": "#626c91"
              }
            }
          }
        },
        "visualMap": {
          "color": ["#2a99c9", "#afe8ff"]
        },
        "dataZoom": {
          "backgroundColor": "rgba(255,255,255,0)",
          "dataBackgroundColor": "rgba(222,222,222,1)",
          "fillerColor": "rgba(114,230,212,0.25)",
          "handleColor": "#cccccc",
          "handleSize": "100%",
          "textStyle": {
            "color": "#999999"
          }
        },
        "markPoint": {
          "label": {
            "normal": {
              "textStyle": {
                "color": "#ffffff"
              }
            },
            "emphasis": {
              "textStyle": {
                "color": "#ffffff"
              }
            }
          }
        }
      }
    }
  }
</script>

## 更换配色

<vuep template="#changeColor" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="changeColor">
<template>
  <ve-pie-chart :data="chartData" :color="color" />
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
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }]
      }
      this.color = [
        '#207722',
        '#68b133',
        '#a9de83',
        '#f63629',
        '#f66258',
        '#ffc0af'
      ]
    }
  }
</script>

## 异步加载图表动效

<vuep template="#loadingData" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="loadingData">
<template>
  <ve-line-chart :data="chartData" :loading="loading" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: true,
        chartData: {}
      }
    },
    methods: {
      loadingLineData () {
        this.loading = true
        setTimeout(() => {
          this.chartData = {
            dimensions: {
              name: 'Repo',
              data: [
                'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
                'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
              ].reverse()
            },
            measures: [
              {
                name: 'Rising Star',
                data: [
                  40000, 27800, 22500, 22000, 21900,
                  20200, 17700, 15600, 14900, 14800
                ].reverse()
              }
            ]
          }
          this.loading = false
      }, 2000)
      }
    },
    created () {
      this.loadingLineData()
    }
  }
</script>

## 自定义加载图表动效

> 为了保持图表组件传入参数尽量简洁，`loading` 的背景色以及 `spinner` 暂时使用覆盖 class 方式来实现

<vuep template="#customLoading" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="customLoading">
<style>
  .custom-loading .ve-charts-loading-mask {
    background-color: rgba(0, 0, 0, .8);
  }
  .custom-loading .ve-charts-loading-mask .path {
    stroke: #f35352;
  }
</style>

<template>
  <ve-line-chart class="custom-loading" :data="chartData" :loading="loading" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: true
      }
    },
    created () {
      this.chartData = {}
    }
  }
</script>

## 自定义图表高度

<vuep template="#customHeight" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="customHeight">
<template>
  <ve-line-chart :data="chartData" :height="300" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: false
      }
    },
    created () {
      this.chartData = {
        dimensions: {
          name: 'Repo',
          data: [
            'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
            'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
          ].reverse()
        },
        measures: [
          {
            name: 'Rising Star',
            data: [
              40000, 27800, 22500, 22000, 21900,
              20200, 17700, 15600, 14900, 14800
            ].reverse()
          }
        ]
      }
    }
  }
</script>

## svg渲染图表

<vuep template="#svgChart" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="svgChart">
<template>
  <ve-line-chart :data="chartData" renderer="svg" />
</template>

<script>
 module.exports = {
    data () {
      return {
        loading: false
      }
    },
    created () {
      this.chartData = {
        dimensions: {
          name: 'Repo',
          data: [
            'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
            'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
          ].reverse()
        },
        measures: [
          {
            name: 'Rising Star',
            data: [
              40000, 27800, 22500, 22000, 21900,
              20200, 17700, 15600, 14900, 14800
            ].reverse()
          }
        ]
      }
    }
  }
</script>