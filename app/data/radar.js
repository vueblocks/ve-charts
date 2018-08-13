const baseData = {
  dimensions: [
    { name: '销售（sales）', max: 6500 },
    { name: '管理（Administration）', max: 16000 },
    { name: '信息技术（Information Techology）', max: 30000 },
    { name: '客服（Customer Support）', max: 38000 },
    { name: '研发（Development）', max: 52000 },
    { name: '市场（Marketing）', max: 25000 }
  ],
  measures: [
    { name: '预算分配（Allocated Budget）', data: [4300, 10000, 28000, 35000, 50000, 19000] },
    { name: '实际开销（Actual Spending）', data: [5000, 14000, 28000, 31000, 42000, 21000] }
  ]
}

export default {
  name: '雷达图',
  type: 'radar',
  chartData: [
    {
      title: '基础雷达图(线)',
      data: baseData,
      settings: {}
    },
    {
      title: '基础雷达图(面积)',
      data: baseData,
      settings: {
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        }
      }
    },
    {
      title: '自定义雷达图',
      data: baseData,
      settings: {
        radius: 120,
        splitNumber: 4,
        shape: 'circle',
        splitArea: {
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.2)', 'rgba(114, 172, 209, 0.4)',
              'rgba(114, 172, 209, 0.6)', 'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        }
      }
    }
  ]
}
