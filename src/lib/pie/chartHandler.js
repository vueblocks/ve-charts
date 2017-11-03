function getPieTooltip (args) {
  return {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  }
}

function getPieLegend (args) {
  const { data, settings } = args
  const { dimension } = data
  const { legendType, legendPadding } = settings
  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: dimension
  }
}

function getPieSeries(args) {
  const { data, settings, isDonut } = args
  const { measure } = data
  const {
    offsetY,
    radius,
    label,
    selectedMode,
    connect
  } = settings
  const series = []
  const dataIndex = connect ? connect.dataIndex : -1

  const getRadius = () => {
    return isDonut
      ? [radius, '70%']
      : radius
  }

  measure.forEach(({ name, data }, idx) => {
    series.push({
      name,
      type: 'pie',
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius: getRadius(),
      label: label || {},
      avoidLabelOverlap: !isDonut,
      data: dataIndex === -1 ? data : getSeriesData(data, {
        connect
      })
    })
  })
  return series
}

function getSeriesData(data, options) {
  const {
    connect: {
      dataIndex,
      selected,
      normalShadowBlur
    }
  } = options

  return data.map((v, i) => {
    if (i === dataIndex) {
      return {
        ...v,
        selected,
        itemStyle: {
          normal: {
            shadowBlur: normalShadowBlur
          }
        }
      }
    }
    return v
  })
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const tooltip = tooltipVisible && getPieTooltip()

  const legend = legendVisible && getPieLegend({ data, settings })

  const series = getPieSeries({ data, settings, isDonut })

  // build echarts options
  const options = {
    tooltip,
    legend,
    series
  }

  return options
}

export const donut = (data, settings, extra) => {
  return pie(data, settings, extra, true)
}
