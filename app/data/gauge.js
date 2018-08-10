import { random } from 'lodash'

const baseData = {
  measures: [{
    name: '业务指标',
    data: [
      { name: '完成率', value: random(10, 100) }
    ]
  }]
}

// const setInterval = (() => {
//   baseData.measures.data[0].value = random(10, 100)
// }, 2000)

export default {
  name: '仪表盘',
  type: 'gauge',
  chartData: [
    {
      title: '基础仪表盘',
      data: baseData,
      settings: {
        detail: {
          formatter: '{value}%'
        }
      }
    },
    {
      title: '仪表盘（文字）',
      data: baseData,
      settings: {
        axisLabel: {
          formatter: (e) => {
            switch (e + '') {
              case '20':
                return '低'
              case '50':
                return '中'
              case '80':
                return '高'
            }
          }
        }
      }
    },
    {
      title: '仪表盘（改变颜色）',
      data: baseData,
      settings: {
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#5282e4'],
              [0.8, '#ffd600'],
              [1, '#f35352']
            ]
          }
        }
      }
    },
    {
      title: '仪表盘（半圆）',
      data: baseData,
      settings: {
        startAngle: 180,
        endAngle: 0
      }
    }
  ]
}
