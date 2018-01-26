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
    data: [36000, 28000, 24000, 20000, 12000, 6000]
  }, {
    name: 'UV',
    data: [28000, 22000, 18000, 14000, 8000, 2000]
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
    }
  ]
}
