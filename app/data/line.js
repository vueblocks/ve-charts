import lineWithMarkArea from '@/constant/lineWithMarkArea'

const simpleData = {
  dimensions: {
    name: 'Week',
    data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
  },
  measures: [{
    name: 'Vue',
    data: [2100, 2800, 3500, 5400, 2600, 4100, 3300]
  }]
}

const numberData = {
  dimensions: {
    name: 'Week',
    data: ['1', '2', '3', '4', '5', '6', '7']
  },
  measures: [{
    name: 'Vue',
    data: [2100, 2800, 3500, 5400, 2600, 4100, 3300]
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
      title: '基础折线图（维度为类数字）',
      data: numberData,
      settings: {}
    },
    {
      title: '基础折线图',
      data: simpleData,
      settings: {
        yAxisName: '单位'
        // yAxisInterval: 0.05
        // yAxisMax: 120
        // yAxisMin: 20
        // yAxisScale: false
      }
    },
    {
      title: '区域折线图（面积图）',
      data: simpleData,
      settings: {
        smooth: true,
        areaStyle: {}
      }
    },
    {
      title: '堆叠面积图',
      data: baseData,
      settings: {
        smooth: true,
        areaStyle: {},
        stack: {
          repo: [
            'Vue',
            'React',
            'Angular'
          ]
        },
        itemStyle: {
          'Vue': {
            color: '#f4a'
          },
          'React': {
            color: '#af4'
          },
          'Angular': {
            color: '#4af'
          }
        }
      }
    },
    {
      title: '百分比堆叠面积图',
      data: baseData,
      settings: {
        smooth: true,
        areaStyle: {},
        yAxisLabelType: 'percentage',
        percentage: true,
        stack: {
          repo: [
            'Vue',
            'React',
            'Angular'
          ]
        },
        tooltipFormatter: function (params) {
          let [tar] = params
          const tooltipContent = params.map(v => {
            return `${v.seriesName}：${(
              v.value[v.seriesIndex + 1] * 100
            ).toFixed(2)} %`
          }).join('<br/>')
          return tar.name + '<br/>' + tooltipContent
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
