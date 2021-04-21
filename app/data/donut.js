const baseData = {
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [
    {
      name: 'PV',
      data: [40000, 27800, 22000, 20200, 15600, 13600]
    }]
}

export default {
  name: '环形图',
  type: 'donut',
  chartData: [
    {
      title: '简单环形图',
      data: baseData,
      settings: {}
    },
    {
      title: '环形图 - 选中扇区',
      data: baseData,
      settings: {
        selectedMode: 'single'
      }
    },
    {
      title: '环形图 - 半径设置',
      data: baseData,
      settings: {
        radius: ['35%', '55%']
      }
    },
    {
      title: '环形图 - 中心显示标签',
      data: baseData,
      settings: {
        label: {
          show: false,
          position: 'center',
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '24',
              fontWeight: 'bold'
            }
          }
        },
        avoidLabelOverlap: false
      }
    }
  ]
}
