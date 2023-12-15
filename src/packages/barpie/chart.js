import { isArray, isUndefined } from 'lodash-es'

import { options, waterfallConfig } from '../../base-options'
import { getDataset, getStackMap, formatMeasure } from '../../utils'
import BaseChart from '../../BaseChart'
import echarts from 'echarts/lib/echarts'

class BarpieChart extends BaseChart {
  // build tooltip
  static getBarTooltip (data, settings) {
    const { tooltipOptions, childSetting = { series: {}, legend: {}, legendShow: {}, contentSize: {} } } = settings
    const { series, legend, ...others } = childSetting
    function returnPieData (data, dimensionName) {
      return {
        series: {
          type: 'pie',
          data: data,
          center: ['20%', '50%'],
          label: {
            show: false
          },
          ...series
        },
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            return params.name + ' : ' + params.value + ' (' + params.percent + '%)'
          }
        },
        color: ['#426fff', '#40adff', '#3fdace', '#18bdb0', '#ffda3e', '#ffa900', '#83dd89', '#bedf65', '#956bfd', '#f67bb2'],
        animation: false,
        legend: {
          type: 'scroll',
          orient: 'vertical',
          top: '5%',
          left: '40%',
          data: data, // 可配置name,icon,textStyle
          itemWidth: 10,
          itemHeight: 6,
          textStyle: {
            color: 'black',
            fontSize: 12,
            fontFamily: 'sans-serif',
            rich: {
              name: {
                width: 100,
                align: 'left'
              },
              value: {
                width: 100,
                align: 'left'
              },
              percent: {
                width: 50,
                height: '14',
                align: 'left'
              }
            }
          },
          tooltip: {
            show: true,
            formatter: (params) => {
              let index = dimensionName.indexOf(params.name)
              let value = data[index].value.toLocaleString('en-US', { maximumFractionDigits: 2 })
              return `${params.name} : ${value}`
            }
          },
          pageIconColor: '#426FFF', // 翻页下一页的三角按钮颜色
          pageIconInactiveColor: '#aaa', // 翻页（即翻页到头时）
          pageIconSize: 10, // 翻页按钮大小
          pageButtonItemGap: 5, // 翻页按钮的两个之间的间距
          formatter: (name) => {
            let index = dimensionName.indexOf(name)
            let legendShow = {
              name: true,
              value: true,
              percent: true,
              ...childSetting['legendShow']
            }
            const sum = data.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.value
            }, 0)
            let p = (data[index].value / sum * 100).toFixed(childSetting['toFix'] || 2)
            let value = data[index].value.toLocaleString('en-US', { maximumFractionDigits: 2 })
            let thisName = name.length > 10 ? name.substr(0, 10) + '...' : name
            if (!legendShow.value && !legendShow.percent) {
              return '{name|' + thisName + '}'
            } else if (!legendShow.value) {
              return '{name|' + thisName + '}{percent|' + p + '%}'
            } else if (!legendShow.percent) {
              return '{name|' + thisName + '}{value|' + value + '}'
            } else {
              return '{name|' + thisName + '}{value|' + value + '}{percent|' + p + '%}'
            }
          },
          ...legend
        },
        ...others
      }
    }

    function initPieTooltip (data, dimensionName) {
      setTimeout(() => { // 使用延迟机制，先执行formatter的div创建
        if (document.getElementById('pieTooltip') !== null) {
          let tooltipChart = echarts.init(document.getElementById('pieTooltip'))
          tooltipChart.setOption(returnPieData(data, dimensionName))
        }
      }, 0)
    }

    return {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      show: true,
      enterable: true,
      hideDelay: 500,
      backgroundColor: 'rgb(255,255,255,0.94)',
      textStyle: {
        color: 'black'
      },
      transitionDuration: 0.4,
      confine: true,
      ...tooltipOptions,
      formatter: (params) => {
        let dax = params[0].dataIndex
        let childData = data.childData[dax]
        let dimensionName = childData.map(item => {
          item.icon = item.icon ? item.icon : 'circle'
          return item.name
        })
        let contentSize = {
          width: '500px',
          height: '200px',
          ...childSetting['contentSize']
        }
        initPieTooltip(childData, dimensionName)
        return `<div id="tooltip" style="width: ${contentSize['width']};height: ${contentSize['height']}+30px;border-radius: 2px;box-shadow: 0 0 20px 0 rgba(110, 117, 145, 0.1);padding: 10px;">${params[0].name}<br/>
                 <div id="pieTooltip" style="width: ${contentSize['width']};height: ${contentSize['height']};"></div></div>`
      }
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

    // deviated from markLine/markArea of the series
    if (markLine || markArea) {
      series.push({ type: 'bar', name: '', data: [], markLine, markArea })
    }

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
        label: BarpieChart.getBarLabel(setLabel, isBar),
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

    const tooltip = tooltipVisible && BarpieChart.getBarTooltip(data, settings)

    const legend = legendVisible && BarpieChart.getBarLegend(data, settings)

    const grid = BarpieChart.getBarGrid(isBar)

    const xAxis = isBar ? BarpieChart.getBarMeaAxis(data, settings) : BarpieChart.getBarDimAxis(settings)

    const yAxis = isBar ? BarpieChart.getBarDimAxis(settings) : BarpieChart.getBarMeaAxis(data, settings)

    const series = BarpieChart.getBarSeries(data, settings, isBar)

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

export default BarpieChart
