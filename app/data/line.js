import lineWithMarkArea from '@/constant/lineWithMarkArea'

const simpleData = {
  dimensions: {
    name: 'Week',
    data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
  },
  measures: [{
    name: 'Vue',
    data: [30, 40, 35, 50, 49, 70, 90]
  }]
}

const baseData = {
  dimensions: {
    name: 'Month',
    data: [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
      'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ]
  },
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
      title: '无数据',
      data: {},
      settings: {}
    },
    {
      title: '基础折线图',
      data: simpleData,
      settings: {
        yAxisName: '单位'
        // yAxisInterval: '10',
        // yAxisMax: 120
        // yAxisMin: 20
        // yAxisScale: false
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
        step: 'start',
        yAxisLabelType: 'zh'
      }
    },
    {
      title: '折线图设置 - 平滑曲线',
      data: simpleData,
      settings: {
        smooth: true
      }
    },
    {
      title: '折线图设置 - 拐点样式',
      data: simpleData,
      settings: {
        symbol: 'circle'
      }
    },
    {
      title: '折线图设置 - 数据标签',
      data: baseData,
      settings: {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        },
        smooth: true
      }
    },
    {
      title: '折线图使用 markArea',
      xprops: lineWithMarkArea
    }
  ]
}
