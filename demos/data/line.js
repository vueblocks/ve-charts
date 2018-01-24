const simpleData = {
  dimensions: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.'],
  measures: [{
    name: 'Vue',
    data: [30, 40, 35, 50, 49, 70, 90]
  }]
}
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
  name: '折线图',
  type: 'line',
  chartData: [
    {
      title: '基础折线图',
      data: simpleData,
      settings: {}
    },
    {
      title: '平滑曲线折线图',
      data: simpleData,
      settings: {
        smooth: true
      }
    },
    {
      title: '区域折线图',
      data: simpleData,
      settings: {
        smooth: true,
        areaStyle: {}
      }
    },
    {
      title: '折线图拐点设置',
      data: simpleData,
      settings: {
        symbol: 'circle'
      }
    },
    {
      title: '多条折线图',
      data: baseData,
      settings: {
        label: {
          show: true,
          fontSize: '12px',
          fontWeight: 'bold'
        },
        smooth: true
      }
    },
    {
      title: '堆叠折线图',
      data: baseData,
      settings: {
        smooth: true,
        stack: {
          repo: [
            'React',
            'Angular'
          ]
        }
      }
    },
    {
      title: '阶梯折线图',
      data: baseData,
      settings: {
        step: 'start'
      }
    }
  ]
}
