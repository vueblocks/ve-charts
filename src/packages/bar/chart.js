import { isArray, isUndefined } from 'lodash-es'

import { options, waterfallConfig } from '../../base-options'
import { getDataset, getStackMap, formatMeasure } from '../../utils'
import BaseChart from '../../BaseChart'

class BarChart extends BaseChart {
  // build tooltip
  static getBarTooltip (settings) {
    const { tooltipOptions } = settings
    return {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      ...tooltipOptions
    }
  }

  // build legend
  static getBarLegend (data, settings) {
    const { measures } = data
    const { legendType, legendPadding, waterfall, legendOptions } = settings
    let result = {
      type: legendType || 'plain',
      padding: legendPadding || 5,
      ...legendOptions
    }
    // 当配置项填入waterfall,瀑布图默认将图例去除secondaryMeasure--by:jeff
    if (waterfall && waterfall === true) {
      result['data'] = measures.filter(({ name }) => {
        if (name !== 'secondaryMeasure') return name
      })
    }
    return result
  }

  // build grid
  static getBarGrid (isBar) {
    const BarGrid = {
      right: 30,
      bottom: 10,
      left: 30,
      containLabel: true
    }
    return isBar ? BarGrid : options.grid
  }

  // build dimension Axis
  static getBarDimAxis (settings) {
    const {
      dimAxisType,
      dimAxisLineShow,
      dimAxisLabelShow,
      dimAxisLabelColor,
      xAxisName,
      xAxisSplitLine,
      dimAxisLabelRotate,
      dimAxisPointerType
    } = settings

    const axisItem = {
      type: dimAxisType,
      axisLine: {
        show: Array.isArray(dimAxisLineShow) ? dimAxisLineShow[0] : dimAxisLineShow
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: Array.isArray(dimAxisLabelShow) ? dimAxisLabelShow[0] : dimAxisLabelShow,
        margin: 10,
        fontWeight: 400,
        color: Array.isArray(dimAxisLabelColor) ? dimAxisLabelColor[0] : dimAxisLabelColor,
        rotate: dimAxisLabelRotate
      },
      axisPointer: {
        show: true,
        type: dimAxisPointerType
      }
    }
    if (xAxisName) {
      axisItem.name = xAxisName
    }

    if (xAxisSplitLine) {
      axisItem.splitLine = xAxisSplitLine
    }

    const disAxis = []
    disAxis.push(axisItem)
    return disAxis
  }

  // build measure axis
  static getBarMeaAxis (data, settings) {
    const {
      meaAxisType,
      meaAxisDigits,
      meaAxisLineShow,
      meaAxisLabelShow,
      meaAxisLabelColor,
      meaAxisLabelRotate,
      yAxisScale = false,
      percentage = false,
      yAxisName,
      yAxisInterval,
      yAxisMax,
      yAxisMin
    } = settings

    const meaAxisBase = {
      type: 'value',
      scale: yAxisScale,
      axisTick: {
        show: false
      },
      min: percentage ? 0 : null,
      max: percentage ? 1 : null
    }

    const meaAxis = []
    meaAxisType.forEach((type, i) => {
      const axisLabel = {
        show: Array.isArray(meaAxisLabelShow) ? meaAxisLabelShow[i] : meaAxisLabelShow,
        margin: 10,
        fontWeight: 400,
        color: Array.isArray(meaAxisLabelColor) ? meaAxisLabelColor[i] : meaAxisLabelColor,
        rotate: meaAxisLabelRotate
      }
      if (type !== 'normal') {
        // Y轴标签格式化后保留几位小数兼容之前版本类型
        if (isArray(meaAxisDigits)) {
          let num = isUndefined(meaAxisDigits[i]) ? 0 : meaAxisDigits[i]
          axisLabel.formatter = value => formatMeasure(type, value, num)
        } else {
          axisLabel.formatter = value => formatMeasure(type, value, meaAxisDigits)
        }
      }
      const axisLine = {
        show: Array.isArray(meaAxisLineShow) ? meaAxisLineShow[i] : meaAxisLineShow
      }

      const axisItem = {
        ...meaAxisBase,
        axisLabel,
        axisLine
      }
      if (yAxisName && yAxisName.length) {
        axisItem['name'] = yAxisName[i]
      }
      if (yAxisInterval && yAxisInterval.length) {
        if (yAxisInterval[i]) { // 容错处理，当第二个值为空时，不设置interval
          axisItem['interval'] = Number(yAxisInterval[i])
        }
      }
      // 当开启百分比模式时，轴最大和最小刻度设置无效
      if (percentage === false && yAxisMax && yAxisMax.length) {
        axisItem['max'] = yAxisMax[i]
      }
      if (percentage === false && yAxisMin && yAxisMin.length) {
        axisItem['min'] = yAxisMin[i]
      }
      meaAxis.push(axisItem)
    })
    return meaAxis
  }

  // build label
  static getBarLabel (setLabel, isBar) {
    const {
      position = isBar ? 'right' : 'top',
      formatType = 'currency',
      formatDigits = 0,
      ...others
    } = setLabel
    const formatter = params => {
      const { value, seriesIndex } = params
      // dataset formatter need shift the value
      value.shift()
      return formatMeasure(formatType, value[seriesIndex], formatDigits)
    }
    return {
      position,
      formatter,
      ...others
    }
  }

  // build series
  static getBarSeries (data, settings, isBar) {
    const { measures } = data
    const {
      label = {},
      showLine = [],
      stack = null,
      secondMeaAxis = [],
      itemStyle = {},
      waterfall,
      markLine = null,
      markArea = null,
      ...others
    } = settings

    const axisIndexName = isBar ? 'xAxisIndex' : 'yAxisIndex'
    const series = []
    const stackMap = stack && getStackMap(stack)

    measures.forEach(({ name }) => {
      // label数据类型调整为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置----by:Jeff
      let setLabel = {}
      if (label instanceof Array) {
        setLabel = label.filter(item => item.name === name)[0]
        if (setLabel === undefined) setLabel = {}
      } else {
        setLabel = label
      }
      // ------------end-----------
      const type = showLine.includes(name) ? 'line' : 'bar'
      const seriesItem = {
        type,
        name,
        label: BarChart.getBarLabel(setLabel, isBar),
        stack: stack && stackMap[name],
        [axisIndexName]: secondMeaAxis.includes(name) ? '1' : '0',
        itemStyle: itemStyle[name] ? itemStyle[name] : {},
        ...others
      }
      // 当配置项填入waterfall,瀑布图默认将secondaryMeasure图设置透明--by:jeff
      if (waterfall && waterfall === true) {
        if (name === 'secondaryMeasure') {
          seriesItem['itemStyle'] = waterfallConfig[name]
        }
      }
      series.push(seriesItem)
    })

    // deviated from markLine/markArea of the series
    if (markLine || markArea) {
      series.push({ type: 'bar', name: '', data: [], markLine, markArea })
    }
    return series
  }

  bar (data, settings, extra) {
    const { tooltipVisible, legendVisible, isEmptyData } = extra
    const {
      direction = 'column',
      secondMeaAxis = null,
      yAxisLabelType,
      yAxisLabelDigits = 0,
      yAxisName,
      yAxisLabelShow = [true, true],
      yAxisLineShow = [true, true],
      yAxisLabelColor = [null, null],
      xAxisLabelType,
      xAxisLabelDigits = 0,
      xAxisName,
      xAxisLabelShow = true,
      xAxisLineShow = true,
      xAxisLabelColor = null,
      xAxisLabelRotate = 0,
      yAxisLabelRotate = 0,
      xAxisPointerType,
      yAxisPointerType
    } = settings

    // 默认柱状图
    // TODO 此处注意值与命名语义相反，true代表是条形图，false是柱图
    const isBar = direction !== 'column' && direction === 'row'

    const defaultMeaAxisType = secondMeaAxis !== null ? ['normal', 'normal'] : ['normal']

    settings.meaAxisType = (isBar ? xAxisLabelType : yAxisLabelType) || defaultMeaAxisType
    settings.meaAxisDigits = isBar ? xAxisLabelDigits : yAxisLabelDigits
    settings.meaAxisName = (isBar ? xAxisName : yAxisName) || []
    settings.meaAxisLabelShow = (isBar ? xAxisLabelShow : yAxisLabelShow)
    settings.meaAxisLineShow = (isBar ? xAxisLineShow : yAxisLineShow)
    settings.meaAxisLabelColor = (isBar ? xAxisLabelColor : yAxisLabelColor)
    settings.meaAxisLabelRotate = isBar ? xAxisLabelRotate : yAxisLabelRotate
    settings.dimAxisType = (isBar ? yAxisLabelType : xAxisLabelType) || 'category'
    settings.dimAxisDigits = isBar ? yAxisLabelDigits : xAxisLabelDigits
    settings.dimAxisName = (isBar ? yAxisName : xAxisName) || ''
    settings.dimAxisLabelShow = (isBar ? yAxisLabelShow : xAxisLabelShow)
    settings.dimAxisLineShow = (isBar ? yAxisLineShow : xAxisLineShow)
    settings.dimAxisLabelColor = (isBar ? yAxisLabelColor : xAxisLabelColor)
    settings.dimAxisLabelRotate = isBar ? yAxisLabelRotate : xAxisLabelRotate
    settings.dimAxisPointerType = isBar ? yAxisPointerType : xAxisPointerType

    // 如果设置了双Y轴，将双Y轴统一设置 meaAxisType
    if (defaultMeaAxisType.length > settings.meaAxisType.length) {
      settings.meaAxisType = defaultMeaAxisType.fill(settings.meaAxisType[0])
    }

    extra.chartType = 'bar'
    const dataset = !isEmptyData && getDataset(data, settings, extra)

    const tooltip = tooltipVisible && BarChart.getBarTooltip(settings)

    const legend = legendVisible && BarChart.getBarLegend(data, settings)

    const grid = BarChart.getBarGrid(isBar)

    const xAxis = isBar ? BarChart.getBarMeaAxis(data, settings) : BarChart.getBarDimAxis(settings)

    const yAxis = isBar ? BarChart.getBarDimAxis(settings) : BarChart.getBarMeaAxis(data, settings)

    const series = BarChart.getBarSeries(data, settings, isBar)

    // 处理X轴和Y轴翻转
    const { yAxisInverse, xAxisInverse } = settings
    if (yAxisInverse !== undefined) yAxis.forEach((i, index) => { i.inverse = Array.isArray(yAxisInverse) ? yAxisInverse[index] : yAxisInverse })
    if (xAxisInverse !== undefined) xAxis.forEach(i => { i.inverse = xAxisInverse })

    // build echarts options
    const options = {
      grid,
      dataset,
      tooltip,
      legend,
      xAxis,
      yAxis,
      series
    }

    // console.log(options)

    return options
  }
}

export default BarChart
