import { max } from 'lodash'

const baseData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [{
    name: 'PV',
    data: [36000, 30000, 24000, 18000, 12000, 6000]
  }]
}

const compareData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [{
    name: 'PV',
    data: [100, 80, 60, 50, 40, 20]
  }, {
    name: 'UV',
    data: [80, 75, 50, 40, 32, 10]
  }]
}

const sameData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [{
    name: 'PV',
    data: [36000, 28000, 24000, 20000, 12000, 6000]
  }, {
    name: 'PV',
    data: [36000, 28000, 24000, 20000, 12000, 6000]
  }, {
    name: 'PV',
    data: [36000, 28000, 24000, 20000, 12000, 6000]
  }]
}

export default {
  name: '漏斗图',
  type: 'funnel',
  chartData: [
    {
      title: '简单漏斗图',
      data: baseData,
      settings: {}
    },
    {
      title: '漏斗图 - 金字塔',
      data: baseData,
      settings: {
        funnelSort: 'asc'
      }
    },
    {
      title: '漏斗图 - 左对齐',
      data: baseData,
      settings: {
        funnelAlign: 'left'
      }
    },
    {
      title: '漏斗图 - 标签在内部',
      data: baseData,
      settings: {
        labelPosition: 'inside'
      }
    },
    {
      title: '对比漏斗图',
      data: compareData,
      settings: {
        contrast: true
      }
    },
    {
      title: '漏斗图 - 转化率',
      data: sameData,
      settings: {
        funnelLabel: [
          {
            normal: {
              position: 'right'
            }
          },
          {
            normal: {
              position: 'left',
              formatter: function (params) {
                const [, value] = params.value
                return value
              }
            }
          },
          {
            normal: {
              position: 'inside',
              formatter: function (params) {
                const [, value] = params.value
                const maxMea = max([36000, 28000, 24000, 20000, 12000, 6000])
                return `转化率 ${Math.round(value / maxMea * 100)} %`
              }
            }
          }
        ]
      }
    },
    {
      title: '对称漏斗图',
      data: compareData,
      settings: {
        symmetric: true
      }
    },
    {
      title: '对称漏斗图 - 标签在内部',
      data: compareData,
      settings: {
        symmetric: true,
        labelPosition: 'inside'
      }
    },
    {
      title: '多个漏斗图',
      data: compareData,
      settings: {
      },
      xprops: {
        series: [
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
  ]
}
