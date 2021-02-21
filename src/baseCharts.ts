import * as echarts from 'echarts'

class BaseECharts {
  echarts: any

  data: object[] | object
  settings: object
  extra?: object

  constructor(data, settings, extra) {
    this.data = data
    this.settings = settings
    this.extra = extra

    this.echarts = echarts
  }
  chartHandler () {}
}

export default BaseECharts
