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
    { data: [4300, 10000, 28000, 35000, 50000, 19000], name: '预算分配（Allocated Budget）' },
    { data: [5000, 14000, 28000, 31000, 42000, 21000], name: '实际开销（Actual Spending）' }
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
    }
    // {
    //   title: '显示文本标签',
    //   data: baseData,
    //   settings: {
    //     label: {
    //       show: true,
    //       fontSize: '12px',
    //       fontWeight: 'bold'
    //     }
    //   }
    // },
    // {
    //   title: '堆叠柱状图',
    //   data: baseData,
    //   settings: {
    //     stack: {
    //       量级: [
    //         '蒸发量',
    //         '降水量'
    //       ]
    //     }
    //   }
    // }
  ]
}
