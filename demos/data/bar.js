const baseData = {
  dimensions: [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
    'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ],
  measures: [{
    name: 'Vue',
    data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
  },
  {
    name: 'React',
    data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
  },
  {
    name: 'Angular',
    data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
  }]
}

export default {
  name: '柱状图',
  type: 'bar',
  chartData: [
    {
      title: '简单柱状图',
      data: baseData,
      settings: {}
    },
    {
      title: '显示文本标签',
      data: baseData,
      settings: {
        label: {
          show: true,
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }
    },
    {
      title: '堆叠柱状图',
      data: baseData,
      settings: {
        stack: {
          repo: [
            'React',
            'Angular'
          ]
        }
      }
    }
  ]
}
