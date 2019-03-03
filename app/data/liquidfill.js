export default {
  name: '水球图',
  type: 'liquidfill',
  chartData: [
    {
      title: '简单水球图',
      data: {
        measures: [{
          name: 'Sam',
          value: 0.65
        }]
      },
      settings: {}
    },
    {
      title: '多波水球图',
      data: {
        measures: [{
          name: 'Sam',
          value: 0.65
        }, {
          name: 'Tom',
          value: 0.44
        }]
      },
      settings: {
        tooltip: {
          show: true
        }
      }
    },
    {
      title: '颜色和透明度',
      data: {
        measures: [{
          name: 'a',
          value: 0.5
        }, {
          name: 'b',
          value: 0.4
        }, {
          name: 'c',
          value: 0.3
        }]
      },
      settings: {
        color: ['red', '#0f0', 'rgb(0, 0, 255)'],
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      }
    },
    {
      title: '修改单组数据',
      data: {
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
      },
      settings: {}
    },
    {
      title: '静态波',
      data: {
        measures: [0.6, 0.5, 0.4, 0.3]
      },
      settings: {
        waveAnimation: false,
        animationDuration: 0,
        animationDurationUpdate: 0
      }
    },
    {
      title: '平波',
      data: {
        measures: [0.6, 0.5, 0.4, 0.3]
      },
      settings: {
        amplitude: 0,
        waveAnimation: 0
      }
    },
    {
      title: '隐藏外轮廓',
      data: {
        measures: [0.6, 0.5, 0.4, 0.3]
      },
      settings: {
        outline: {
          show: false
        }
      }
    },
    {
      title: '正方形轮廓',
      data: {
        measures: [0.6, 0.5, 0.4, 0.3]
      },
      settings: {
        shape: 'rect'
      }
    },
    {
      title: '中心文字',
      data: {
        measures: [{
          name: '流量剩余',
          value: 0.33
        }]
      },
      settings: {
        label: {
          formatter: '流量剩余',
          fontSize: 28
        },
        tooltip: {
          show: true,
          formatter: function ({marker, name, value}) {
            return marker + name + ': ' + parseInt(value * 100) + '%'
          }
        }
      }
    }
  ]
}
